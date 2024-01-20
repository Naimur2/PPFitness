import {
  DeleteV1MealPlanDeleteIdParameterId,
  DeleteV1MealPlanDeleteIdSuccessfulResponse,
  GetV1MealPlanGetSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllMealPlan: builder.query<GetV1MealPlanGetSuccessfulResponse, any>({
      query: () => ({
        url: `meal-plan/get`,
      }),
    }),
    deleteMealPlan: builder.mutation<
      DeleteV1MealPlanDeleteIdSuccessfulResponse,
      DeleteV1MealPlanDeleteIdParameterId
    >({
      query: id => ({
        url: `meal-plan/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateMealPlan: builder.mutation<any, any>({
      query: id => ({
        url: `meal-plan/update/${id}`,
        method: 'PUT',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useDeleteMealPlanMutation,
  useGetAllMealPlanQuery,
  useUpdateMealPlanMutation,
} = authApiSlice;
