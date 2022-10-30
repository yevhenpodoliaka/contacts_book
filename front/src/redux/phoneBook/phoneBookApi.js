import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://contacts--book.herokuapp.com/api',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: 'contacts', method: 'get' }),
      keepUnusedDataFor: 1,
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: id => ({ url: `contacts/${id}`, method: 'get' }),
      keepUnusedDataFor: 1,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: 'contacts',
        method: 'POST',
        data: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    toggleFavoriteContact: builder.mutation({
      query: ({ id, data }) => ({
        url: `contacts/${id}/favorite`,
        method: 'PATCH',
        data,
      }),
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query: ({ id, data }) => ({
        url: `contacts/${id}`,
        method: 'PUT',
        data,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useToggleFavoriteContactMutation,
  useEditContactMutation,
} = phonebookApi;
