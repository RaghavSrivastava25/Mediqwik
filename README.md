# Mediqwik

https://harmonious-sunshine-e47345.netlify.app/#


### Paid Project: Pharmacy E-commerce Website

---

## Project Overview
Welcome to the Mediqwik project! Your task is to develop the backend and enhance specific frontend functionalities for a pharmacy e-commerce website. We have provided the url to the deployed web app, a screen recording and the frontend code, which you can use as a reference. However, the final submission **must match the provided design exactly**.

---

## Prize
- **Winner Reward**: INR 2000

## Submission Deadline
- **Due Date**: Friday, 8 November 2024, by 11:59 PM
- **Extension**: The deadline can be extended if you have implemented the key features.

---

## Project Requirements

### 1. User Authentication
- **Sign Up / Sign In**: Implement functionality for users to register and log in.
- **Fields for Sign-Up**:
  - `Name`, `Email`, `Phone Number`, `Age`, `Password`
- **Sign-In Options**:
  - Users should be able to sign in with their `Email/Phone Number` and `Password`.

### 2. Product Catalog
- **Medicine List**: The following OTC (Over-the-Counter) medicines are available:
Crocin, Calpol, Brufen, Disprin, Cetzine, Zyrtec, Benadryl, Corex, D-Cold Total, Sinarest, Gelusil, Digene, Imodium, Oral Rehydration Salts, Domstal, Ondem, Clotrimazole - Candid, Canesten, Caladryl, Neosporin Ointment, Levozet, Hydrocortisone Cream, I-Kul, Chloramphenicol Ear Drops, Becosules, Revital, Celin, Electral


- **Search Feature**: Allow users to search for these medicines by name.
- **Add to Cart**: Users can select a medicine, specify the quantity, and add it to their cart.

### 3. Cart Functionality
- **Cart Display**: Show cart contents including:
- Each item’s name, quantity, and price per strip.
- **Total Price Calculation**: Calculate the total price as `(quantity x price per strip)`.
- **Checkout**: Include a checkout option within the cart.

### 4. Order Process
- **Delivery Location**: Prompt users to enter a delivery location during checkout.
- **Payment Interface**:
- Integrate UPI payment options and offer an optional QR code for payment.
- **Order Confirmation**:
- Send order confirmations via **WhatsApp** and **Email** to the user.
- Additionally, send the confirmation to:
  - **WhatsApp**: `+91 9818334567`
  - **Email**: `mr.tachyon25@gmail.com`

### 5. Database Schema
Set up a database with the following tables and use dummy data where needed:

- **Orders Table**:
- `total_order_value`: Total price of all items in the order.
- `delivery_location`, `order_time`, `delivery_time`, `user_id`
- `orders`: List of ordered product IDs.
- `quantity`: List of quantities corresponding to each product ID.
- `phone_number`, `mail`

- **Users Table**:
- `name`, `mail`, `phone_number`, `age`, `sex`

- **Products Table**:
- `type` (OTC/Non-OTC), `price` (per strip), `max_quantity` (max orderable quantity), `stock`, `product_id`, `name`, `photo`, `description` (basic use case), `side_effects` (common side effects, max 2-3)

### 6. Geolocation
- Request the user’s location for delivery tracking.
- Confirm the delivery location during checkout.

---

## Deployment
The web app I’ve created has been deployed at:
- **Demo Link**: [https://harmonious-sunshine-e47345.netlify.app/#](https://harmonious-sunshine-e47345.netlify.app/#)

Your final submission should be deployed similarly. You can use Netlify or any other free hosting service to deploy the app.

---

## Submission Requirements

- **Fork and Star the Project**: Fork this repository and star it (necessary for participation).
- **Code**: Submit a **zip file** of all code files, organized and documented.
- **Screen Recording**: Provide a screen recording demonstrating the fully functional web app.
- **Send Submissions To**:
- **WhatsApp**: `+91 9818334567`
- **Email**: `mr.tachyon25@gmail.com`

---

## Judging Criteria

Submissions will be judged based on:

1. **Completeness**: Does it meet all project requirements?
2. **Functionality**: Do all features work as intended?
3. **Design Consistency**: The final design must closely match the provided description.

---

Good luck, and may the best solution win!
