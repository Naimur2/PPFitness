/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PostV1AuthLoginSuccessfulResponse {
  status: "success";
  /** @example {"message":"Login Successfull","data":{"accessToken":"access token","refreshToken":"refresh token","user":{"_id":"id","email":"example@xyz.abc"}}} */
  data: {
    message: string;
    data?: {
      accessToken: string;
      refreshToken: string;
      user: {
        _id: string;
        email: string;
      };
    };
  };
}
export interface PostV1AuthLoginErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1AuthLoginRequestBody = object & {
  /** Email Of the User */
  email: string;
  /** Password Of the User */
  password: string;
  method?: "email" | "google" | "apple" | "facebook";
};
export interface PostV1AuthRegisterSuccessfulResponse {
  status: "success";
  /** @example {"message":"User Created Successfully, Please verify your email","data":{"otpToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9","type":"register"}} */
  data: {
    message: string;
    data?: {
      otpToken?: string;
      type?: string;
    };
  };
}
export interface PostV1AuthRegisterErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1AuthRegisterRequestBody = object & {
  /**
   * Email Of the User
   * @format email
   */
  email: string;
  /**
   * Password Of the User
   * @minLength 8
   * @maxLength 16
   * @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
   */
  password?: string;
  method?: "email" | "google" | "apple" | "facebook";
  fullName?: string;
};
export interface PutV1AuthPasswordChangeSuccessfulResponse {
  status: "success";
  /** @example {"message":"Password Changed Successfully"} */
  data: {
    message: string;
  };
}
export interface PutV1AuthPasswordChangeErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PutV1AuthPasswordChangeRequestBody = (object & object) & {
  /**
   * Password Of the User
   * @minLength 8
   * @maxLength 16
   * @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
   */
  password: string;
  confirmPassword: string;
};
export interface PostV1AuthPasswordForgetSuccessfulResponse {
  status: "success";
  /** @example {"message":"Email Sent Successfully","data":{"otpToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9","type":"reset"}} */
  data: {
    message: string;
    data: {
      otpToken: string;
      type?: string;
    };
  };
}
export interface PostV1AuthPasswordForgetErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1AuthPasswordForgetRequestBody = object & {
  /** @format email */
  email: string;
};
export interface PostV1AuthPasswordResetSuccessfulResponse {
  status: "success";
  /** @example {"message":"Password Reset Successfully"} */
  data: {
    message: string;
  };
}
export interface PostV1AuthPasswordResetErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1AuthPasswordResetRequestBody = object & {
  /** @format email */
  email: string;
  otpToken: string;
  /** @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/ */
  password: string;
  confirmPassword: string;
};
export interface PostV1AuthVerifyOtpSuccessfulResponse {
  status: "success";
  /** @example {"message":"OTP Verified Successfully","data":{"otpToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}} */
  data: {
    message?: string;
    data?: {
      otpToken: string;
      type?: string;
    };
  };
}
export interface PostV1AuthVerifyOtpErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1AuthVerifyOtpRequestBody = object & {
  /** @format email */
  email: string;
  otp: string;
  otpToken: string;
};
export interface GetV1ProfileGetSingleSuccessfulResponse {
  status: "success";
  data: {
    message: string;
    data: {
      fullName?: string;
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: "email" | "google" | "apple" | "facebook";
        role?: "admin" | "user";
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        registrationDate?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt?: string;
      };
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt?: string;
    };
  };
}
export interface GetV1ProfileGetSingleErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** @format any */
export type GetV1ProfileGetSingleIdParameterId = any;
export interface GetV1ProfileGetSingleIdSuccessfulResponse {
  status: "success";
  data: {
    message: string;
    data: {
      fullName?: string;
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: "email" | "google" | "apple" | "facebook";
        role?: "admin" | "user";
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        registrationDate?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt?: string;
      };
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt?: string;
    };
  };
}
export interface GetV1ProfileGetSingleIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/**
 * Page Number
 * @minLength 1
 */
export type GetV1ProfileGetAllParameterPage = string;
/**
 * Limit
 * @minLength 1
 */
export type GetV1ProfileGetAllParameterLimit = string;
export type GetV1ProfileGetAllParameterSearch = string;
export interface GetV1ProfileGetAllSuccessfulResponse {
  status: "success";
  data: {
    message: string;
    data: {
      fullName?: string;
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: "email" | "google" | "apple" | "facebook";
        role?: "admin" | "user";
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        registrationDate?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt?: string;
      };
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt?: string;
    }[];
  };
}
export interface GetV1ProfileGetAllErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostV1ProfileUpdateSuccessfulResponse {
  status: "success";
  /** @example {"message":"Profile Updated"} */
  data: {
    message: string;
  };
}
export interface PostV1ProfileUpdateErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1ProfileUpdateRequestBody = (object & object) & {
  fullName?: string;
  avatar?: string;
  phone?: string;
  country?: string;
  gender?: string;
  height?: string;
  goal?: string;
};
/** @format any */
export type DeleteV1ProfileDeleteIdParameterId = any;
export interface DeleteV1ProfileDeleteIdSuccessfulResponse {
  status: "success";
  /** @example {"message":"Profile Deleted Successfully"} */
  data: {
    message: string;
  };
}
export interface DeleteV1ProfileDeleteIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/**
 * Page Number
 * @minLength 1
 */
export type GetV1BlogsGetParameterPage = string;
/**
 * Limit
 * @minLength 1
 */
export type GetV1BlogsGetParameterLimit = string;
export type GetV1BlogsGetParameterSearch = string;
export type GetV1BlogsGetParameterTags = string[];
/** @default "blog" */
export declare enum GetV1BlogsGetParameterType {
  Blog = "blog",
  Study = "study",
}
export interface GetV1BlogsGetSuccessfulResponse {
  status: "success";
  data: {
    message?: string;
    meta?: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      total: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      page: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      limit: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalPages: number;
    };
    blogs?: {
      /** Title Of the Blog */
      title?: string;
      /** Description Of the Blog */
      description?: string;
      /** Content Of the Blog */
      content?: string;
      tags?: string[];
      thumbnail?: string;
      /** @format any */
      _id?: any;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
    }[];
  };
}
export interface GetV1BlogsGetErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** Id of the Blog */
export type GetV1BlogsGetIdParameterId = string;
export interface GetV1BlogsGetIdSuccessfulResponse {
  status: "success";
  data: {
    message: string;
    blog: {
      /** Title Of the Blog */
      title?: string;
      /** Description Of the Blog */
      description?: string;
      /** Content Of the Blog */
      content?: string;
      tags?: string[];
      thumbnail?: string;
      /** @format any */
      _id?: any;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
    };
  };
}
export interface GetV1BlogsGetIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface GetV1BlogsTagsSuccessfulResponse {
  status: "success";
  /** @example {"message":"Data fetched Successfully","tags":["tag1","tag2"]} */
  data: {
    message: string;
    tags: string[];
  };
}
export interface GetV1BlogsTagsErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostV1BlogsAddSuccessfulResponse {
  status: "success";
  /** @example {"message":"Blog Added Successfully"} */
  data: {
    message: string;
  };
}
export interface PostV1BlogsAddErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1BlogsAddRequestBody = ((object & object) & object) & {
  /** Title Of the Blog */
  title: string;
  /** Description Of the Blog */
  description: string;
  /** Content Of the Blog */
  content: string;
  tags: string[];
  /** Thumbnail Of the Blog */
  thumbnail: string;
};
/** Id of the Blog */
export type DeleteV1BlogsDeleteIdParameterId = string;
export interface DeleteV1BlogsDeleteIdSuccessfulResponse {
  status: "success";
  /** @example {"message":"Blog Removed Successfully"} */
  data: {
    message: string;
  };
}
export interface DeleteV1BlogsDeleteIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** Id of the Blog */
export type PutV1BlogsUpdateIdParameterId = string;
export interface PutV1BlogsUpdateIdSuccessfulResponse {
  status: "success";
  /** @example {"message":"Blog updated Successfully"} */
  data: {
    message: string;
  };
}
export interface PutV1BlogsUpdateIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PutV1BlogsUpdateIdRequestBody = ((object & object) & object) & {
  /** Title Of the Blog */
  title?: string;
  /** Description Of the Blog */
  description?: string;
  /** Content Of the Blog */
  content?: string;
  tags?: string[];
  /** Thumbnail Of the Blog */
  thumbnail?: string;
};
export interface PostV1IngredientsAddSuccessfulResponse {
  status: "success";
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65aa390c8e93a170706b7362","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      name: string;
      category: string;
      unit?: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
      };
      micronutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
        name:
          | "calories"
          | "protein"
          | "fat"
          | "carbohydrate"
          | "fiber"
          | "sugar"
          | "sodium"
          | "potassium"
          | "calcium"
          | "iron"
          | "magnesium"
          | "zinc"
          | "vitaminA"
          | "vitaminB6"
          | "vitaminB12"
          | "vitaminC"
          | "vitaminD"
          | "vitaminE"
          | "vitaminK";
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    };
  };
}
export interface PostV1IngredientsAddErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1IngredientsAddRequestBody = (object & object) & {
  name: string;
  category: string;
  micronutrient: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    quantity: number;
    unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
    name:
      | "calories"
      | "protein"
      | "fat"
      | "carbohydrate"
      | "fiber"
      | "sugar"
      | "sodium"
      | "potassium"
      | "calcium"
      | "iron"
      | "magnesium"
      | "zinc"
      | "vitaminA"
      | "vitaminB6"
      | "vitaminB12"
      | "vitaminC"
      | "vitaminD"
      | "vitaminE"
      | "vitaminK";
  }[];
};
export interface PostV1IngredientsGetSuccessfulResponse {
  status: "success";
  /** @example {"message":"Ingredient Added Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65aa390c8e93a170706b7364","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}]} */
  data: {
    message: string;
    meta: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      total: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      page: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      limit: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalPages: number;
    };
    data: {
      /** @format any */
      _id: any;
      name: string;
      category: string;
      unit?: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
      };
      micronutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
        name:
          | "calories"
          | "protein"
          | "fat"
          | "carbohydrate"
          | "fiber"
          | "sugar"
          | "sodium"
          | "potassium"
          | "calcium"
          | "iron"
          | "magnesium"
          | "zinc"
          | "vitaminA"
          | "vitaminB6"
          | "vitaminB12"
          | "vitaminC"
          | "vitaminD"
          | "vitaminE"
          | "vitaminK";
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    }[];
  };
}
export interface PostV1IngredientsGetErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1IngredientsGetRequestBody = (object & object) & {
  /**
   * Page Number
   * @minLength 1
   */
  page?: string;
  /**
   * Limit
   * @minLength 1
   */
  limit?: string;
  search?: string;
  category?: string;
};
/** @format any */
export type GetV1IngredientsGetIdParameterId = any;
export interface GetV1IngredientsGetIdSuccessfulResponse {
  status: "success";
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65aa390c8e93a170706b7366","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      name: string;
      category: string;
      unit?: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
      };
      micronutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
        name:
          | "calories"
          | "protein"
          | "fat"
          | "carbohydrate"
          | "fiber"
          | "sugar"
          | "sodium"
          | "potassium"
          | "calcium"
          | "iron"
          | "magnesium"
          | "zinc"
          | "vitaminA"
          | "vitaminB6"
          | "vitaminB12"
          | "vitaminC"
          | "vitaminD"
          | "vitaminE"
          | "vitaminK";
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    };
  };
}
export interface GetV1IngredientsGetIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PutV1IngredientsUpdateSuccessfulResponse {
  status: "success";
  /** @example {"message":"Ingredient updated Successfully"} */
  data: {
    message: string;
  };
}
export interface PutV1IngredientsUpdateErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PutV1IngredientsUpdateRequestBody = ((object & object) & object) & {
  micronutrient?: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    quantity: number;
    unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
    name:
      | "calories"
      | "protein"
      | "fat"
      | "carbohydrate"
      | "fiber"
      | "sugar"
      | "sodium"
      | "potassium"
      | "calcium"
      | "iron"
      | "magnesium"
      | "zinc"
      | "vitaminA"
      | "vitaminB6"
      | "vitaminB12"
      | "vitaminC"
      | "vitaminD"
      | "vitaminE"
      | "vitaminK";
  }[];
  name?: string;
  unit?: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    quantity: number;
    unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
  };
  category?: string;
  /** Id of the Blog */
  id: string;
};
/** @format any */
export type DeleteV1IngredientsDeleteIdParameterId = any;
export interface DeleteV1IngredientsDeleteIdSuccessfulResponse {
  status: "success";
  /** @example {"message":"Ingredient Removed Successfully"} */
  data: {
    message: string;
  };
}
export interface DeleteV1IngredientsDeleteIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PostV1RecipeAddSuccessfulResponse {
  status: "success";
  /** @example {"message":"Recipe Added Successfully"} */
  data: {
    message: string;
  };
}
export interface PostV1RecipeAddErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PostV1RecipeAddRequestBody = ((object & object) & object) & {
  /** Name of the Recipe */
  name: string;
  ingredients: string[];
  /** Method of the Recipe */
  method: string;
  /** Diet Type of the Recipe */
  dietType: string;
  /** Allergy Type of the Recipe */
  allergyType: string;
  /** Photo of the Recipe */
  photo: string;
  /** Tags of the Recipe */
  tags: string[];
  mealType: "Breakfast" | "Lunch" | "Dinner" | "Snack";
};
/**
 * Page Number
 * @minLength 1
 */
export type GetV1RecipeGetParameterPage = string;
/**
 * Limit
 * @minLength 1
 */
export type GetV1RecipeGetParameterLimit = string;
export type GetV1RecipeGetParameterSearch = string;
export type GetV1RecipeGetParameterTags = string[];
export interface GetV1RecipeGetSuccessfulResponse {
  status: "success";
  /** @example {"message":"Data fetched Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65aa390c8e93a170706b736b","name":"abc","ingredients":[{"_id":"65aa390c8e93a170706b736c","name":"abc","category":"abc","unit":{"quantity":1,"unit":"cal"},"micronutrient":[{"quantity":1,"unit":"cal","name":"calcium"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}],"method":"abc","dietType":"abc","allergyType":"abc","photo":"abc","tags":["abc"],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z","mealType":"Breakfast","totalQuantity":{"quantity":1,"unit":"cal"},"quantityByMicroNutrient":[{"quantity":1,"unit":"cal","name":"calcium"}]}]} */
  data: {
    message: string;
    meta: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      total: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      page: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      limit: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalPages: number;
    };
    data: {
      /** @format any */
      _id: any;
      /** Name of the Recipe */
      name: string;
      ingredients: {
        /** @format any */
        _id: any;
        name: string;
        category: string;
        unit?: {
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          quantity: number;
          unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
        };
        micronutrient: {
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          quantity: number;
          unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
          name:
            | "calories"
            | "protein"
            | "fat"
            | "carbohydrate"
            | "fiber"
            | "sugar"
            | "sodium"
            | "potassium"
            | "calcium"
            | "iron"
            | "magnesium"
            | "zinc"
            | "vitaminA"
            | "vitaminB6"
            | "vitaminB12"
            | "vitaminC"
            | "vitaminD"
            | "vitaminE"
            | "vitaminK";
        }[];
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt: string;
      }[];
      /** Method of the Recipe */
      method: string;
      /** Diet Type of the Recipe */
      dietType: string;
      /** Allergy Type of the Recipe */
      allergyType: string;
      /** Photo of the Recipe */
      photo: string;
      /** Tags of the Recipe */
      tags: string[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
      mealType: "Breakfast" | "Lunch" | "Dinner" | "Snack";
      totalQuantity: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: string;
      };
      quantityByMicroNutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
        name:
          | "calories"
          | "protein"
          | "fat"
          | "carbohydrate"
          | "fiber"
          | "sugar"
          | "sodium"
          | "potassium"
          | "calcium"
          | "iron"
          | "magnesium"
          | "zinc"
          | "vitaminA"
          | "vitaminB6"
          | "vitaminB12"
          | "vitaminC"
          | "vitaminD"
          | "vitaminE"
          | "vitaminK"
          | "water";
      }[];
    }[];
  };
}
export interface GetV1RecipeGetErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
/** @format any */
export type GetV1RecipeGetIdParameterId = any;
export interface GetV1RecipeGetIdSuccessfulResponse {
  status: "success";
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65aa390c8e93a170706b7369","name":"abc","ingredients":[{"_id":"65aa390c8e93a170706b736a","name":"abc","category":"abc","unit":{"quantity":1,"unit":"cal"},"micronutrient":[{"quantity":1,"unit":"cal","name":"calcium"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}],"method":"abc","dietType":"abc","allergyType":"abc","photo":"abc","tags":["abc"],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z","mealType":"Breakfast","totalQuantity":{"quantity":1,"unit":"cal"},"quantityByMicroNutrient":[{"quantity":1,"unit":"cal","name":"calcium"}]}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      /** Name of the Recipe */
      name: string;
      ingredients: {
        /** @format any */
        _id: any;
        name: string;
        category: string;
        unit?: {
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          quantity: number;
          unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
        };
        micronutrient: {
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          quantity: number;
          unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
          name:
            | "calories"
            | "protein"
            | "fat"
            | "carbohydrate"
            | "fiber"
            | "sugar"
            | "sodium"
            | "potassium"
            | "calcium"
            | "iron"
            | "magnesium"
            | "zinc"
            | "vitaminA"
            | "vitaminB6"
            | "vitaminB12"
            | "vitaminC"
            | "vitaminD"
            | "vitaminE"
            | "vitaminK";
        }[];
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt: string;
      }[];
      /** Method of the Recipe */
      method: string;
      /** Diet Type of the Recipe */
      dietType: string;
      /** Allergy Type of the Recipe */
      allergyType: string;
      /** Photo of the Recipe */
      photo: string;
      /** Tags of the Recipe */
      tags: string[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
      mealType: "Breakfast" | "Lunch" | "Dinner" | "Snack";
      totalQuantity: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: string;
      };
      quantityByMicroNutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: "g" | "ml" | "kg" | "l" | "lb" | "cal" | "kcal" | "oz" | "tsp" | "tbsp" | "cup" | "pnt" | "qt" | "gal";
        name:
          | "calories"
          | "protein"
          | "fat"
          | "carbohydrate"
          | "fiber"
          | "sugar"
          | "sodium"
          | "potassium"
          | "calcium"
          | "iron"
          | "magnesium"
          | "zinc"
          | "vitaminA"
          | "vitaminB6"
          | "vitaminB12"
          | "vitaminC"
          | "vitaminD"
          | "vitaminE"
          | "vitaminK"
          | "water";
      }[];
    };
  };
}
export interface GetV1RecipeGetIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export interface PutV1RecipeUpdateSuccessfulResponse {
  status: "success";
  /** @example {"message":"Ingredient Added Successfully"} */
  data: {
    message: string;
  };
}
export interface PutV1RecipeUpdateErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
export type PutV1RecipeUpdateRequestBody = ((object & object) & object) & {
  /** Name of the Recipe */
  name?: string;
  /** Allergy Type of the Recipe */
  allergyType?: string;
  /** Id of the Ingredient */
  ingredients?: any[];
  /** Diet Type of the Recipe */
  dietType?: string;
  /** Method of the Recipe */
  method?: string;
  /** Photo of the Recipe */
  photo?: string;
  /** Tags of the Recipe */
  tags?: string[];
  mealType?: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  id: string;
};
/** @format any */
export type DeleteV1RecipeDeleteIdParameterId = any;
export interface DeleteV1RecipeDeleteIdSuccessfulResponse {
  status: "success";
  /** @example {"message":"Recipe Removed Successfully"} */
  data: {
    message: string;
  };
}
export interface DeleteV1RecipeDeleteIdErrorResponse {
  status: "error";
  error: {
    message: string;
  };
}
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}
export declare enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}
export declare class HttpClient<SecurityDataType = unknown> {
  instance: AxiosInstance;
  private securityData;
  private securityWorker?;
  private secure?;
  private format?;
  constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType | null) => void;
  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
  protected stringifyFormItem(formItem: unknown): string;
  protected createFormData(input: Record<string, unknown>): FormData;
  request: <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title Example API
 * @version 1.1.1
 * @baseUrl http://localhost:8000
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1: {
    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthLogin
     * @summary Login endpoint
     * @request POST:/v1/auth/login
     */
    postV1AuthLogin: (
      data: PostV1AuthLoginRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1AuthLoginSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthRegister
     * @summary Registration endpoint
     * @request POST:/v1/auth/register
     */
    postV1AuthRegister: (
      data: PostV1AuthRegisterRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1AuthRegisterSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Authentication
     * @name PutV1AuthPasswordChange
     * @summary Change Password endpoint
     * @request PUT:/v1/auth/password/change
     * @secure
     */
    putV1AuthPasswordChange: (
      data: PutV1AuthPasswordChangeRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PutV1AuthPasswordChangeSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthPasswordForget
     * @summary Send OTP to user's email address for password res…
     * @request POST:/v1/auth/password/forget
     */
    postV1AuthPasswordForget: (
      data: PostV1AuthPasswordForgetRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1AuthPasswordForgetSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthPasswordReset
     * @summary Reset Password
     * @request POST:/v1/auth/password/reset
     */
    postV1AuthPasswordReset: (
      data: PostV1AuthPasswordResetRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1AuthPasswordResetSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthVerifyOtp
     * @summary Verify OTP
     * @request POST:/v1/auth/verify-otp
     */
    postV1AuthVerifyOtp: (
      data: PostV1AuthVerifyOtpRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1AuthVerifyOtpSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags User Profile
     * @name GetV1ProfileGetSingle
     * @summary Get Logged in User Profile endpoint
     * @request GET:/v1/profile/get/single
     * @secure
     */
    getV1ProfileGetSingle: (params?: RequestParams) => Promise<AxiosResponse<GetV1ProfileGetSingleSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags User Profile
     * @name GetV1ProfileGetSingleId
     * @summary Get Single User Profile endpoint by Id, only for …
     * @request GET:/v1/profile/get/single/{id}
     * @secure
     */
    getV1ProfileGetSingleId: (
      id: GetV1ProfileGetSingleIdParameterId,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetV1ProfileGetSingleIdSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags User Profile
     * @name GetV1ProfileGetAll
     * @summary Get All User Profile endpoint
     * @request GET:/v1/profile/get/all
     * @secure
     */
    getV1ProfileGetAll: (
      query?: {
        /** Page Number */
        page?: GetV1ProfileGetAllParameterPage;
        /** Limit */
        limit?: GetV1ProfileGetAllParameterLimit;
        /** GET /v1/profile/get/all parameter */
        search?: GetV1ProfileGetAllParameterSearch;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetV1ProfileGetAllSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags User Profile
     * @name PostV1ProfileUpdate
     * @summary Update Profile endpoint
     * @request POST:/v1/profile/update
     * @secure
     */
    postV1ProfileUpdate: (
      data: PostV1ProfileUpdateRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1ProfileUpdateSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags User Profile
     * @name DeleteV1ProfileDeleteId
     * @summary Delete User Profile By Id
     * @request DELETE:/v1/profile/delete/{id}
     * @secure
     */
    deleteV1ProfileDeleteId: (
      id: DeleteV1ProfileDeleteIdParameterId,
      params?: RequestParams,
    ) => Promise<AxiosResponse<DeleteV1ProfileDeleteIdSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogsGet
     * @summary Get all blog endpoint
     * @request GET:/v1/blogs/get
     * @secure
     */
    getV1BlogsGet: (
      query?: {
        /** Page Number */
        page?: GetV1BlogsGetParameterPage;
        /** Limit */
        limit?: GetV1BlogsGetParameterLimit;
        /** GET /v1/blogs/get parameter */
        search?: GetV1BlogsGetParameterSearch;
        /** GET /v1/blogs/get parameter */
        tags?: GetV1BlogsGetParameterTags;
        /** GET /v1/blogs/get parameter */
        type?: GetV1BlogsGetParameterType;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetV1BlogsGetSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogsGetId
     * @summary Get single blog endpoint
     * @request GET:/v1/blogs/get/{id}
     * @secure
     */
    getV1BlogsGetId: (
      id: GetV1BlogsGetIdParameterId,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetV1BlogsGetIdSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogsTags
     * @summary Get all blog tags endpoint
     * @request GET:/v1/blogs/tags
     * @secure
     */
    getV1BlogsTags: (params?: RequestParams) => Promise<AxiosResponse<GetV1BlogsTagsSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Blog
     * @name PostV1BlogsAdd
     * @summary Add Blog endpoint
     * @request POST:/v1/blogs/add
     * @secure
     */
    postV1BlogsAdd: (
      data: PostV1BlogsAddRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1BlogsAddSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Blog
     * @name DeleteV1BlogsDeleteId
     * @summary Remove Blog endpoint
     * @request DELETE:/v1/blogs/delete/{id}
     * @secure
     */
    deleteV1BlogsDeleteId: (
      id: DeleteV1BlogsDeleteIdParameterId,
      params?: RequestParams,
    ) => Promise<AxiosResponse<DeleteV1BlogsDeleteIdSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Blog
     * @name PutV1BlogsUpdateId
     * @summary Update Blog endpoint
     * @request PUT:/v1/blogs/update/{id}
     * @secure
     */
    putV1BlogsUpdateId: (
      id: PutV1BlogsUpdateIdParameterId,
      data: PutV1BlogsUpdateIdRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PutV1BlogsUpdateIdSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Ingredients
     * @name PostV1IngredientsAdd
     * @summary Add Ingredient endpoint
     * @request POST:/v1/ingredients/add
     * @secure
     */
    postV1IngredientsAdd: (
      data: PostV1IngredientsAddRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1IngredientsAddSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Ingredients
     * @name PostV1IngredientsGet
     * @summary Get all ingredient endpoint
     * @request POST:/v1/ingredients/get
     * @secure
     */
    postV1IngredientsGet: (
      data: PostV1IngredientsGetRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1IngredientsGetSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Ingredients
     * @name GetV1IngredientsGetId
     * @summary Get Single Ingredient endpoint
     * @request GET:/v1/ingredients/get/{id}
     * @secure
     */
    getV1IngredientsGetId: (
      id: GetV1IngredientsGetIdParameterId,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetV1IngredientsGetIdSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Ingredients
     * @name PutV1IngredientsUpdate
     * @summary Update Ingredient endpoint
     * @request PUT:/v1/ingredients/update
     * @secure
     */
    putV1IngredientsUpdate: (
      data: PutV1IngredientsUpdateRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PutV1IngredientsUpdateSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Ingredients
     * @name DeleteV1IngredientsDeleteId
     * @summary Remove Ingredient endpoint
     * @request DELETE:/v1/ingredients/delete/{id}
     * @secure
     */
    deleteV1IngredientsDeleteId: (
      id: DeleteV1IngredientsDeleteIdParameterId,
      params?: RequestParams,
    ) => Promise<AxiosResponse<DeleteV1IngredientsDeleteIdSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Recipe
     * @name PostV1RecipeAdd
     * @summary Add Recipe endpoint
     * @request POST:/v1/recipe/add
     * @secure
     */
    postV1RecipeAdd: (
      data: PostV1RecipeAddRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PostV1RecipeAddSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Recipe
     * @name GetV1RecipeGet
     * @summary Get all ingredient endpoint
     * @request GET:/v1/recipe/get
     * @secure
     */
    getV1RecipeGet: (
      query?: {
        /** Page Number */
        page?: GetV1RecipeGetParameterPage;
        /** Limit */
        limit?: GetV1RecipeGetParameterLimit;
        /** GET /v1/recipe/get parameter */
        search?: GetV1RecipeGetParameterSearch;
        /** GET /v1/recipe/get parameter */
        tags?: GetV1RecipeGetParameterTags;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetV1RecipeGetSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Recipe
     * @name GetV1RecipeGetId
     * @summary Get Single Ingredient endpoint
     * @request GET:/v1/recipe/get/{id}
     * @secure
     */
    getV1RecipeGetId: (
      id: GetV1RecipeGetIdParameterId,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetV1RecipeGetIdSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Recipe
     * @name PutV1RecipeUpdate
     * @summary Update Ingredient endpoint
     * @request PUT:/v1/recipe/update
     * @secure
     */
    putV1RecipeUpdate: (
      data: PutV1RecipeUpdateRequestBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<PutV1RecipeUpdateSuccessfulResponse>>;
    /**
     * No description
     *
     * @tags Recipe
     * @name DeleteV1RecipeDeleteId
     * @summary Remove Recipe endpoint
     * @request DELETE:/v1/recipe/delete/{id}
     * @secure
     */
    deleteV1RecipeDeleteId: (
      id: DeleteV1RecipeDeleteIdParameterId,
      params?: RequestParams,
    ) => Promise<AxiosResponse<DeleteV1RecipeDeleteIdSuccessfulResponse>>;
  };
}
