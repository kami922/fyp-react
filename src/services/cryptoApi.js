import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//coinranking7a43db899a3ff31ded76b43bc9614c3491dcc13fcd3a9c9f
// 5b982100-960a-11ee-8dd8-95b25d8861f1 rapid api

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'cac7ab96a1mshd58820eb59f2068p1ec07bjsn0863930ff9ea',
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ uuid, timePeriod }) =>
        createRequest(`coin/${uuid}/history?timePeriod=${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
