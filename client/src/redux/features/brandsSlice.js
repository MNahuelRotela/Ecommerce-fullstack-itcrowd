import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  brands: [],
  loading: false,
  error: null,
  selectedBrand: null, // Estado para la marca seleccionada
};

// Acción para obtener la lista de marcas
export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/brands`);
    return response.data;
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
});

// Acción para obtener una marca por su ID
export const fetchBrandById = createAsyncThunk('brands/fetchBrandById', async (brandId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/brands/${brandId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching brand with id ${brandId}:`, error);
    throw error;
  }
});

// Acción para crear una nueva marca
export const createBrand = createAsyncThunk('brands/createBrand', async (newBrand) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/brands`, newBrand);
    return response.data;
  } catch (error) {
    console.error('Error creating brand:', error);
    throw error;
  }
});

// Acción para actualizar una marca por su ID
export const updateBrandById = createAsyncThunk('brands/updateBrandById', async ({ brandId, updatedBrand }) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/brands/${brandId}`, updatedBrand);
    return response.data;
  } catch (error) {
    console.error(`Error updating brand with id ${brandId}:`, error);
    throw error;
  }
});

// Acción para eliminar una marca por su ID
export const deleteBrandById = createAsyncThunk('brands/deleteBrandById', async (brandId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/brands/${brandId}`);
    return { deletedBrandId: brandId, message: response.data.message };
  } catch (error) {
    console.error(`Error deleting brand with id ${brandId}:`, error);
    throw error;
  }
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    selectBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBrandById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrandById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBrand = action.payload;
      })
      .addCase(fetchBrandById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands.push(action.payload);
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBrandById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBrandById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBrand = action.payload.updatedBrand;
      })
      .addCase(updateBrandById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBrandById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBrandById.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = state.brands.filter((brand) => brand.id !== action.payload.deletedBrandId);
      })
      .addCase(deleteBrandById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectBrand } = brandsSlice.actions;

export default brandsSlice.reducer;
