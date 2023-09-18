import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  categories: [],
  loading: false,
  error: null,
  selectedCategory: null, // Estado para la categoría seleccionada
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/categories/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching categories :`, error);
    throw error;
  }
});

// Acción para leer una categoría por su ID
export const fetchCategoryById = createAsyncThunk('categories/fetchCategoryById', async (categoryId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with id ${categoryId}:`, error);
    throw error;
  }
});

// Acción para actualizar una categoría por su ID
export const updateCategoryById = createAsyncThunk('categories/updateCategoryById', async ({ categoryId, updatedCategory }) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/categories/${categoryId}`, updatedCategory);
    return response.data;
  } catch (error) {
    console.error(`Error updating category with id ${categoryId}:`, error);
    throw error;
  }
});

// Acción para eliminar una categoría por su ID
export const deleteCategoryById = createAsyncThunk('categories/deleteCategoryById', async (categoryId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/categories/${categoryId}`);
    return { deletedCategoryId: categoryId, message: response.data.message };
  } catch (error) {
    console.error(`Error deleting category with id ${categoryId}:`, error);
    throw error;
  }
});

// Acción para crear una nueva categoría
export const createCategory = createAsyncThunk('categories/createCategory', async (newCategory) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/categories`, newCategory);
    return response.data;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCategory = action.payload;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCategory = action.payload.updatedCategory;
      })
      .addCase(updateCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter((category) => category.id !== action.payload.deletedCategoryId);
      })
      .addCase(deleteCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
