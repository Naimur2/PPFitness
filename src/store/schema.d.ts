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
  status: 'success';
  /** @example {"message":"Login Successful","data":{"accessToken":"access token","refreshToken":"refresh token","user":{"_id":"id","email":"example@xyz.abc","emailVerified":false,"role":"user"}}} */
  data: {
    message: string;
    data?: {
      accessToken: string;
      refreshToken: string;
      user: {
        _id: string;
        email: string;
        emailVerified?: boolean;
        role?: 'admin' | 'user';
      };
    };
  };
}

export interface PostV1AuthLoginErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthLoginRequestBody = object & {
  /** Email Of the User */
  email: string;
  /** Password Of the User */
  password: string;
  method?: 'email' | 'google' | 'apple' | 'facebook';
};

export interface PostV1AuthRegisterSuccessfulResponse {
  status: 'success';
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
  status: 'error';
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
  method?: 'email' | 'google' | 'apple' | 'facebook';
  fullName?: string;
};

export interface PutV1AuthPasswordChangeSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Password Changed Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1AuthPasswordChangeErrorResponse {
  status: 'error';
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
  status: 'success';
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
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthPasswordForgetRequestBody = object & {
  /** @format email */
  email: string;
};

export interface PostV1AuthPasswordResetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Password Reset Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1AuthPasswordResetErrorResponse {
  status: 'error';
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
  status: 'success';
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
  status: 'error';
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

export type GetV1BlogsGetParameterTags = string[] | null;

export interface GetV1BlogsGetSuccessfulResponse {
  status: 'success';
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
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the Blog */
export type GetV1BlogsGetIdParameterId = string;

export interface GetV1BlogsGetIdSuccessfulResponse {
  status: 'success';
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
  status: 'error';
  error: {
    message: string;
  };
}

export interface GetV1BlogsTagsSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","tags":["tag1","tag2"]} */
  data: {
    message: string;
    tags: string[];
  };
}

export interface GetV1BlogsTagsErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1BlogsAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1BlogsAddErrorResponse {
  status: 'error';
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
  /**
   * Thumbnail Of the Blog
   * @format url
   */
  thumbnail: string;
};

/** Id of the Blog */
export type DeleteV1BlogsDeleteIdParameterId = string;

export interface DeleteV1BlogsDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1BlogsDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the Blog */
export type PutV1BlogsUpdateIdParameterId = string;

export interface PutV1BlogsUpdateIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1BlogsUpdateIdErrorResponse {
  status: 'error';
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
  /**
   * Thumbnail Of the Blog
   * @format url
   */
  thumbnail?: string;
};

export interface PostV1ExerciseAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Exercise Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1ExerciseAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ExerciseAddRequestBody = ((object & object) & object) & {
  /** Name of the Exercise */
  name: string;
  /** Tags of the Exercise */
  tags: string[];
  /** Body Part Name of the Exercise */
  bodyPart?: string;
  /** Equipment of the Exercise */
  equipment?: string;
  /** Instruction of the Exercise */
  instruction: string;
  /**
   * Video of the Exercise
   * @format url
   */
  video: string;
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1ExerciseGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1ExerciseGetParameterLimit = string;

export type GetV1ExerciseGetParameterSearch = string;

export type GetV1ExerciseGetParameterTags = string[];

export type GetV1ExerciseGetParameterBodyPart = string;

export type GetV1ExerciseGetParameterEquipment = string;

export interface GetV1ExerciseGetSuccessfulResponse {
  status: 'success';
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
      /** Name of the Exercise */
      name: string;
      /**
       * Video of the Exercise
       * @format url
       */
      video: string;
      /** Instruction of the Exercise */
      instruction: string;
      /** Tags of the Exercise */
      tags: string[];
      /** Body Part Name of the Exercise */
      bodyPart?: string;
      /** Equipment of the Exercise */
      equipment?: string;
      /** @format any */
      createdBy: any;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    }[];
  };
}

export interface GetV1ExerciseGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1ExerciseGetIdParameterId = string;

export interface GetV1ExerciseGetIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      /** Name of the Exercise */
      name: string;
      /**
       * Video of the Exercise
       * @format url
       */
      video: string;
      /** Instruction of the Exercise */
      instruction: string;
      /** Tags of the Exercise */
      tags: string[];
      /** Body Part Name of the Exercise */
      bodyPart?: string;
      /** Equipment of the Exercise */
      equipment?: string;
      /** @format any */
      createdBy: any;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    };
  };
}

export interface GetV1ExerciseGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ExerciseUpdateIdParameterId = string;

export interface PutV1ExerciseUpdateIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      /** Name of the Exercise */
      name: string;
      /**
       * Video of the Exercise
       * @format url
       */
      video: string;
      /** Instruction of the Exercise */
      instruction: string;
      /** Tags of the Exercise */
      tags: string[];
      /** Body Part Name of the Exercise */
      bodyPart?: string;
      /** Equipment of the Exercise */
      equipment?: string;
      /** @format any */
      createdBy: any;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    };
  };
}

export interface PutV1ExerciseUpdateIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ExerciseUpdateIdRequestBody = ((object & object) & object) & {
  /** Name of the Exercise */
  name: string;
  /** Tags of the Exercise */
  tags: string[];
  /** Body Part Name of the Exercise */
  bodyPart?: string;
  /** Equipment of the Exercise */
  equipment?: string;
  /** Instruction of the Exercise */
  instruction: string;
  /**
   * Video of the Exercise
   * @format url
   */
  video: string;
};

export type DeleteV1ExerciseDeleteIdParameterId = string;

export interface DeleteV1ExerciseDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Exercise Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1ExerciseDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1FileUploadSuccessfulResponse {
  status: 'success';
  /** @example {"message":"File Added Successfully","data":[{"etag":"\"a6bbcf1227fde3695d10c402d980d496\"","requestId":"M2JY8HW59S1PET5P","url":"https://ppfitness.s3.amazonaws.com/Screenshot%202024-01-13%20185527.png"}]} */
  data: {
    message: string;
    data: {
      etag?: string;
      requestId?: string;
      url?: string;
    }[];
  };
}

export interface PostV1FileUploadErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1FileUploadRequestBody = object & {
  files: File | File[];
};

export interface PostV1FileDeleteSuccessfulResponse {
  status: 'success';
  /** @example {"message":"File Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1FileDeleteErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1FileDeleteRequestBody = object & {
  /** File Urls */
  files: string[];
};

export interface PostV1IngredientsAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65ad5cdc72051b15c1d340b1","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}} */
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
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
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
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK';
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    };
  };
}

export interface PostV1IngredientsAddErrorResponse {
  status: 'error';
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
    unit:
      | 'g'
      | 'ml'
      | 'kg'
      | 'l'
      | 'lb'
      | 'cal'
      | 'kcal'
      | 'oz'
      | 'tsp'
      | 'tbsp'
      | 'cup'
      | 'pnt'
      | 'qt'
      | 'gal';
    name:
      | 'calories'
      | 'protein'
      | 'fat'
      | 'carbohydrate'
      | 'fiber'
      | 'sugar'
      | 'sodium'
      | 'potassium'
      | 'calcium'
      | 'iron'
      | 'magnesium'
      | 'zinc'
      | 'vitaminA'
      | 'vitaminB6'
      | 'vitaminB12'
      | 'vitaminC'
      | 'vitaminD'
      | 'vitaminE'
      | 'vitaminK';
  }[];
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1IngredientsGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1IngredientsGetParameterLimit = string;

export type GetV1IngredientsGetParameterSearch = string;

export type GetV1IngredientsGetParameterCategory = string;

export interface GetV1IngredientsGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65ad5cdc72051b15c1d340b3","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}]} */
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
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
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
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK';
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    }[];
  };
}

export interface GetV1IngredientsGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1IngredientsGetIdParameterId = string;

export interface GetV1IngredientsGetIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65ad5cdc72051b15c1d340b5","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}} */
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
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
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
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK';
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    };
  };
}

export interface GetV1IngredientsGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PutV1IngredientsUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1IngredientsUpdateErrorResponse {
  status: 'error';
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
    unit:
      | 'g'
      | 'ml'
      | 'kg'
      | 'l'
      | 'lb'
      | 'cal'
      | 'kcal'
      | 'oz'
      | 'tsp'
      | 'tbsp'
      | 'cup'
      | 'pnt'
      | 'qt'
      | 'gal';
    name:
      | 'calories'
      | 'protein'
      | 'fat'
      | 'carbohydrate'
      | 'fiber'
      | 'sugar'
      | 'sodium'
      | 'potassium'
      | 'calcium'
      | 'iron'
      | 'magnesium'
      | 'zinc'
      | 'vitaminA'
      | 'vitaminB6'
      | 'vitaminB12'
      | 'vitaminC'
      | 'vitaminD'
      | 'vitaminE'
      | 'vitaminK';
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
    unit:
      | 'g'
      | 'ml'
      | 'kg'
      | 'l'
      | 'lb'
      | 'cal'
      | 'kcal'
      | 'oz'
      | 'tsp'
      | 'tbsp'
      | 'cup'
      | 'pnt'
      | 'qt'
      | 'gal';
  };
  category?: string;
  /** Id of the Blog */
  id: string;
};

export type DeleteV1IngredientsDeleteIdParameterId = string;

export interface DeleteV1IngredientsDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1IngredientsDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1MealPlanUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Meal Plan Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1MealPlanUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1MealPlanUpdateRequestBody = (object & object) & {
  recipe: string[];
  day:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
};

export enum GetV1MealPlanGetParameterDay {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export interface GetV1MealPlanGetSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      /** @format any */
      userId?: any;
      recipe?: {
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
            unit:
              | 'g'
              | 'ml'
              | 'kg'
              | 'l'
              | 'lb'
              | 'cal'
              | 'kcal'
              | 'oz'
              | 'tsp'
              | 'tbsp'
              | 'cup'
              | 'pnt'
              | 'qt'
              | 'gal';
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
            unit:
              | 'g'
              | 'ml'
              | 'kg'
              | 'l'
              | 'lb'
              | 'cal'
              | 'kcal'
              | 'oz'
              | 'tsp'
              | 'tbsp'
              | 'cup'
              | 'pnt'
              | 'qt'
              | 'gal';
            name:
              | 'calories'
              | 'protein'
              | 'fat'
              | 'carbohydrate'
              | 'fiber'
              | 'sugar'
              | 'sodium'
              | 'potassium'
              | 'calcium'
              | 'iron'
              | 'magnesium'
              | 'zinc'
              | 'vitaminA'
              | 'vitaminB6'
              | 'vitaminB12'
              | 'vitaminC'
              | 'vitaminD'
              | 'vitaminE'
              | 'vitaminK'
              | 'water';
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
        /**
         * Photo of the Recipe
         * @format url
         */
        photo: string;
        /** Tags of the Recipe */
        tags: string[];
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt: string;
        mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
      }[];
      day?:
        | 'Monday'
        | 'Tuesday'
        | 'Wednesday'
        | 'Thursday'
        | 'Friday'
        | 'Saturday'
        | 'Sunday';
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt?: string;
      dailyMacro?: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK'
          | 'water';
      }[];
      sumOfAllMicroNutrient?: Record<string, number>;
      groceryList?: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name: string;
        category: string;
      }[];
    };
  };
}

export interface GetV1MealPlanGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type DeleteV1MealPlanDeleteIdParameterId = string;

export interface DeleteV1MealPlanDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Meal Plan Deleted Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1MealPlanDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface GetV1ProfileGetSingleSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      fullName?: string;
      /** @format url */
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      weight?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: 'email' | 'google' | 'apple' | 'facebook';
        role?: 'admin' | 'user';
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
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1ProfileGetSingleIdParameterId = string;

export interface GetV1ProfileGetSingleIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      fullName?: string;
      /** @format url */
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      weight?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: 'email' | 'google' | 'apple' | 'facebook';
        role?: 'admin' | 'user';
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
  status: 'error';
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
  status: 'success';
  data: {
    message: string;
    data: {
      fullName?: string;
      /** @format url */
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      weight?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: 'email' | 'google' | 'apple' | 'facebook';
        role?: 'admin' | 'user';
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
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1ProfileUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Profile Updated"} */
  data: {
    message: string;
  };
}

export interface PostV1ProfileUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ProfileUpdateRequestBody = (object & object) & {
  fullName?: string;
  /** @format url */
  avatar?: string;
  phone?: string;
  country?: string;
  gender?: string;
  height?: string;
  goal?: string;
  weight?: string;
};

export type DeleteV1ProfileDeleteIdParameterId = string;

export interface DeleteV1ProfileDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Profile Deleted Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1ProfileDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1ProgramAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Program Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1ProgramAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ProgramAddRequestBody = ((object & object) & object) & {
  /** Name of the Program */
  name: string;
  /** YYYY-MM-DDTHH:mm:ss.sssZ */
  startingDate: string;
  /** YYYY-MM-DDTHH:mm:ss.sssZ */
  endingDate: string;
  /** List of assigned users */
  assignedUsers?: any[];
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1ProgramGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1ProgramGetParameterLimit = string;

export type GetV1ProgramGetParameterSearch = string;

export interface GetV1ProgramGetSuccessfulResponse {
  status: 'success';
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
      /** Name of the Program */
      name: string;
      assignedUsers?: {
        userId: {
          /** @format any */
          _id?: any;
          /** @format email */
          email?: string;
          method?: 'email' | 'google' | 'apple' | 'facebook';
          role?: 'admin' | 'user';
          /** YYYY-MM-DDTHH:mm:ss.sssZ */
          registrationDate?: string;
          /** YYYY-MM-DDTHH:mm:ss.sssZ */
          createdAt?: string;
          /** YYYY-MM-DDTHH:mm:ss.sssZ */
          updatedAt?: string;
        };
        /** @format url */
        avatar?: string;
        fullName?: string;
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
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalWeeks?: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalUsers?: number;
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
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      startingDate?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      endingDate?: string;
    }[];
  };
}

export interface GetV1ProgramGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1ProgramGetIdParameterId = string;

export interface GetV1ProgramGetIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      /** Name of the Program */
      name: string;
      assignedUsers?: {
        userId: {
          /** @format any */
          _id?: any;
          /** @format email */
          email?: string;
          method?: 'email' | 'google' | 'apple' | 'facebook';
          role?: 'admin' | 'user';
          /** YYYY-MM-DDTHH:mm:ss.sssZ */
          registrationDate?: string;
          /** YYYY-MM-DDTHH:mm:ss.sssZ */
          createdAt?: string;
          /** YYYY-MM-DDTHH:mm:ss.sssZ */
          updatedAt?: string;
        };
        /** @format url */
        avatar?: string;
        fullName?: string;
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
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalWeeks?: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalUsers?: number;
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
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      startingDate?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      endingDate?: string;
    };
  };
}

export interface GetV1ProgramGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1ProgramUserParameterDay = number | string;

export type GetV1ProgramUserParameterWeek = number | string;

/**
 * YYYY-MM-DDTHH:mm:ss.sssZ
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetV1ProgramUserParameterDate = string;

export interface GetV1ProgramUserSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","data":[{"_id":"abc","day":1,"week":1,"date":"2024-01-21T18:05:16.600Z","assignedTo":"abc","programId":{"_id":"65ad5cdc72051b15c1d340c1","name":"abc","startingDate":"2024-01-21T18:05:16.600Z","endingDate":"2024-01-21T18:05:16.600Z","assignedUsers":[],"createdAt":"2024-01-21T18:05:16.600Z","updatedAt":"2024-01-21T18:05:16.600Z"},"isCompleted":false,"workouts":[{"_id":"65ad5cdc72051b15c1d340c2","exerciseId":"65ad5cdc72051b15c1d340c3","programId":"65ad5cdc72051b15c1d340c4","createdAt":"2024-01-21T18:05:16.600Z","updatedAt":"2024-01-21T18:05:16.600Z","sets":[{"reps":1,"weight":1,"rest":1,"time":1}],"circuit":"circuit","warmup":"warmup","createdBy":"65ad5cdc72051b15c1d340c5","notes":["notes"],"type":"circuit"}],"createdAt":"2024-01-21T18:05:16.600Z","updatedAt":"2024-01-21T18:05:16.600Z"}]} */
  data: {
    message: string;
    data: {
      _id: string;
      day: number | string;
      week: number | string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      date: string;
      assignedTo?: string;
      programId: {
        /** @format any */
        _id: any;
        /** Name of the Program */
        name: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        startingDate: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        endingDate: string;
        /** List of assigned users */
        assignedUsers?: any[];
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        createdAt: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        updatedAt: string;
      };
      isCompleted?: boolean;
      workouts: {
        /** @format any */
        _id: any;
        /** @format any */
        exerciseId: any;
        /** @format any */
        programId: any;
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
        sets?: {
          /** @format any */
          _id?: any;
          reps?: string | number;
          weight?: string | number;
          rest?: string | number;
          time?: string | number;
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
        circuit?: string;
        warmup?: string;
        /** @format any */
        createdBy: any;
        notes?: string[];
        type?: 'warmup' | 'circuit' | 'workout';
        isCompleted?: boolean;
      }[];
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt: string;
    }[];
  };
}

export interface GetV1ProgramUserErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ProgramUpdateIdParameterId = string;

export interface PutV1ProgramUpdateIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Program Updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1ProgramUpdateIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ProgramUpdateIdRequestBody = ((object & object) & object) & {
  /** Name of the Program */
  name: string;
  /** YYYY-MM-DDTHH:mm:ss.sssZ */
  startingDate: string;
  /** YYYY-MM-DDTHH:mm:ss.sssZ */
  endingDate: string;
  /** List of assigned users */
  assignedUsers?: any[];
};

export type DeleteV1ProgramDeleteIdParameterId = string;

export interface DeleteV1ProgramDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Program Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1ProgramDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1WorkoutAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Workout Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1WorkoutAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1WorkoutAddRequestBody = (object & object) & {
  exerciseId: string;
  programId: string;
  notes?: string[];
  sets: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    reps?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    weight?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    rest?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    time?: number;
  }[];
  circuit?: string;
  warmup?: string;
  type?: 'warmup' | 'circuit' | 'workout';
  dateTime: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    day?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    week?: number;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
     */
    date: string;
  };
  assignedTo: string;
};

export interface PostV1WorkoutAddByProgramSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Workout Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1WorkoutAddByProgramErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1WorkoutAddByProgramRequestBody = ((object & object) &
  object) & {
  exerciseId: string;
  programId: string;
  notes?: string[];
  sets: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    reps?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    weight?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    rest?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    time?: number;
  }[];
  circuit?: string;
  warmup?: string;
  type?: 'warmup' | 'circuit' | 'workout';
  dateTime: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    day?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    week?: number;
    /**
     * YYYY-MM-DDTHH:mm:ss.sssZ
     * @format date-time
     * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
     */
    date: string;
  };
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1WorkoutGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1WorkoutGetParameterLimit = string;

export interface GetV1WorkoutGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65ad5cdc72051b15c1d340d7","createdBy":"65ad5cdc72051b15c1d340d8","exerciseId":"65ad5cdc72051b15c1d340d9","programId":"65ad5cdc72051b15c1d340da","notes":["notes"],"sets":[{"reps":1,"weight":1,"rest":1,"time":1,"_id":"65ad5cdc72051b15c1d340db","createdAt":"2024-01-21T18:05:16.834Z","updatedAt":"2024-01-21T18:05:16.834Z"}],"createdAt":"2024-01-21T18:05:16.834Z","updatedAt":"2024-01-21T18:05:16.834Z","circuit":"circuit","warmup":"warmup","type":"circuit","dateTime":{"day":1,"week":1,"date":"2024-01-21T18:05:16.834Z"},"isCompleted":false}]} */
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
      /** @format any */
      createdBy: any;
      /** @format any */
      exerciseId: any;
      /** @format any */
      programId: any;
      notes?: string[];
      sets: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        reps: number;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        weight: number;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        rest: number;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        time: number;
        /** @format any */
        _id: any;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        createdAt: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        updatedAt: string;
      }[];
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt: string;
      circuit?: string;
      warmup?: string;
      type?: 'warmup' | 'circuit' | 'workout';
      dateTime: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        day?: number;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        week?: number;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        date: string;
      };
      isCompleted?: boolean;
    }[];
  };
}

export interface GetV1WorkoutGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1WorkoutGetIdParameterId = string;

export interface GetV1WorkoutGetIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","data":{"_id":"65ad5cdc72051b15c1d340dd","createdBy":"65ad5cdc72051b15c1d340de","exerciseId":"65ad5cdc72051b15c1d340df","programId":"65ad5cdc72051b15c1d340e0","notes":["notes"],"sets":[{"reps":1,"weight":1,"rest":1,"time":1,"_id":"65ad5cdc72051b15c1d340e1","createdAt":"2024-01-21T18:05:16.838Z","updatedAt":"2024-01-21T18:05:16.838Z"}],"createdAt":"2024-01-21T18:05:16.838Z","updatedAt":"2024-01-21T18:05:16.838Z","circuit":"circuit","warmup":"warmup","type":"circuit","dateTime":{"day":1,"week":1,"date":"2024-01-21T18:05:16.838Z"},"isCompleted":false}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      /** @format any */
      createdBy: any;
      /** @format any */
      exerciseId: any;
      /** @format any */
      programId: any;
      notes?: string[];
      sets: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        reps: number;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        weight: number;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        rest: number;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        time: number;
        /** @format any */
        _id: any;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        createdAt: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        updatedAt: string;
      }[];
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt: string;
      circuit?: string;
      warmup?: string;
      type?: 'warmup' | 'circuit' | 'workout';
      dateTime: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        day?: number;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        week?: number;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        date: string;
      };
      isCompleted?: boolean;
    };
  };
}

export interface GetV1WorkoutGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1WorkoutUpdateIdParameterId = string;

export interface PutV1WorkoutUpdateIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Workout Updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1WorkoutUpdateIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1WorkoutUpdateIdRequestBody = ((object & object) & object) & {
  sets?: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    reps?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    weight?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    rest?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    time?: number;
  }[];
  notes?: string[];
  circuit?: string;
  warmup?: string;
  type?: 'warmup' | 'circuit' | 'workout';
  dateTime: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    day?: number;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    week?: number;
    /** YYYY-MM-DDTHH:mm:ss.sssZ */
    date: string;
  };
  isCompleted?: boolean;
};

export type DeleteV1WorkoutDeleteIdParameterId = string;

export interface DeleteV1WorkoutDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Workout Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1WorkoutDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1RecipeAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Recipe Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1RecipeAddErrorResponse {
  status: 'error';
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
  /**
   * Photo url of the Recipe
   * @format url
   */
  photo: string;
  /** Tags of the Recipe */
  tags: string[];
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
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
  status: 'success';
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
          unit:
            | 'g'
            | 'ml'
            | 'kg'
            | 'l'
            | 'lb'
            | 'cal'
            | 'kcal'
            | 'oz'
            | 'tsp'
            | 'tbsp'
            | 'cup'
            | 'pnt'
            | 'qt'
            | 'gal';
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
          unit:
            | 'g'
            | 'ml'
            | 'kg'
            | 'l'
            | 'lb'
            | 'cal'
            | 'kcal'
            | 'oz'
            | 'tsp'
            | 'tbsp'
            | 'cup'
            | 'pnt'
            | 'qt'
            | 'gal';
          name:
            | 'calories'
            | 'protein'
            | 'fat'
            | 'carbohydrate'
            | 'fiber'
            | 'sugar'
            | 'sodium'
            | 'potassium'
            | 'calcium'
            | 'iron'
            | 'magnesium'
            | 'zinc'
            | 'vitaminA'
            | 'vitaminB6'
            | 'vitaminB12'
            | 'vitaminC'
            | 'vitaminD'
            | 'vitaminE'
            | 'vitaminK';
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
      /**
       * Photo of the Recipe
       * @format url
       */
      photo: string;
      /** Tags of the Recipe */
      tags: string[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
      mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
    }[];
  };
}

export interface GetV1RecipeGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1RecipeGetIdParameterId = string;

export interface GetV1RecipeGetIdSuccessfulResponse {
  status: 'success';
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
          unit:
            | 'g'
            | 'ml'
            | 'kg'
            | 'l'
            | 'lb'
            | 'cal'
            | 'kcal'
            | 'oz'
            | 'tsp'
            | 'tbsp'
            | 'cup'
            | 'pnt'
            | 'qt'
            | 'gal';
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
          unit:
            | 'g'
            | 'ml'
            | 'kg'
            | 'l'
            | 'lb'
            | 'cal'
            | 'kcal'
            | 'oz'
            | 'tsp'
            | 'tbsp'
            | 'cup'
            | 'pnt'
            | 'qt'
            | 'gal';
          name:
            | 'calories'
            | 'protein'
            | 'fat'
            | 'carbohydrate'
            | 'fiber'
            | 'sugar'
            | 'sodium'
            | 'potassium'
            | 'calcium'
            | 'iron'
            | 'magnesium'
            | 'zinc'
            | 'vitaminA'
            | 'vitaminB6'
            | 'vitaminB12'
            | 'vitaminC'
            | 'vitaminD'
            | 'vitaminE'
            | 'vitaminK';
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
      /**
       * Photo of the Recipe
       * @format url
       */
      photo: string;
      /** Tags of the Recipe */
      tags: string[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
      mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
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
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK'
          | 'water';
      }[];
    };
  };
}

export interface GetV1RecipeGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1RecipeUpdateIdParameterId = string;

export interface PutV1RecipeUpdateIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1RecipeUpdateIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1RecipeUpdateIdRequestBody = ((object & object) & object) & {
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
  /**
   * Photo of the Recipe
   * @format url
   */
  photo?: string;
  /** Tags of the Recipe */
  tags?: string[];
  mealType?: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
};

export type DeleteV1RecipeDeleteIdParameterId = string;

export interface DeleteV1RecipeDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Recipe Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1RecipeDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:8000';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`,
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      key => 'undefined' !== typeof query[key],
    );
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? {'Content-Type': type}
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async response => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch(e => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title PP Fitness API
 * @version 1.1.1
 * @baseUrl http://localhost:8000
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  v1 = {
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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthLoginSuccessfulResponse,
        PostV1AuthLoginErrorResponse
      >({
        path: `/v1/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthRegisterSuccessfulResponse,
        PostV1AuthRegisterErrorResponse
      >({
        path: `/v1/auth/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1AuthPasswordChangeSuccessfulResponse,
        PutV1AuthPasswordChangeErrorResponse
      >({
        path: `/v1/auth/password/change`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthPasswordForgetSuccessfulResponse,
        PostV1AuthPasswordForgetErrorResponse
      >({
        path: `/v1/auth/password/forget`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthPasswordResetSuccessfulResponse,
        PostV1AuthPasswordResetErrorResponse
      >({
        path: `/v1/auth/password/reset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthVerifyOtpSuccessfulResponse,
        PostV1AuthVerifyOtpErrorResponse
      >({
        path: `/v1/auth/verify-otp`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      },
      params: RequestParams = {},
    ) =>
      this.request<GetV1BlogsGetSuccessfulResponse, GetV1BlogsGetErrorResponse>(
        {
          path: `/v1/blogs/get`,
          method: 'GET',
          query: query,
          secure: true,
          format: 'json',
          ...params,
        },
      ),

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
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1BlogsGetIdSuccessfulResponse,
        GetV1BlogsGetIdErrorResponse
      >({
        path: `/v1/blogs/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogsTags
     * @summary Get all blog tags endpoint
     * @request GET:/v1/blogs/tags
     * @secure
     */
    getV1BlogsTags: (params: RequestParams = {}) =>
      this.request<
        GetV1BlogsTagsSuccessfulResponse,
        GetV1BlogsTagsErrorResponse
      >({
        path: `/v1/blogs/tags`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1BlogsAddSuccessfulResponse,
        PostV1BlogsAddErrorResponse
      >({
        path: `/v1/blogs/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1BlogsDeleteIdSuccessfulResponse,
        DeleteV1BlogsDeleteIdErrorResponse
      >({
        path: `/v1/blogs/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1BlogsUpdateIdSuccessfulResponse,
        PutV1BlogsUpdateIdErrorResponse
      >({
        path: `/v1/blogs/update/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exercise
     * @name PostV1ExerciseAdd
     * @summary Add Exercise endpoint
     * @request POST:/v1/exercise/add
     * @secure
     */
    postV1ExerciseAdd: (
      data: PostV1ExerciseAddRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1ExerciseAddSuccessfulResponse,
        PostV1ExerciseAddErrorResponse
      >({
        path: `/v1/exercise/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exercise
     * @name GetV1ExerciseGet
     * @summary Get all Exercise endpoint
     * @request GET:/v1/exercise/get
     * @secure
     */
    getV1ExerciseGet: (
      query?: {
        /** Page Number */
        page?: GetV1ExerciseGetParameterPage;
        /** Limit */
        limit?: GetV1ExerciseGetParameterLimit;
        /** GET /v1/exercise/get parameter */
        search?: GetV1ExerciseGetParameterSearch;
        /** GET /v1/exercise/get parameter */
        tags?: GetV1ExerciseGetParameterTags;
        /** GET /v1/exercise/get parameter */
        bodyPart?: GetV1ExerciseGetParameterBodyPart;
        /** GET /v1/exercise/get parameter */
        equipment?: GetV1ExerciseGetParameterEquipment;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ExerciseGetSuccessfulResponse,
        GetV1ExerciseGetErrorResponse
      >({
        path: `/v1/exercise/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exercise
     * @name GetV1ExerciseGetId
     * @summary Get all Exercise endpoint
     * @request GET:/v1/exercise/get/{id}
     * @secure
     */
    getV1ExerciseGetId: (
      id: GetV1ExerciseGetIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ExerciseGetIdSuccessfulResponse,
        GetV1ExerciseGetIdErrorResponse
      >({
        path: `/v1/exercise/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exercise
     * @name PutV1ExerciseUpdateId
     * @summary Add Exercise endpoint
     * @request PUT:/v1/exercise/update/{id}
     * @secure
     */
    putV1ExerciseUpdateId: (
      id: PutV1ExerciseUpdateIdParameterId,
      data: PutV1ExerciseUpdateIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1ExerciseUpdateIdSuccessfulResponse,
        PutV1ExerciseUpdateIdErrorResponse
      >({
        path: `/v1/exercise/update/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exercise
     * @name DeleteV1ExerciseDeleteId
     * @summary Remove Exercise endpoint
     * @request DELETE:/v1/exercise/delete/{id}
     * @secure
     */
    deleteV1ExerciseDeleteId: (
      id: DeleteV1ExerciseDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1ExerciseDeleteIdSuccessfulResponse,
        DeleteV1ExerciseDeleteIdErrorResponse
      >({
        path: `/v1/exercise/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name PostV1FileUpload
     * @summary Upload File to S3
     * @request POST:/v1/file/upload
     */
    postV1FileUpload: (
      data: PostV1FileUploadRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1FileUploadSuccessfulResponse,
        PostV1FileUploadErrorResponse
      >({
        path: `/v1/file/upload`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name PostV1FileDelete
     * @summary Delete File
     * @request POST:/v1/file/delete
     */
    postV1FileDelete: (
      data: PostV1FileDeleteRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1FileDeleteSuccessfulResponse,
        PostV1FileDeleteErrorResponse
      >({
        path: `/v1/file/delete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1IngredientsAddSuccessfulResponse,
        PostV1IngredientsAddErrorResponse
      >({
        path: `/v1/ingredients/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ingredients
     * @name GetV1IngredientsGet
     * @summary Get all ingredient endpoint
     * @request GET:/v1/ingredients/get
     * @secure
     */
    getV1IngredientsGet: (
      query?: {
        /** Page Number */
        page?: GetV1IngredientsGetParameterPage;
        /** Limit */
        limit?: GetV1IngredientsGetParameterLimit;
        /** GET /v1/ingredients/get parameter */
        search?: GetV1IngredientsGetParameterSearch;
        /** GET /v1/ingredients/get parameter */
        category?: GetV1IngredientsGetParameterCategory;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1IngredientsGetSuccessfulResponse,
        GetV1IngredientsGetErrorResponse
      >({
        path: `/v1/ingredients/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1IngredientsGetIdSuccessfulResponse,
        GetV1IngredientsGetIdErrorResponse
      >({
        path: `/v1/ingredients/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1IngredientsUpdateSuccessfulResponse,
        PutV1IngredientsUpdateErrorResponse
      >({
        path: `/v1/ingredients/update`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1IngredientsDeleteIdSuccessfulResponse,
        DeleteV1IngredientsDeleteIdErrorResponse
      >({
        path: `/v1/ingredients/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Meal Plan
     * @name PostV1MealPlanUpdate
     * @summary Update Meal Plan
     * @request POST:/v1/meal-plan/update
     * @secure
     */
    postV1MealPlanUpdate: (
      data: PostV1MealPlanUpdateRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1MealPlanUpdateSuccessfulResponse,
        PostV1MealPlanUpdateErrorResponse
      >({
        path: `/v1/meal-plan/update`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Meal Plan
     * @name GetV1MealPlanGet
     * @summary Get Single Ingredient endpoint
     * @request GET:/v1/meal-plan/get
     * @secure
     */
    getV1MealPlanGet: (
      query: {
        /** GET /v1/meal-plan/get parameter */
        day: GetV1MealPlanGetParameterDay;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1MealPlanGetSuccessfulResponse,
        GetV1MealPlanGetErrorResponse
      >({
        path: `/v1/meal-plan/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Meal Plan
     * @name DeleteV1MealPlanDeleteId
     * @summary Delete Meal Plan endpoint
     * @request DELETE:/v1/meal-plan/delete/{id}
     * @secure
     */
    deleteV1MealPlanDeleteId: (
      id: DeleteV1MealPlanDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1MealPlanDeleteIdSuccessfulResponse,
        DeleteV1MealPlanDeleteIdErrorResponse
      >({
        path: `/v1/meal-plan/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Profile
     * @name GetV1ProfileGetSingle
     * @summary Get Logged in User Profile endpoint
     * @request GET:/v1/profile/get/single
     * @secure
     */
    getV1ProfileGetSingle: (params: RequestParams = {}) =>
      this.request<
        GetV1ProfileGetSingleSuccessfulResponse,
        GetV1ProfileGetSingleErrorResponse
      >({
        path: `/v1/profile/get/single`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProfileGetSingleIdSuccessfulResponse,
        GetV1ProfileGetSingleIdErrorResponse
      >({
        path: `/v1/profile/get/single/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProfileGetAllSuccessfulResponse,
        GetV1ProfileGetAllErrorResponse
      >({
        path: `/v1/profile/get/all`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1ProfileUpdateSuccessfulResponse,
        PostV1ProfileUpdateErrorResponse
      >({
        path: `/v1/profile/update`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1ProfileDeleteIdSuccessfulResponse,
        DeleteV1ProfileDeleteIdErrorResponse
      >({
        path: `/v1/profile/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name PostV1ProgramAdd
     * @summary Add Program endpoint
     * @request POST:/v1/program/add
     * @secure
     */
    postV1ProgramAdd: (
      data: PostV1ProgramAddRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1ProgramAddSuccessfulResponse,
        PostV1ProgramAddErrorResponse
      >({
        path: `/v1/program/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name GetV1ProgramGet
     * @summary Get all Program endpoint
     * @request GET:/v1/program/get
     * @secure
     */
    getV1ProgramGet: (
      query?: {
        /** Page Number */
        page?: GetV1ProgramGetParameterPage;
        /** Limit */
        limit?: GetV1ProgramGetParameterLimit;
        /** GET /v1/program/get parameter */
        search?: GetV1ProgramGetParameterSearch;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProgramGetSuccessfulResponse,
        GetV1ProgramGetErrorResponse
      >({
        path: `/v1/program/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name GetV1ProgramGetId
     * @summary Get Single Program endpoint
     * @request GET:/v1/program/get/{id}
     * @secure
     */
    getV1ProgramGetId: (
      id: GetV1ProgramGetIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProgramGetIdSuccessfulResponse,
        GetV1ProgramGetIdErrorResponse
      >({
        path: `/v1/program/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name GetV1ProgramUser
     * @summary Get Single Program by User endpoint
     * @request GET:/v1/program/user
     * @secure
     */
    getV1ProgramUser: (
      query?: {
        /** GET /v1/program/user parameter */
        day?: GetV1ProgramUserParameterDay;
        /** GET /v1/program/user parameter */
        week?: GetV1ProgramUserParameterWeek;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        date?: GetV1ProgramUserParameterDate;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProgramUserSuccessfulResponse,
        GetV1ProgramUserErrorResponse
      >({
        path: `/v1/program/user`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name PutV1ProgramUpdateId
     * @summary Update Program endpoint
     * @request PUT:/v1/program/update/{id}
     * @secure
     */
    putV1ProgramUpdateId: (
      data: PutV1ProgramUpdateIdRequestBody,
      id?: PutV1ProgramUpdateIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1ProgramUpdateIdSuccessfulResponse,
        PutV1ProgramUpdateIdErrorResponse
      >({
        path: `/v1/program/update/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Program
     * @name DeleteV1ProgramDeleteId
     * @summary Remove Program endpoint
     * @request DELETE:/v1/program/delete/{id}
     * @secure
     */
    deleteV1ProgramDeleteId: (
      id: DeleteV1ProgramDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1ProgramDeleteIdSuccessfulResponse,
        DeleteV1ProgramDeleteIdErrorResponse
      >({
        path: `/v1/program/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workout
     * @name PostV1WorkoutAdd
     * @summary Add Workout Exercise endpoint
     * @request POST:/v1/workout/add
     * @secure
     */
    postV1WorkoutAdd: (
      data: PostV1WorkoutAddRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1WorkoutAddSuccessfulResponse,
        PostV1WorkoutAddErrorResponse
      >({
        path: `/v1/workout/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workout
     * @name PostV1WorkoutAddByProgram
     * @summary Add Workout Exercise endpoint
     * @request POST:/v1/workout/add/by-program
     * @secure
     */
    postV1WorkoutAddByProgram: (
      data: PostV1WorkoutAddByProgramRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1WorkoutAddByProgramSuccessfulResponse,
        PostV1WorkoutAddByProgramErrorResponse
      >({
        path: `/v1/workout/add/by-program`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workout
     * @name GetV1WorkoutGet
     * @summary Get all Workout endpoint
     * @request GET:/v1/workout/get
     * @secure
     */
    getV1WorkoutGet: (
      query?: {
        /** Page Number */
        page?: GetV1WorkoutGetParameterPage;
        /** Limit */
        limit?: GetV1WorkoutGetParameterLimit;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1WorkoutGetSuccessfulResponse,
        GetV1WorkoutGetErrorResponse
      >({
        path: `/v1/workout/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workout
     * @name GetV1WorkoutGetId
     * @summary Get Single Workout endpoint
     * @request GET:/v1/workout/get/{id}
     * @secure
     */
    getV1WorkoutGetId: (
      id: GetV1WorkoutGetIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1WorkoutGetIdSuccessfulResponse,
        GetV1WorkoutGetIdErrorResponse
      >({
        path: `/v1/workout/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workout
     * @name PutV1WorkoutUpdateId
     * @summary Update Workout endpoint
     * @request PUT:/v1/workout/update/{id}
     * @secure
     */
    putV1WorkoutUpdateId: (
      data: PutV1WorkoutUpdateIdRequestBody,
      id?: PutV1WorkoutUpdateIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1WorkoutUpdateIdSuccessfulResponse,
        PutV1WorkoutUpdateIdErrorResponse
      >({
        path: `/v1/workout/update/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workout
     * @name DeleteV1WorkoutDeleteId
     * @summary Remove Workout endpoint
     * @request DELETE:/v1/workout/delete/{id}
     * @secure
     */
    deleteV1WorkoutDeleteId: (
      id: DeleteV1WorkoutDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1WorkoutDeleteIdSuccessfulResponse,
        DeleteV1WorkoutDeleteIdErrorResponse
      >({
        path: `/v1/workout/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1RecipeAddSuccessfulResponse,
        PostV1RecipeAddErrorResponse
      >({
        path: `/v1/recipe/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1RecipeGetSuccessfulResponse,
        GetV1RecipeGetErrorResponse
      >({
        path: `/v1/recipe/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1RecipeGetIdSuccessfulResponse,
        GetV1RecipeGetIdErrorResponse
      >({
        path: `/v1/recipe/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe
     * @name PutV1RecipeUpdateId
     * @summary Update Ingredient endpoint
     * @request PUT:/v1/recipe/update/{id}
     * @secure
     */
    putV1RecipeUpdateId: (
      id: PutV1RecipeUpdateIdParameterId,
      data: PutV1RecipeUpdateIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1RecipeUpdateIdSuccessfulResponse,
        PutV1RecipeUpdateIdErrorResponse
      >({
        path: `/v1/recipe/update/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

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
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1RecipeDeleteIdSuccessfulResponse,
        DeleteV1RecipeDeleteIdErrorResponse
      >({
        path: `/v1/recipe/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
