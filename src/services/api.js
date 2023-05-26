import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://7cb9-112-196-113-2.ngrok-free.app/',
  prepareHeaders: headers => {
    headers.append(
      'authorization',
      `Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2MGMxYjRjMS03NzM0LTRiOGUtYjc5Ny1iZGQ3N2Y4Mjk4NDMiLCJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjg1MDkzMTgxLCJleHAiOjE2ODUxNzk1ODF9.nJ5rQWu-ncIuL3MP95mBaDVH4z2VPeSHLJvxXIy3NOM this is response tokne
        `,
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
