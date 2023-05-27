# Everything Here - React App project

## Project Description

This project is prepared for CS 391 - Web Development Course, Özyeğin University. The purpose of this project is to reinforce the topics of the class. In this project, we developed an e-commerce website, similar to Amazon, and Hepsiburada. The topics shown in class; HTML, CSS, JavaScript, React, and etc. are applied in the most efficacious way. 

## Usage Scenarios

### Product Catalog

A wide range of tech products, including computers, smartphones, accessories, and more are offered on the website. Customers can view detailed product descriptions, specifications, and images. 

### Online Purchases

Customers can conveniently purchase products directly from the website. They can add items to their shopping cart and proceed to checkout. 

### Shopping Cart Review

Before proceeding to checkout, customers typically have the opportunity to review the items in their shopping cart. They can verify the quantity, seller, shipping method, and prices of the products they have selected. Customers can make any necessary adjustments, such as removing items.

### Checkout

During the checkout process, customers are prompted to provide their name, surname, e-mail address, phone number, card number and shipping address. 
Product Search: The website typically includes a search functionality that allows customers to find specific products or narrow down their options. Although the search functionality is not operational currently, customers can look forward to utilizing this feature to quickly find the desired tech products by entering relevant keywords, product names, or specific features.
Account Management:  The website planned to enable customers to create and manage their accounts. The "Account" option in the navigation bar indicates a future functionality where customers will be able to create and manage their accounts on your website. The "Sign Up" option in the navigation bar suggests that customers will have the opportunity to register for an account on your website. While the sign-up functionality is not currently available, customers can expect to use this feature in the future to create their accounts, enabling them to save preferences, track orders, and enjoy a personalized shopping experience.

## Responsibilities of Each Project Member

### Semanur Yaşar

Implementation of Navbar, Footer, HomePage, ItemCard, Responsive web design.

### Berkin Tan

Implementation of Navbar, Cart, Checkout, ItemDetails, Buttons.

Both project members helped each other at the implementation steps. 

## Instructions for Running The Project

Firstyl, a fake JSON server was used for the database operations in this project. The database was names as 'db.json'. To install the related package, simply write the command below to your terminal. 

### `npm install json-server`

The react-app will be started at the port 3000, default. The database can be started at port 3001. After the package is installed the database can be started with:

### `json-server --watch db.json --port 3001`

After the database configuration, the packages used in the project should be installed one by one, by copy-pasting the commands below to the terminal.

Axios was used for the database operations: POST, GET, DELETE, PUT.
### `npm install axios`

Toastify library was used for the notification system in cart, and checkout page. Users are being notified for their actions.
### `npm install --save react-toastify`

React-router-dom was used for the navigation between pages, links.
### `npm install react-router-dom`

The below two libraries were used for the footer section.
### `npm install --save @fortawesome/free-solid-svg-icons`
### `npm install --save @fortawesome/react-fontawesome`

Bootstrap was used for the grid and layout system for the webpages.
### `npm install react-bootstrap bootstrap`

After all the packages are installed, you can type the command below and start the project.
### `npm start`
