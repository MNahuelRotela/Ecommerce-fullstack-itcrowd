import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  subCategories: [],
  loading: false,
  error: null,
  selectedSubCategory: null, // Estado para la subcategoría seleccionada
};

// Acción para obtener la lista de subcategorías
export const fetchSubCategories = createAsyncThunk('subCategories/fetchSubCategories', async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/subcategories`);
    return response.data.data; // Seleccionamos la propiedad 'data' de la respuesta
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    throw error;
  }
});

// Acción para obtener una subcategoría por su ID
export const fetchSubCategoryById = createAsyncThunk('subCategories/fetchSubCategoryById', async (subCategoryId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/subcategories/${subCategoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching subcategory with id ${subCategoryId}:`, error);
    throw error;
  }
});

// Acción para crear una nueva subcategoría
export const createSubCategory = createAsyncThunk('subCategories/createSubCategory', async (newSubCategory) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/subcategories`, newSubCategory);
    return response.data;
  } catch (error) {
    console.error('Error creating subcategory:', error);
    throw error;
  }
});

// Acción para actualizar una subcategoría por su ID
export const updateSubCategoryById = createAsyncThunk(
  'subCategories/updateSubCategoryById',
  async ({ subCategoryId, updatedSubCategory }) => {
    try {
      const response = await axios.put(`${BACKEND_URL}/subcategories/${subCategoryId}`, updatedSubCategory);
      return response.data;
    } catch (error) {
      console.error(`Error updating subcategory with id ${subCategoryId}:`, error);
      throw error;
    }
  }
);

// Acción para eliminar una subcategoría por su ID
export const deleteSubCategoryById = createAsyncThunk('subCategories/deleteSubCategoryById', async (subCategoryId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/subcategories/${subCategoryId}`);
    return { deletedSubCategoryId: subCategoryId, message: response.data.successMsg };
  } catch (error) {
    console.error(`Error deleting subcategory with id ${subCategoryId}:`, error);
    throw error;
  }
});

const subCategoriesSlice = createSlice({
  name: 'subCategories',
  initialState,
  reducers: {
    selectSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories = action.payload;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSubCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSubCategory = action.payload;
      })
      .addCase(fetchSubCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createSubCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories.push(action.payload);
      })
      .addCase(createSubCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateSubCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSubCategory = action.payload.updatedSubCategory;
      })
      .addCase(updateSubCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteSubCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSubCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories = state.subCategories.filter(
          (subCategory) => subCategory.id !== action.payload.deletedSubCategoryId
        );
      })
      .addCase(deleteSubCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectSubCategory } = subCategoriesSlice.actions;

export default subCategoriesSlice.reducer;
