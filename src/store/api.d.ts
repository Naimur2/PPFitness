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
  /** @example {"message":"Login Successfull","data":{"accessToken":"access token","refreshToken":"refresh token","user":{"_id":"65a50119a34e01042d19861f","email":"example@xyz.abc"}}} */
  data: {
    message: string;
    data?: {
      accessToken: string;
      refreshToken: string;
      user: {
        /** @format any */
        _id: any;
        email: string;
        name?: string;
        avatar?: string;
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
  /**
   * Email Of the User
   * @format email
   */
  email: string;
  /** Password Of the User */
  password: string;
};

export interface PostV1AuthRegisterSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Registration Successfull"} */
  data: {
    message: string;
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
   * @pattern ^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$
   */
  password: string;
  /** Name Of the User */
  name: string;
  /** Avatar Of the User */
  avatar?: string;
};

export interface GetV1AuthUserSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fwtched Successfull","user":{"_id":"65a50119a34e01042d19861e","email":"example@abc.com","name":"abc","avatar":"abc"}} */
  data: {
    message: string;
    user: {
      /** @format any */
      _id: any;
      email: string;
      name?: string;
      avatar?: string;
    };
  };
}

export interface GetV1AuthUserErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PutV1AuthUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data updated Successfull"} */
  data: {
    message: string;
  };
}

export interface PutV1AuthUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1AuthUpdateRequestBody = (object & object) & {
  name?: string;
  avatar?: string;
  password?: string;
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1AuthorGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1AuthorGetParameterLimit = string;

export interface GetV1AuthorGetSuccessfulResponse {
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
    authors: {
      /** @format any */
      _id: any;
      name?: string;
      avatar?: string;
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

export interface GetV1AuthorGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the Author */
export type GetV1AuthorGetIdParameterId = string;

export interface GetV1AuthorGetIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    author: {
      /** @format any */
      _id: any;
      name?: string;
      avatar?: string;
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

export interface GetV1AuthorGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1AuthorAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Author Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1AuthorAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthorAddRequestBody = (object & object) & {
  /** Name Of the Author */
  name: string;
  /** Avatar Of the User */
  avatar?: string;
};

/** Id of the Author */
export type DeleteV1AuthorDeleteIdParameterId = string;

export interface DeleteV1AuthorDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Author Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1AuthorDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the Blog */
export type PutV1AuthorUpdateIdParameterId = string;

export interface PutV1AuthorUpdateIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Author Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1AuthorUpdateIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1AuthorUpdateIdRequestBody = (object & object) & {
  /** Name Of the Author */
  name?: string;
  /** Avatar Of the User */
  avatar?: string;
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1BlogGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1BlogGetParameterLimit = string;

export type GetV1BlogGetParameterSearch = string;

export type GetV1BlogGetParameterTags = string[];

/** @default "blog" */
export enum GetV1BlogGetParameterType {
  Blog = 'blog',
  Study = 'study',
}

export interface GetV1BlogGetSuccessfulResponse {
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
      author?: {
        /** @format any */
        _id?: any;
        name?: string;
        avatar?: string;
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
      thumbnail?: string;
      /** @default "blog" */
      type?: 'blog' | 'study';
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

export interface GetV1BlogGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the Blog */
export type GetV1BlogGetIdParameterId = string;

export interface GetV1BlogGetIdSuccessfulResponse {
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
      author?: {
        /** @format any */
        _id?: any;
        name?: string;
        avatar?: string;
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
      thumbnail?: string;
      /** @default "blog" */
      type?: 'blog' | 'study';
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

export interface GetV1BlogGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface GetV1BlogTagsSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","tags":["tag1","tag2"]} */
  data: {
    message: string;
    tags: string[];
  };
}

export interface GetV1BlogTagsErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1BlogAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1BlogAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1BlogAddRequestBody = (object & object) & {
  /** Title Of the Blog */
  title: string;
  /** Description Of the Blog */
  description: string;
  /** Content Of the Blog */
  content: string;
  tags: string[];
  /** Author Of the Blog */
  author: string;
  /** Thumbnail Of the Blog */
  thumbnail: string;
  /** @default "blog" */
  type?: 'blog' | 'study';
};

/** Id of the Blog */
export type DeleteV1BlogDeleteIdParameterId = string;

export interface DeleteV1BlogDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1BlogDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the Blog */
export type PutV1BlogUpdateIdParameterId = string;

export interface PutV1BlogUpdateIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1BlogUpdateIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1BlogUpdateIdRequestBody = ((object & object) & object) & {
  /** Title Of the Blog */
  title?: string;
  /** Description Of the Blog */
  description?: string;
  /** Content Of the Blog */
  content?: string;
  tags?: string[];
  /** Author Of the Blog */
  author?: string;
  /** Thumbnail Of the Blog */
  thumbnail?: string;
  /** @default "blog" */
  type?: 'blog' | 'study';
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1ClientMessagesGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1ClientMessagesGetParameterLimit = string;

export interface GetV1ClientMessagesGetSuccessfulResponse {
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
    clientMessages?: {
      /** firstName Of the Client */
      firstName?: string;
      /** lastName Of the Client */
      lastName?: string;
      /** email Of the Client */
      email?: string;
      /** message Of the Client */
      message?: string;
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

export interface GetV1ClientMessagesGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the data */
export type GetV1ClientMessagesGetIdParameterId = string;

export interface GetV1ClientMessagesGetIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    clientMessage: {
      /** firstName Of the Client */
      firstName?: string;
      /** lastName Of the Client */
      lastName?: string;
      /** email Of the Client */
      email?: string;
      /** message Of the Client */
      message?: string;
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

export interface GetV1ClientMessagesGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1ClientMessagesAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Message Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1ClientMessagesAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ClientMessagesAddRequestBody = object & {
  /** firstName Of the Client */
  firstName: string;
  /** lastName Of the Client */
  lastName: string;
  /** email Of the Client */
  email: string;
  /** message Of the Client */
  message: string;
};

/** Id of the data */
export type DeleteV1ClientMessagesDeleteIdParameterId = string;

export interface DeleteV1ClientMessagesDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1ClientMessagesDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface GetV1ContactGetSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    contact?: {
      /** phone Of the Contact */
      phone?: string;
      /**
       * email Of the Contact
       * @format email
       */
      email?: string;
      /** office Address Of the Contact */
      officeAddress?: string;
      /** office Hours Of the Contact */
      officeHours?: string;
      /**
       * facebook Of the Contact
       * @format url
       */
      facebook?: string;
      /**
       * twitter Of the Contact
       * @format url
       */
      twitter?: string;
      /**
       * youtube Of the Contact
       * @format url
       */
      youtube?: string;
      /**
       * linkedin Of the Contact
       * @format url
       */
      linkedin?: string;
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

export interface GetV1ContactGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1ContactUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Message Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1ContactUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ContactUpdateRequestBody = (object & object) & {
  /** phone Of the Contact */
  phone: string;
  /**
   * email Of the Contact
   * @format email
   */
  email: string;
  /** office Address Of the Contact */
  officeAddress: string;
  /** office Hours Of the Contact */
  officeHours: string;
  /**
   * facebook Of the Contact
   * @format url
   */
  facebook: string;
  /**
   * twitter Of the Contact
   * @format url
   */
  twitter: string;
  /**
   * youtube Of the Contact
   * @format url
   */
  youtube: string;
  /**
   * linkedin Of the Contact
   * @format url
   */
  linkedin: string;
};

export interface PostV1EmailAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Email Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1EmailAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1EmailAddRequestBody = object & {
  /** email Of the Client */
  email: string;
};

/** Id of the data */
export type DeleteV1EmailDeleteIdParameterId = string;

export interface DeleteV1EmailDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Email Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1EmailDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/**
 * Page Number
 * @minLength 1
 */
export type GetV1EmailGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1EmailGetParameterLimit = string;

export interface GetV1EmailGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"emails":[{"_id":"65a5011aa34e01042d198629","email":"abc","createdAt":"2024-01-15T09:55:38.520Z","updatedAt":"2024-01-15T09:55:38.520Z"}]} */
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
    emails?: {
      /** @format any */
      _id?: any;
      email?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt?: string;
    }[];
  };
}

export interface GetV1EmailGetErrorResponse {
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

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
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
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

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
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
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
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
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
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
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

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
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
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
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
 * @title Api for aritra's Blog website
 * @version 1.1.1
 * @baseUrl http://localhost:8000
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags Authenticaion
     * @name PostV1AuthLogin
     * @summary Login endpoint
     * @request POST:/v1/auth/login
     */
    postV1AuthLogin: (data: PostV1AuthLoginRequestBody, params: RequestParams = {}) =>
      this.request<PostV1AuthLoginSuccessfulResponse, PostV1AuthLoginErrorResponse>({
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
     * @tags Authenticaion
     * @name PostV1AuthRegister
     * @summary Registration endpoint
     * @request POST:/v1/auth/register
     */
    postV1AuthRegister: (data: PostV1AuthRegisterRequestBody, params: RequestParams = {}) =>
      this.request<PostV1AuthRegisterSuccessfulResponse, PostV1AuthRegisterErrorResponse>({
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
     * @tags Authenticaion
     * @name GetV1AuthUser
     * @summary User Details endpoint
     * @request GET:/v1/auth/user
     * @secure
     */
    getV1AuthUser: (params: RequestParams = {}) =>
      this.request<GetV1AuthUserSuccessfulResponse, GetV1AuthUserErrorResponse>({
        path: `/v1/auth/user`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authenticaion
     * @name PutV1AuthUpdate
     * @summary User Details Update endpoint
     * @request PUT:/v1/auth/update
     * @secure
     */
    putV1AuthUpdate: (data: PutV1AuthUpdateRequestBody, params: RequestParams = {}) =>
      this.request<PutV1AuthUpdateSuccessfulResponse, PutV1AuthUpdateErrorResponse>({
        path: `/v1/auth/update`,
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
     * @tags Author
     * @name GetV1AuthorGet
     * @summary Get all author endpoint
     * @request GET:/v1/author/get
     * @secure
     */
    getV1AuthorGet: (
      query?: {
        /** Page Number */
        page?: GetV1AuthorGetParameterPage;
        /** Limit */
        limit?: GetV1AuthorGetParameterLimit;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetV1AuthorGetSuccessfulResponse, GetV1AuthorGetErrorResponse>({
        path: `/v1/author/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Author
     * @name GetV1AuthorGetId
     * @summary Get single author endpoint
     * @request GET:/v1/author/get/{id}
     * @secure
     */
    getV1AuthorGetId: (id: GetV1AuthorGetIdParameterId, params: RequestParams = {}) =>
      this.request<GetV1AuthorGetIdSuccessfulResponse, GetV1AuthorGetIdErrorResponse>({
        path: `/v1/author/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Author
     * @name PostV1AuthorAdd
     * @summary Add Author endpoint
     * @request POST:/v1/author/add
     * @secure
     */
    postV1AuthorAdd: (data: PostV1AuthorAddRequestBody, params: RequestParams = {}) =>
      this.request<PostV1AuthorAddSuccessfulResponse, PostV1AuthorAddErrorResponse>({
        path: `/v1/author/add`,
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
     * @tags Author
     * @name DeleteV1AuthorDeleteId
     * @summary Remove Author endpoint
     * @request DELETE:/v1/author/delete/{id}
     * @secure
     */
    deleteV1AuthorDeleteId: (id: DeleteV1AuthorDeleteIdParameterId, params: RequestParams = {}) =>
      this.request<DeleteV1AuthorDeleteIdSuccessfulResponse, DeleteV1AuthorDeleteIdErrorResponse>({
        path: `/v1/author/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Author
     * @name PutV1AuthorUpdateId
     * @summary Update Author endpoint
     * @request PUT:/v1/author/update/{id}
     * @secure
     */
    putV1AuthorUpdateId: (
      id: PutV1AuthorUpdateIdParameterId,
      data: PutV1AuthorUpdateIdRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<PutV1AuthorUpdateIdSuccessfulResponse, PutV1AuthorUpdateIdErrorResponse>({
        path: `/v1/author/update/${id}`,
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
     * @tags Blog
     * @name GetV1BlogGet
     * @summary Get all blog endpoint
     * @request GET:/v1/blog/get
     */
    getV1BlogGet: (
      query?: {
        /** Page Number */
        page?: GetV1BlogGetParameterPage;
        /** Limit */
        limit?: GetV1BlogGetParameterLimit;
        /** GET /v1/blog/get parameter */
        search?: GetV1BlogGetParameterSearch;
        /** GET /v1/blog/get parameter */
        tags?: GetV1BlogGetParameterTags;
        /** GET /v1/blog/get parameter */
        type?: GetV1BlogGetParameterType;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetV1BlogGetSuccessfulResponse, GetV1BlogGetErrorResponse>({
        path: `/v1/blog/get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogGetId
     * @summary Get single blog endpoint
     * @request GET:/v1/blog/get/{id}
     */
    getV1BlogGetId: (id: GetV1BlogGetIdParameterId, params: RequestParams = {}) =>
      this.request<GetV1BlogGetIdSuccessfulResponse, GetV1BlogGetIdErrorResponse>({
        path: `/v1/blog/get/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogTags
     * @summary Get all blog tags endpoint
     * @request GET:/v1/blog/tags
     */
    getV1BlogTags: (params: RequestParams = {}) =>
      this.request<GetV1BlogTagsSuccessfulResponse, GetV1BlogTagsErrorResponse>({
        path: `/v1/blog/tags`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name PostV1BlogAdd
     * @summary Add Blog endpoint
     * @request POST:/v1/blog/add
     * @secure
     */
    postV1BlogAdd: (data: PostV1BlogAddRequestBody, params: RequestParams = {}) =>
      this.request<PostV1BlogAddSuccessfulResponse, PostV1BlogAddErrorResponse>({
        path: `/v1/blog/add`,
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
     * @name DeleteV1BlogDeleteId
     * @summary Remove Blog endpoint
     * @request DELETE:/v1/blog/delete/{id}
     * @secure
     */
    deleteV1BlogDeleteId: (id: DeleteV1BlogDeleteIdParameterId, params: RequestParams = {}) =>
      this.request<DeleteV1BlogDeleteIdSuccessfulResponse, DeleteV1BlogDeleteIdErrorResponse>({
        path: `/v1/blog/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name PutV1BlogUpdateId
     * @summary Update Blog endpoint
     * @request PUT:/v1/blog/update/{id}
     * @secure
     */
    putV1BlogUpdateId: (
      id: PutV1BlogUpdateIdParameterId,
      data: PutV1BlogUpdateIdRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<PutV1BlogUpdateIdSuccessfulResponse, PutV1BlogUpdateIdErrorResponse>({
        path: `/v1/blog/update/${id}`,
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
     * @tags ClientMessage
     * @name GetV1ClientMessagesGet
     * @summary Get all client message endpoint
     * @request GET:/v1/clientMessages/get
     * @secure
     */
    getV1ClientMessagesGet: (
      query?: {
        /** Page Number */
        page?: GetV1ClientMessagesGetParameterPage;
        /** Limit */
        limit?: GetV1ClientMessagesGetParameterLimit;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetV1ClientMessagesGetSuccessfulResponse, GetV1ClientMessagesGetErrorResponse>({
        path: `/v1/clientMessages/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClientMessage
     * @name GetV1ClientMessagesGetId
     * @summary Get single client message endpoint
     * @request GET:/v1/clientMessages/get/{id}
     * @secure
     */
    getV1ClientMessagesGetId: (
      id: GetV1ClientMessagesGetIdParameterId,
      params: RequestParams = {}
    ) =>
      this.request<
        GetV1ClientMessagesGetIdSuccessfulResponse,
        GetV1ClientMessagesGetIdErrorResponse
      >({
        path: `/v1/clientMessages/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClientMessage
     * @name PostV1ClientMessagesAdd
     * @summary Add CLient MEssagage endpoint
     * @request POST:/v1/clientMessages/add
     */
    postV1ClientMessagesAdd: (
      data: PostV1ClientMessagesAddRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<PostV1ClientMessagesAddSuccessfulResponse, PostV1ClientMessagesAddErrorResponse>(
        {
          path: `/v1/clientMessages/add`,
          method: 'POST',
          body: data,
          type: ContentType.Json,
          format: 'json',
          ...params,
        }
      ),

    /**
     * No description
     *
     * @tags ClientMessage
     * @name DeleteV1ClientMessagesDeleteId
     * @summary Remove Client Message endpoint
     * @request DELETE:/v1/clientMessages/delete/{id}
     * @secure
     */
    deleteV1ClientMessagesDeleteId: (
      id: DeleteV1ClientMessagesDeleteIdParameterId,
      params: RequestParams = {}
    ) =>
      this.request<
        DeleteV1ClientMessagesDeleteIdSuccessfulResponse,
        DeleteV1ClientMessagesDeleteIdErrorResponse
      >({
        path: `/v1/clientMessages/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name GetV1ContactGet
     * @summary Get contact endpoint
     * @request GET:/v1/contact/get
     */
    getV1ContactGet: (params: RequestParams = {}) =>
      this.request<GetV1ContactGetSuccessfulResponse, GetV1ContactGetErrorResponse>({
        path: `/v1/contact/get`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name PostV1ContactUpdate
     * @summary Update Contact endpoint
     * @request POST:/v1/contact/update
     * @secure
     */
    postV1ContactUpdate: (data: PostV1ContactUpdateRequestBody, params: RequestParams = {}) =>
      this.request<PostV1ContactUpdateSuccessfulResponse, PostV1ContactUpdateErrorResponse>({
        path: `/v1/contact/update`,
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
     * @tags Emails
     * @name PostV1EmailAdd
     * @summary Add CLient Email endpoint
     * @request POST:/v1/email/add
     */
    postV1EmailAdd: (data: PostV1EmailAddRequestBody, params: RequestParams = {}) =>
      this.request<PostV1EmailAddSuccessfulResponse, PostV1EmailAddErrorResponse>({
        path: `/v1/email/add`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Emails
     * @name DeleteV1EmailDeleteId
     * @summary Delete email endpoint
     * @request DELETE:/v1/email/delete/{id}
     * @secure
     */
    deleteV1EmailDeleteId: (id: DeleteV1EmailDeleteIdParameterId, params: RequestParams = {}) =>
      this.request<DeleteV1EmailDeleteIdSuccessfulResponse, DeleteV1EmailDeleteIdErrorResponse>({
        path: `/v1/email/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Emails
     * @name GetV1EmailGet
     * @summary Get all client emails endpoint
     * @request GET:/v1/email/get
     * @secure
     */
    getV1EmailGet: (
      query?: {
        /** Page Number */
        page?: GetV1EmailGetParameterPage;
        /** Limit */
        limit?: GetV1EmailGetParameterLimit;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetV1EmailGetSuccessfulResponse, GetV1EmailGetErrorResponse>({
        path: `/v1/email/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
