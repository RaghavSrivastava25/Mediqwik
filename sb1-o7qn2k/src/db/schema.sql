-- Users table
CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  register_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  location TEXT NOT NULL
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  product_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  stock INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  tabs INTEGER NOT NULL,
  type TEXT CHECK(type IN ('OTC', 'NON_OTC')) NOT NULL,
  description TEXT,
  image_url TEXT
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  order_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  product_id INTEGER,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  total_order_value DECIMAL(10,2) NOT NULL,
  location TEXT NOT NULL,
  order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  delivery_time TIMESTAMP,
  delivery_charges DECIMAL(10,2) NOT NULL,
  gst DECIMAL(10,2) NOT NULL,
  payment_method TEXT CHECK(payment_method IN ('COD', 'UPI')) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  subscription_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  frequency TEXT NOT NULL, -- 'WEEKLY', 'MONTHLY', etc.
  quantity INTEGER NOT NULL,
  next_delivery_date DATE NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);