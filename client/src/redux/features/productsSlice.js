import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  filteredProducts: [],
  products: [],
  isPublishProducts: [],
  selectedSubcategory: null,
  selectedCategory: null,
  selectedBrand: null,
};

// Acción para leer un producto por su ID
export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${productId}:`, error);
    throw error;
  }
});

// Acción para actualizar un producto por su ID
export const updateProductById = createAsyncThunk('products/updateProductById', async ({ productId, updatedProduct }) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/products/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${productId}:`, error);
    throw error;
  }
});

// Acción para eliminar un producto por su ID
export const deleteProductById = createAsyncThunk('products/deleteProductById', async (productId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/products/${productId}`);
    return { deletedProductId: productId, message: response.data.message };
  } catch (error) {
    console.error(`Error deleting product with id ${productId}:`, error);
    throw error;
  }
});

// Acción para recuperar todos los productos
export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw error;
  }
});





// Acción para filtrar productos por SubcategoryId
export const filterBySubcategory = createAsyncThunk(
  "products/filterBySubcategory",
  async (subcategoryId, { getState, dispatch }) => {
    const state = getState();
    const isPublishProducts = getIsPublishProducts(state);

    if (!isPublishProducts.length) {
      try {
        await dispatch(fetchIsPublishProducts());
      } catch (error) {
        throw new Error(error.message);
      }
    }

    const filteredProducts = isPublishProducts.filter(
      (product) => product.subcategoryId === subcategoryId
    );

    dispatch(setFilteredProducts(filteredProducts));
    return subcategoryId;
  }
);

// Acción para filtrar productos por CategoryId
export const filterByCategory = createAsyncThunk(
  "products/filterByCategory",
  async (categoryId, { getState, dispatch }) => {
    const state = getState();
    const isPublishProducts = getIsPublishProducts(state);

    if (!isPublishProducts.length) {
      try {
        await dispatch(fetchIsPublishProducts());
      } catch (error) {
        throw new Error(error.message);
      }
    }

    const filteredProducts = isPublishProducts.filter(
      (product) => product.categoryId === categoryId
    );

    dispatch(setFilteredProducts(filteredProducts));
    return categoryId;
  }
);

// Acción para filtrar productos por BrandId
export const filterByBrand = createAsyncThunk(
  "products/filterByBrand",
  async (brandId, { getState, dispatch }) => {
    const state = getState();
    const isPublishProducts = getIsPublishProducts(state);

    if (!isPublishProducts.length) {
      try {
        await dispatch(fetchIsPublishProducts());
      } catch (error) {
        throw new Error(error.message);
      }
    }

    const filteredProducts = isPublishProducts.filter(
      (product) => product.brandId === brandId
    );

    dispatch(setFilteredProducts(filteredProducts));
    return brandId;
  }
);

export const clearFilters = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    clearFilters: (state) => {
      // Restablecer los filtros y cargar todos los productos nuevamente
      state.filters = { name: '', brand: 'none', category: 'none' };
      state.loading = true;
      state.error = null;
    },
  },
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
      
    },
    clearFilters: (state) => {
      // Restablecer los filtros y cargar todos los productos nuevamente
      state.filters = { name: '', brand: 'none', category: 'none' };
      state.loading = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload.updatedProduct;
      })
      .addCase(updateProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(product => product.id !== action.payload.deletedProductId);
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(filterBySubcategory.fulfilled, (state, action) => {
        const subcategoryId = action.payload;
        state.selectedSubcategory = subcategoryId;
      })
      .addCase(filterByCategory.fulfilled, (state, action) => {
        const categoryId = action.payload;
        state.selectedCategory = categoryId;
      })
      .addCase(filterByBrand.fulfilled, (state, action) => {
        const brandId = action.payload;
        state.selectedBrand = brandId;
      });
  },
});
export const { setFilteredProducts } = productSlice.actions;
export const getIsPublishProducts = (state) => state.products.isPublishProducts;
export const getSelectedSubcategory = (state) => state.products.selectedSubcategory;
export const getSelectedCategory = (state) => state.products.selectedCategory;
export const getSelectedBrand = (state) => state.products.selectedBrand;



export default productSlice.reducer;
