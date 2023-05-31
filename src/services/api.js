import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://558c-112-196-113-2.ngrok-free.app/',
  prepareHeaders: headers => {
    headers.append(
      'authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2MGMxYjRjMS03NzM0LTRiOGUtYjc5Ny1iZGQ3N2Y4Mjk4NDMiLCJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjg1MzUwNDI0LCJleHAiOjE2ODU0MzY4MjR9.Ukupi2GJShIiEqnVsS5RENNCdh0Bf5hc_rWf85yhC0I',
    );
    return headers;
  },
});
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};
export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
