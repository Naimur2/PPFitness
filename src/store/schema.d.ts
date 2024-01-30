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
  /** @example {"message":"Login Successful","data":{"accessToken":"access token","refreshToken":"refresh token","user":{"_id":"65b8ad563a6957125b5573a7","email":"example@xyz.abc","emailVerified":false,"role":"user"}}} */
  data: {
    message: string;
    data: {
      accessToken: string;
      refreshToken: string;
      user: {
        /** @format any */
        _id: any;
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

export type PostV1AuthLoginRequestBody = (object & object) & {
  /** Email Of the User */
  email: string;
  /** Password Of the User */
  password?: string;
  method: 'email' | 'google' | 'apple' | 'facebook';
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

export type PostV1AuthRegisterRequestBody = (object & object) & {
  /**
   * Email Of the User
   * @format email
   */
  email: string;
  /** Password Of the User */
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

export type PutV1AuthPasswordChangeRequestBody = ((object & object) &
  object) & {
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

export type PostV1AuthPasswordForgetRequestBody = (object & object) & {
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

export type PostV1AuthPasswordResetRequestBody = (object & object) & {
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

export type PostV1AuthVerifyOtpRequestBody = (object & object) & {
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

export type PostV1BlogsAddRequestBody = (((object & object) & object) &
  object) & {
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

export type PutV1BlogsUpdateIdRequestBody = (((object & object) & object) &
  object) & {
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

export type PostV1ExerciseAddRequestBody = (((object & object) & object) &
  object) & {
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

export type PutV1ExerciseUpdateIdRequestBody = (((object & object) & object) &
  object) & {
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

export interface GetV1ExerciseHistorySuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      date: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      week: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      day: number;
      exercises: {
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
        }[];
        notes: string[];
        circuit: string;
        warmup: string;
        type: string;
        createdBy: string;
        exerciseId: {
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
      }[];
    }[];
  };
}

export interface GetV1ExerciseHistoryErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1ExerciseHistoryIdParameterId = string;

export interface GetV1ExerciseHistoryIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      date: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      week: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      day: number;
      exercises: {
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
        }[];
        notes: string[];
        circuit: string;
        warmup: string;
        type: string;
        createdBy: string;
        exerciseId: {
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
      }[];
    }[];
  };
}

export interface GetV1ExerciseHistoryIdErrorResponse {
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

export type PostV1FileUploadRequestBody = (object & object) & {
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

export type PostV1FileDeleteRequestBody = (object & object) & {
  /** File Urls */
  files: string[];
};

export interface PostV1IngredientsAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65b8ad573a6957125b5573b5","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}} */
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
          | 'carbs'
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

export type PostV1IngredientsAddRequestBody = ((object & object) & object) & {
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
      | 'carbs'
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
  /** @example {"message":"Ingredient Added Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65b8ad573a6957125b5573b7","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}]} */
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
          | 'carbs'
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
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65b8ad573a6957125b5573b9","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}} */
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
          | 'carbs'
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

export type PutV1IngredientsUpdateRequestBody = (((object & object) & object) &
  object) & {
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
      | 'carbs'
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

export type PostV1MealPlanUpdateRequestBody = ((object & object) & object) & {
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
              | 'carbs'
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
          | 'carbs'
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

export type PostV1ProfileUpdateRequestBody = ((object & object) & object) & {
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

export type PostV1ProgramAddRequestBody = (((object & object) & object) &
  object) & {
  /** Name of the Program */
  name: string;
  /** YYYY-MM-DDTHH:mm:ss.sssZ */
  startingDate: string;
  /** YYYY-MM-DDTHH:mm:ss.sssZ */
  endingDate: string;
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

export type GetV1ProgramScheduleParameterDay = number | string;

export type GetV1ProgramScheduleParameterWeek = number | string;

/**
 * YYYY-MM-DDTHH:mm:ss.sssZ
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetV1ProgramScheduleParameterDate = string;

export interface GetV1ProgramScheduleSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      day?: number | string;
      week?: number | string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      date?: string;
      /** @format any */
      assignedTo?: any;
      isCompleted?: boolean;
      workouts?: {
        sets: {
          reps?: string;
          weight?: string;
          rest?: string;
          time?: string;
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          setNumber?: number;
        }[];
        notes?: string[];
        circuit?: string;
        warmup?: string;
        type?: string;
        isCompleted?: boolean;
        /** @format any */
        parentWorkout?: any;
        exerciseId?: {
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
      }[];
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
      programId?: {
        /** @format any */
        _id?: any;
        /** Name of the Program */
        name?: string;
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
        /** List of assigned users */
        assignedUsers?: any[];
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
      /** @format any */
      createdBy?: any;
    }[];
  };
}

export interface GetV1ProgramScheduleErrorResponse {
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
  /** @example {"message":"Data fetched Successfully","data":[{"_id":"abc","day":1,"week":1,"date":"2024-01-30T08:03:36.134Z","assignedTo":"abc","programId":{"_id":"65b8ad583a6957125b5573c5","name":"abc","startingDate":"2024-01-30T08:03:36.134Z","endingDate":"2024-01-30T08:03:36.134Z","assignedUsers":[],"createdAt":"2024-01-30T08:03:36.134Z","updatedAt":"2024-01-30T08:03:36.134Z"},"isCompleted":false,"workouts":[{"_id":"65b8ad583a6957125b5573c6","exerciseId":"65b8ad583a6957125b5573c7","programId":"65b8ad583a6957125b5573c8","createdAt":"2024-01-30T08:03:36.134Z","updatedAt":"2024-01-30T08:03:36.134Z","sets":[{"reps":1,"weight":1,"rest":1,"time":1}],"circuit":"circuit","warmup":"warmup","createdBy":"65b8ad583a6957125b5573c9","notes":["notes"],"type":"circuit"}],"createdAt":"2024-01-30T08:03:36.134Z","updatedAt":"2024-01-30T08:03:36.134Z"}]} */
  data: {
    message: string;
    data: {
      _id?: string;
      day?: number | string;
      week?: number | string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      date?: string;
      assignedTo?: string;
      programId?: {
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
        assignedUsers: any[];
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
      workouts?: {
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
        type?: 'warmup' | 'circuit' | 'workout' | 'benchpress';
        isCompleted?: boolean;
      }[];
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

export type PutV1ProgramUpdateIdRequestBody = (((object & object) & object) &
  object) & {
  /** Name of the Program */
  name: string;
  /** YYYY-MM-DDTHH:mm:ss.sssZ */
  startingDate: string;
  /** YYYY-MM-DDTHH:mm:ss.sssZ */
  endingDate: string;
};

export type PutV1ProgramAssignIdParameterId = string;

export interface PutV1ProgramAssignIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Program Updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1ProgramAssignIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ProgramAssignIdRequestBody = (((object & object) & object) &
  object) & {
  userId: string;
};

export type DeleteV1ProgramRemoveParameterId = string;

export type DeleteV1ProgramRemoveParameterUserId = string;

export interface DeleteV1ProgramRemoveSuccessfulResponse {
  status: 'success';
  /** @example {"message":"User Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1ProgramRemoveErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

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

export type GetV1ProgramTotalIdParameterId = string;

export interface GetV1ProgramTotalIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","data":{"totalWorkouts":1}} */
  data: {
    message: string;
    data: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalWorkouts: number;
    };
  };
}

export interface GetV1ProgramTotalIdErrorResponse {
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

export type PostV1WorkoutAddRequestBody = ((object & object) & object) & {
  exerciseId: string;
  programId: string;
  notes?: string[];
  sets: {
    reps?: number | string;
    weight?: number | string;
    rest?: number | string;
    time?: number | string;
    setNumber: number | string;
  }[];
  circuit?: string;
  warmup?: string;
  type?: 'warmup' | 'circuit' | 'workout' | 'benchpress';
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
  /** @example {"message":"Data fetched Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65b8ad583a6957125b5573e2","createdBy":"65b8ad583a6957125b5573e3","exerciseId":"65b8ad583a6957125b5573e4","programId":"65b8ad583a6957125b5573e5","notes":["notes"],"sets":[{"reps":1,"weight":1,"rest":1,"time":1,"_id":"65b8ad583a6957125b5573e6","createdAt":"2024-01-30T08:03:36.365Z","updatedAt":"2024-01-30T08:03:36.365Z"}],"createdAt":"2024-01-30T08:03:36.365Z","updatedAt":"2024-01-30T08:03:36.365Z","circuit":"circuit","warmup":"warmup","type":"circuit","dateTime":{"day":1,"week":1,"date":"2024-01-30T08:03:36.365Z"},"isCompleted":false}]} */
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
      type?: 'warmup' | 'circuit' | 'workout' | 'benchpress';
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
  /** @example {"message":"Data fetched Successfully","data":{"_id":"65b8ad583a6957125b5573e8","createdBy":"65b8ad583a6957125b5573e9","exerciseId":"65b8ad583a6957125b5573ea","programId":"65b8ad583a6957125b5573eb","notes":["notes"],"sets":[{"reps":1,"weight":1,"rest":1,"time":1,"_id":"65b8ad583a6957125b5573ec","createdAt":"2024-01-30T08:03:36.369Z","updatedAt":"2024-01-30T08:03:36.369Z"}],"createdAt":"2024-01-30T08:03:36.369Z","updatedAt":"2024-01-30T08:03:36.369Z","circuit":"circuit","warmup":"warmup","type":"circuit","dateTime":{"day":1,"week":1,"date":"2024-01-30T08:03:36.369Z"},"isCompleted":false}} */
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
      type?: 'warmup' | 'circuit' | 'workout' | 'benchpress';
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

export type GetV1WorkoutFilterParameterProgramId = string;

/**
 * YYYY-MM-DDTHH:mm:ss.sssZ
 * @format date-time
 * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$
 */
export type GetV1WorkoutFilterParameterDate = string;

export type GetV1WorkoutFilterParameterWeek = number | string;

export type GetV1WorkoutFilterParameterDay = number | string;

export interface GetV1WorkoutFilterSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","data":[{"_id":"65b8ad583a6957125b5573ef","createdBy":"65b8ad583a6957125b5573f0","exerciseId":"65b8ad583a6957125b5573f1","programId":"65b8ad583a6957125b5573f2","notes":["notes"],"sets":[{"reps":1,"weight":1,"rest":1,"time":1,"_id":"65b8ad583a6957125b5573f3","createdAt":"2024-01-30T08:03:36.384Z","updatedAt":"2024-01-30T08:03:36.384Z"}],"createdAt":"2024-01-30T08:03:36.384Z","updatedAt":"2024-01-30T08:03:36.384Z","circuit":"circuit","warmup":"warmup","type":"circuit","dateTime":{"day":1,"week":1,"date":"2024-01-30T08:03:36.384Z"},"isCompleted":false}]} */
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
      type?: 'warmup' | 'circuit' | 'workout' | 'benchpress';
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

export interface GetV1WorkoutFilterErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1WorkoutUpdateIdParameterId = string;

export interface PostV1WorkoutUpdateIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Workout Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1WorkoutUpdateIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1WorkoutUpdateIdRequestBody = ((object & object) & object) & {
  notes?: string[];
  sets: {
    reps?: number | string;
    weight?: number | string;
    rest?: number | string;
    time?: number | string;
    setNumber: number | string;
  }[];
  circuit?: string;
  warmup?: string;
  type?: 'warmup' | 'circuit' | 'workout' | 'benchpress';
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

export interface PostV1WorkoutAdminAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Workout Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1WorkoutAdminAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1WorkoutAdminAddRequestBody = (((object & object) & object) &
  object) & {
  exerciseId: string;
  programId: string;
  notes?: string[];
  sets: {
    reps?: number | string;
    weight?: number | string;
    rest?: number | string;
    time?: number | string;
    setNumber: number | string;
  }[];
  circuit?: string;
  warmup?: string;
  type?: 'warmup' | 'circuit' | 'workout' | 'benchpress';
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

export type PostV1RecipeAddRequestBody = (((object & object) & object) &
  object) & {
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
            | 'carbs'
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
            | 'carbs'
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
          | 'carbs'
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

export type PutV1RecipeUpdateIdRequestBody = (((object & object) & object) &
  object) & {
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

export interface PostV1ChatSendMessagesSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Message Sent Successfully","data":{"_id":"65b8ad583a6957125b5573fe","text":"text","files":["files"],"createdAt":"2024-01-30T08:03:36.522Z","updatedAt":"2024-01-30T08:03:36.522Z","sender":"65b8ad583a6957125b5573ff"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      text?: string;
      files?: string[];
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
      /** @format any */
      sender: any;
    };
  };
}

export interface PostV1ChatSendMessagesErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ChatSendMessagesRequestBody = ((object & object) & object) & {
  to?: string;
  message?: string;
  files?: string[];
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1ChatChatParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1ChatChatParameterLimit = string;

export interface GetV1ChatChatSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65b8ad583a6957125b5573f9","text":"text","files":["files"],"createdAt":"2024-01-30T08:03:36.463Z","updatedAt":"2024-01-30T08:03:36.463Z","sender":"65b8ad583a6957125b5573fa"}]} */
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
      _id?: any;
      text?: string;
      files?: string[];
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
      /** @format any */
      sender: any;
    }[];
  };
}

export interface GetV1ChatChatErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/**
 * Page Number
 * @minLength 1
 */
export type GetV1ChatGetIdParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1ChatGetIdParameterLimit = string;

export type GetV1ChatGetIdParameterId = string;

export interface GetV1ChatGetIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Message Sent Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65b8ad583a6957125b5573fb","text":"text","files":["files"],"createdAt":"2024-01-30T08:03:36.468Z","updatedAt":"2024-01-30T08:03:36.468Z","sender":"65b8ad583a6957125b5573fc"}]} */
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
      _id?: any;
      text?: string;
      files?: string[];
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
      /** @format any */
      sender: any;
    }[];
  };
}

export interface GetV1ChatGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PutV1ContactDetailsUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1ContactDetailsUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ContactDetailsUpdateRequestBody = (((object & object) &
  object) &
  object) & {
  /**
   * @minLength 10
   * @maxLength 16
   */
  phone: string;
  /** @format email */
  email: string;
  /** @format url */
  whatsapp: string;
  /** @format url */
  twitter: string;
};

export interface GetV1ContactDetailsGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","data":{"_id":"65b8ad583a6957125b557400","phone":"1234567890","email":"example@gmail.com","whatsapp":"https://www.google.com","twitter":"https://www.google.com","createdAt":"2024-01-30T08:03:36.560Z","updatedAt":"2024-01-30T08:03:36.560Z"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      phone: string;
      email: string;
      whatsapp: string;
      twitter: string;
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
  };
}

export interface GetV1ContactDetailsGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1NotificationFcmSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Token Added Successfully","data":{"_id":"65b8ad583a6957125b557401","token":"abc","userId":"65b8ad583a6957125b557402","createdAt":"2024-01-30T08:03:36.624Z","updatedAt":"2024-01-30T08:03:36.624Z","type":"web"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      token: string;
      /** @format any */
      userId: any;
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
      type: 'web' | 'mobile';
    };
  };
}

export interface PostV1NotificationFcmErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1NotificationFcmRequestBody = ((object & object) & object) & {
  token: string;
  type: 'web' | 'mobile';
};

export type DeleteV1NotificationFcmIdParameterId = string;

export interface DeleteV1NotificationFcmIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1NotificationFcmIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1NotificationSendSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Notification sent successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1NotificationSendErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1NotificationSendRequestBody = (((object & object) & object) &
  object) & {
  body: string;
  title: string;
  image?: string;
  type: 'all' | 'individual';
  userId?: string;
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1NotificationGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1NotificationGetParameterLimit = string;

export type GetV1NotificationGetParameterSearch = string;

export interface GetV1NotificationGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65b8ad583a6957125b557403","title":"title","body":"body","userId":{"_id":"65b8ad583a6957125b557404","email":"email","emailVerified":true,"role":"admin"},"type":"all","image":"image","createdAt":"2024-01-30T08:03:36.638Z","updatedAt":"2024-01-30T08:03:36.638Z"}]} */
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
      title: string;
      body: string;
      userId?: {
        /** @format any */
        _id: any;
        email: string;
        emailVerified?: boolean;
        role?: 'admin' | 'user';
      };
      type: 'all' | 'individual';
      image?: string;
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

export interface GetV1NotificationGetErrorResponse {
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
     * @tags Exercise
     * @name GetV1ExerciseHistory
     * @summary Get all Exercise endpoint
     * @request GET:/v1/exercise/history
     * @secure
     */
    getV1ExerciseHistory: (params: RequestParams = {}) =>
      this.request<
        GetV1ExerciseHistorySuccessfulResponse,
        GetV1ExerciseHistoryErrorResponse
      >({
        path: `/v1/exercise/history`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exercise
     * @name GetV1ExerciseHistoryId
     * @summary Get all Exercise endpoint
     * @request GET:/v1/exercise/history/{id}
     * @secure
     */
    getV1ExerciseHistoryId: (
      id: GetV1ExerciseHistoryIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ExerciseHistoryIdSuccessfulResponse,
        GetV1ExerciseHistoryIdErrorResponse
      >({
        path: `/v1/exercise/history/${id}`,
        method: 'GET',
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
     * @name GetV1ProgramSchedule
     * @summary Get Program With Schedule by User endpoint
     * @request GET:/v1/program/schedule
     * @secure
     */
    getV1ProgramSchedule: (
      query?: {
        /** GET /v1/program/schedule parameter */
        day?: GetV1ProgramScheduleParameterDay;
        /** GET /v1/program/schedule parameter */
        week?: GetV1ProgramScheduleParameterWeek;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        date?: GetV1ProgramScheduleParameterDate;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProgramScheduleSuccessfulResponse,
        GetV1ProgramScheduleErrorResponse
      >({
        path: `/v1/program/schedule`,
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
     * @name PutV1ProgramAssignId
     * @summary Assign program to user endpoint
     * @request PUT:/v1/program/assign/{id}
     * @secure
     */
    putV1ProgramAssignId: (
      id: PutV1ProgramAssignIdParameterId,
      data: PutV1ProgramAssignIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1ProgramAssignIdSuccessfulResponse,
        PutV1ProgramAssignIdErrorResponse
      >({
        path: `/v1/program/assign/${id}`,
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
     * @name DeleteV1ProgramRemove
     * @summary Remove Program endpoint
     * @request DELETE:/v1/program/remove
     * @secure
     */
    deleteV1ProgramRemove: (
      query: {
        /** DELETE /v1/program/remove parameter */
        id: DeleteV1ProgramRemoveParameterId;
        /** DELETE /v1/program/remove parameter */
        userId: DeleteV1ProgramRemoveParameterUserId;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1ProgramRemoveSuccessfulResponse,
        DeleteV1ProgramRemoveErrorResponse
      >({
        path: `/v1/program/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
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
     * @tags Program
     * @name GetV1ProgramTotalId
     * @summary Get total workout by program id
     * @request GET:/v1/program/total/{id}
     * @secure
     */
    getV1ProgramTotalId: (
      id: GetV1ProgramTotalIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProgramTotalIdSuccessfulResponse,
        GetV1ProgramTotalIdErrorResponse
      >({
        path: `/v1/program/total/${id}`,
        method: 'GET',
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
     * @name GetV1WorkoutFilter
     * @summary Get Single Workout by filter endpoint
     * @request GET:/v1/workout/filter
     * @secure
     */
    getV1WorkoutFilter: (
      query?: {
        /** GET /v1/workout/filter parameter */
        programId?: GetV1WorkoutFilterParameterProgramId;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        date?: GetV1WorkoutFilterParameterDate;
        /** GET /v1/workout/filter parameter */
        week?: GetV1WorkoutFilterParameterWeek;
        /** GET /v1/workout/filter parameter */
        day?: GetV1WorkoutFilterParameterDay;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1WorkoutFilterSuccessfulResponse,
        GetV1WorkoutFilterErrorResponse
      >({
        path: `/v1/workout/filter`,
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
     * @name PostV1WorkoutUpdateId
     * @summary Updated Workout endpoint
     * @request POST:/v1/workout/update/{id}
     * @secure
     */
    postV1WorkoutUpdateId: (
      id: PostV1WorkoutUpdateIdParameterId,
      data: PostV1WorkoutUpdateIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1WorkoutUpdateIdSuccessfulResponse,
        PostV1WorkoutUpdateIdErrorResponse
      >({
        path: `/v1/workout/update/${id}`,
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
     * @tags Workout
     * @name PostV1WorkoutAdminAdd
     * @summary Add Workout Exercise endpoint
     * @request POST:/v1/workout/admin/add
     * @secure
     */
    postV1WorkoutAdminAdd: (
      data: PostV1WorkoutAdminAddRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1WorkoutAdminAddSuccessfulResponse,
        PostV1WorkoutAdminAddErrorResponse
      >({
        path: `/v1/workout/admin/add`,
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

    /**
     * No description
     *
     * @tags Chat
     * @name PostV1ChatSendMessages
     * @summary Send Message endpoint
     * @request POST:/v1/chat/send-messages
     * @secure
     */
    postV1ChatSendMessages: (
      data: PostV1ChatSendMessagesRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1ChatSendMessagesSuccessfulResponse,
        PostV1ChatSendMessagesErrorResponse
      >({
        path: `/v1/chat/send-messages`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get Chats endpoint
     *
     * @tags Chat
     * @name GetV1ChatChat
     * @summary Get Chats endpoint
     * @request GET:/v1/chat/chat
     * @secure
     */
    getV1ChatChat: (
      query?: {
        /** Page Number */
        page?: GetV1ChatChatParameterPage;
        /** Limit */
        limit?: GetV1ChatChatParameterLimit;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetV1ChatChatSuccessfulResponse, GetV1ChatChatErrorResponse>(
        {
          path: `/v1/chat/chat`,
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
     * @tags Chat
     * @name GetV1ChatGetId
     * @summary Chat endpoint
     * @request GET:/v1/chat/get/{id}
     * @secure
     */
    getV1ChatGetId: (
      id?: GetV1ChatGetIdParameterId,
      query?: {
        /** Page Number */
        page?: GetV1ChatGetIdParameterPage;
        /** Limit */
        limit?: GetV1ChatGetIdParameterLimit;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ChatGetIdSuccessfulResponse,
        GetV1ChatGetIdErrorResponse
      >({
        path: `/v1/chat/get/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact Details
     * @name PutV1ContactDetailsUpdate
     * @summary Update Contact Details
     * @request PUT:/v1/contact-details/update
     * @secure
     */
    putV1ContactDetailsUpdate: (
      data: PutV1ContactDetailsUpdateRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1ContactDetailsUpdateSuccessfulResponse,
        PutV1ContactDetailsUpdateErrorResponse
      >({
        path: `/v1/contact-details/update`,
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
     * @tags Contact Details
     * @name GetV1ContactDetailsGet
     * @summary Get contact details
     * @request GET:/v1/contact-details/get
     * @secure
     */
    getV1ContactDetailsGet: (params: RequestParams = {}) =>
      this.request<
        GetV1ContactDetailsGetSuccessfulResponse,
        GetV1ContactDetailsGetErrorResponse
      >({
        path: `/v1/contact-details/get`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name PostV1NotificationFcm
     * @summary Add Fcm Token endpoint
     * @request POST:/v1/notification/fcm
     * @secure
     */
    postV1NotificationFcm: (
      data: PostV1NotificationFcmRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1NotificationFcmSuccessfulResponse,
        PostV1NotificationFcmErrorResponse
      >({
        path: `/v1/notification/fcm`,
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
     * @tags Notification
     * @name DeleteV1NotificationFcmId
     * @summary Delete Fcm Token endpoint
     * @request DELETE:/v1/notification/fcm/{id}
     * @secure
     */
    deleteV1NotificationFcmId: (
      id: DeleteV1NotificationFcmIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1NotificationFcmIdSuccessfulResponse,
        DeleteV1NotificationFcmIdErrorResponse
      >({
        path: `/v1/notification/fcm/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name PostV1NotificationSend
     * @summary Add Notification endpoint
     * @request POST:/v1/notification/send
     * @secure
     */
    postV1NotificationSend: (
      data: PostV1NotificationSendRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1NotificationSendSuccessfulResponse,
        PostV1NotificationSendErrorResponse
      >({
        path: `/v1/notification/send`,
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
     * @tags Notification
     * @name GetV1NotificationGet
     * @summary Get Notification endpoint
     * @request GET:/v1/notification/get
     * @secure
     */
    getV1NotificationGet: (
      query?: {
        /** Page Number */
        page?: GetV1NotificationGetParameterPage;
        /** Limit */
        limit?: GetV1NotificationGetParameterLimit;
        /** GET /v1/notification/get parameter */
        search?: GetV1NotificationGetParameterSearch;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1NotificationGetSuccessfulResponse,
        GetV1NotificationGetErrorResponse
      >({
        path: `/v1/notification/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
