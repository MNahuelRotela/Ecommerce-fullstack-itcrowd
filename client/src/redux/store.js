import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import productsSlice from "./features/productsSlice";
import categoriesSlice from "./features/categoriesSlice";
import brandsSlice from "./features/brandsSlice";
import subCategoriesSlice from "./features/subCategoriesSlice";
import usersSlice from "./features/usersSlice";
import cartSlice from "./features/cartSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        brands: brandsSlice,
        subCategories: subCategoriesSlice,
        users: usersSlice,
        cart: cartSlice,
    },
    middleware: [thunk],
});

export default store;