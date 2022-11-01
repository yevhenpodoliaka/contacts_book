import { createSlice } from '@reduxjs/toolkit';


export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
    showFavorite:false
  },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
    toggleShowFavorite(state) {
      const value = state.showFavorite;
      state.showFavorite = !value;
 
    }
  },
});

export const { setFilter,toggleShowFavorite } = filterSlice.actions;
export const getFilterValue = state => state.filter.value;
export const getShowFavoriteValue=state=> state.filter.showFavorite
