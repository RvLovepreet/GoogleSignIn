import { api } from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    uploadImage: build.mutation({
      query: image => {
        const formData = new FormData();
        console.log(image, 'in slice');
        formData.append('image', {
          name: 'text',
          uri: image.path,
          type: 'image/jpeg',
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
