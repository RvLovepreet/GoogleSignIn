import { api } from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    uploadImage: build.mutation({
      query: image => {
        const formData = new FormData();
        formData.append('image', {
          name: 'test',
          uri: image.path,
          type: 'image/jpg',
        });
        return {
          url: 'user_images/',
          method: 'PUT',
          body: formData,
        };
      },
    }),
  }),
  overrideExisting: true,
});
export const { useUploadImageMutation } = userApi;
