## Product Dashboard
A dynamic React application that displays a list of products, allows filtering by availability, and uses conditional styling for out-of-stock items. This project also includes a Remove button to dynamically remove products from the dashboard. Built with Vite, React, and plain CSS, and tested with Jest and React Testing Library.

## Features
- Display a dynamic list of products with details: name, price, availability.

- Conditional styling: Green border for in-stock products, red/faded background for out-of-stock products.

- Filter products by:

  - All products

  - In-stock products

  - Out-of-stock products

- Remove products dynamically using a button.

- Fully tested with pre-written Jest tests.

## Tech Used
- React 18

- Vite (React project setup)

- Plain CSS for styling

- Jest & React Testing Library for automated testing

## Project Structure
product-dashboard/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ ProductList.jsx
│  │  └─ ProductCard.jsx
│  ├─ styles/
│  │  ├─ ProductCard.css
│  │  └─ ProductList.css
│  ├─ db.json
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
└─ README.md

## Setup Instructions
1. Clone the repository
 - git clone <your-repository-url>
 - cd product-dashboard

2. Install dependencies
 - npm install

3. Run the development server
 - npm run dev

4. Open the app in your browser
 - The development server will provide a local URL (usually http://localhost:5173)

## Usage
- Click All, In Stock, or Out of Stock to filter products.

- Click the Remove button on a product card to remove it from the dashboard.

- The cards will display green borders for in-stock products and red/faded styling for out-of-stock products.

## Running tests
- This project includes pre-written Jest tests to validate functionality.
Run the tests with:
 - npm test
The tests check for:
   - Rendering of the product dashboard title

   - Display of all products initially

   - Conditional styling for out-of-stock products

   - Remove button functionality