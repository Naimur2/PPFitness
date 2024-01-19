import { PutV1AuthorUpdateIdRequestBody } from '@/store/api';

export type TPaginatedInput = {
  page: number;
  limit: number;
};

export interface IUpdateAuthorBody extends PutV1AuthorUpdateIdRequestBody {
  id: string;
}
