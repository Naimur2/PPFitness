import {
  DeleteV1MealPlanDeleteIdParameterId,
  DeleteV1MealPlanDeleteIdSuccessfulResponse,
  GetV1MealPlanGetParameterDay,
  GetV1MealPlanGetSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllMealPlan: builder.query<
      GetV1MealPlanGetSuccessfulResponse,
      GetV1MealPlanGetParameterDay
    >({
      query: day => ({
        url: `meal-plan/get?day=${day}`,
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
