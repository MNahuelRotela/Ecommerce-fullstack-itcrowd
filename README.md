Ecommerce-fullstack-itcrowd
Ecommerce

This is a comprehensive full-stack application for an Ecommerce platform called Rotela Shopping. It has been developed as part of the challenge for the Junior Full Stack Developer position at IT Crowd. The application consists of both an API and a CLIENT component.

Technologies Used
API:

JavaScript
Node.js
Express
PostgreSQL
Sequelize
Morgan
Cors
Json Web Token (for managing admin permissions)
Bcrypt (for password hashing)
CLIENT:

JavaScript
Vite
React
Axios
Redux
Redux-Toolkit
Redux-Thunk
TailwindCSS
Auth0 (for user authentication)
Deployment
The application is deployed at https://ecommerce-frontend-nine-virid.vercel.app.
The database is hosted at https://app.fl0.com.
The backend is deployed on Render at ecommerce-backend-zq79.onrender.com.
The frontend is deployed on Vercel at https://ecommerce-frontend-nine-virid.vercel.app.
Local Setup
To run the application locally:

Clone this repository to your PC.

Navigate to the API folder and open an integrated terminal. Execute the command $ npm install to install all backend dependencies.

Navigate to the CLIENT folder and open an integrated terminal. Execute the command $ npm install to install all frontend dependencies.

No need to create a .env file, as it's included and configured in the repository.

In the file "api\src\app.js," replace "https://ecommerce-frontend-nine-virid.vercel.app" with your local environment URL. By default, it's set to "http://localhost:5173" in VITE.

In the file "client\src\main.jsx," replace "https://ecommerce-backend-zq79.onrender.com/" with your local backend environment URL. In React, the default is "http://localhost:3001" or "http://localhost:3000."

Optional: If you want to change the database server, you can do so in "api\src\db.js." However, it's not recommended as all data is already stored in the default database.

Running the Application
API: Run npm run dev.
CLIENT: Run npm run dev.

Features
The REST API supports all CRUD (CREATE, READ, UPDATE, DELETE) operations. The endpoints are not configured to be under "/api/example" but directly as "/example."

Product Routes (ProductsRouter):

POST products/: createProductController.createProduct
JSON Body Example:
json
Copy code
{
  "name": "Xiaomi Redmi 10C 128GB Mint Green Smartphone",
  "description": "The Xiaomi Redmi 10C smartphone offers a 6.7-inch HD+ display with IPS technology, delivering vibrant colors and good viewing angles. It also has a 60Hz refresh rate for a smooth interface experience.",
  "img_url": "https://images.fravega.com/f300/6365a2ac5d930485ac88985d96ee6069.jpg.webp",
  "price": 110999,
  "itemNumber": "782079",
  "discountPercentage": 10,
  "stock": 10,
  "isPublished": true,
  "BrandId": 4,
  "CategoryId": 3,
  "SubcategoryId": 2
}
GET products/: getProductsController.getProducts
GET products/:id: getProductController.getProduct
PUT products/:id: updateProductController.updateProduct
DELETE products/:id: deleteProductController.deleteProduct
Brand Routes (BrandsRouter):

POST brands/: createBrandController.createBrand
JSON Body Example:
json
Copy code
{
  "name": "Mosconi",
  "description": "Custom furniture brand.",
  "img_url": "https://images.fravega.com/f300/f1653b4ffb8a696664caa22d77da9106.png.webp"
}
GET brands/: getBrandsController.getBrands
GET brands/:id: getBrandController.getBrand
PUT brands/:id: updateBrandController.updateBrand
DELETE brands/:id: deleteBrandController.deleteBrand
Category Routes (CategoriesRouter):

POST categories/: createCategoryController.createCategory
JSON Body Example:
json
Copy code
{
  "name": "Furniture",
  "description": "Home furniture items"
}
GET categories/: getCategoriesController.getCategories
GET categories/:id: getCategoryController.getCategory
PUT categories/:id: updateCategoryController.updateCategory
DELETE categories/:id: deleteCategoryController.deleteCategory
Subcategory Routes (SubCategoriesRouter):

POST subcategories/: createSubCategoryController.createSubCategory
JSON Body Example:
json
Copy code
{
  "name": "Smartphones",
  "CategoryId": 3
}
GET subcategories/: getSubCategoriesController.getSubCategories
GET subcategories/:id: getSubCategoryController.getSubCategory
PUT subcategories/:id: updateSubCategoryController.updateSubCategory
DELETE subcategories/:id: deleteSubCategoryController.deleteSubCategory
User Routes (usersRouter):

POST users/: createUserCtrl
Manual creation is not allowed as Auth0 handles this process.
JSON Body Example:
json
Copy code
{
  "name": "John",
  "lastname": "Doe",
  "user": "johndoe",
  "mail": "johndoe@example.com",
  "isAdmin": false
}
GET users/: userAllCtrl
GET users/:id: userByIdCtrl
PUT users/:id: updateUserCtrl
DELETE users/:id: deleteUserCtrl
Front-End Features
The front-end provides a user-friendly interface with the following capabilities:

Displaying Product Cards with product image, name, original price, discounted price, discount percentage, and the brand image.
Viewing detailed product information and adding products to the shopping cart.
Navbar with options to log in, view the cart contents, complete a purchase (login required), log out, access About, Contact, Frequently Asked Questions, and return to the homepage.
Admin users can access an admin panel (still under implementation) from their user dropdown menu.
