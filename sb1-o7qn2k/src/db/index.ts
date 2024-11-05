import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database('quickmed.db');

// Initialize database with schema
const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
db.exec(schema);

export interface User {
  user_id?: number;
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface Product {
  product_id?: number;
  name: string;
  stock: number;
  price: number;
  tabs: number;
  type: 'OTC' | 'NON_OTC';
  description?: string;
  image_url?: string;
}

export interface Order {
  order_id?: number;
  user_id?: number;
  product_id: number;
  quantity: number;
  price: number;
  total_order_value: number;
  location: string;
  delivery_charges: number;
  gst: number;
  payment_method: 'COD' | 'UPI';
}

export const db_operations = {
  // User operations
  createUser: db.prepare(`
    INSERT INTO users (name, email, phone, location)
    VALUES (@name, @email, @phone, @location)
  `),

  getUserByEmail: db.prepare(`
    SELECT * FROM users WHERE email = ?
  `),

  // Product operations
  getPopularProducts: db.prepare(`
    SELECT p.*, COUNT(o.product_id) as order_count
    FROM products p
    LEFT JOIN orders o ON p.product_id = o.product_id
    GROUP BY p.product_id
    ORDER BY order_count DESC
    LIMIT ?
  `),

  getProductById: db.prepare(`
    SELECT * FROM products WHERE product_id = ?
  `),

  // Order operations
  createOrder: db.prepare(`
    INSERT INTO orders (
      user_id, product_id, quantity, price, total_order_value,
      location, delivery_charges, gst, payment_method
    ) VALUES (
      @user_id, @product_id, @quantity, @price,
      @total_order_value, @location, @delivery_charges,
      @gst, @payment_method
    )
  `),

  // Subscription operations
  createSubscription: db.prepare(`
    INSERT INTO subscriptions (
      user_id, product_id, frequency, quantity, next_delivery_date
    ) VALUES (
      @user_id, @product_id, @frequency, @quantity, @next_delivery_date
    )
  `),

  getActiveSubscriptions: db.prepare(`
    SELECT s.*, p.name as product_name, p.price
    FROM subscriptions s
    JOIN products p ON s.product_id = p.product_id
    WHERE s.user_id = ? AND s.next_delivery_date >= DATE('now')
  `)
};

export default db;