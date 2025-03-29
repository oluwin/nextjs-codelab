import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';

type UseGetDataOptions = {
  search?: string;
  size?: number;
  page?: number;
  type?: string;
  status?: string;
  url: string;
  additionalQueryParams?: any;
  enabled?: boolean;
};

export async function getData({
  size = 1000,
  search = '',
  page = 1,
  status = '',
  url,
  additionalQueryParams = {},
}: UseGetDataOptions): Promise<any> {
  const params = new URLSearchParams();

  params.append('page', page.toString());
  params.append('size', size.toString());

  if (search) {
    params.append('search', search);
  }

  if (status) {
    params.append('status', status);
  }

  Object.keys(additionalQueryParams).forEach((key) => {
    params.append(key, additionalQueryParams[key]);
  });
  return await axios.get(`${url}?${params}`);
}

export const useGetData = ({
  url,
  size,
  search,
  page,
  additionalQueryParams,
  enabled = true,
}: UseGetDataOptions) => {
  return useQuery({
    queryKey: [
      'getData',
      url,
      size,
      search,
      page,
      additionalQueryParams,
    ],
    enabled,
    queryFn: () =>
      getData({
        size,
        search,
        page,
        url,
        additionalQueryParams,
      }),
  });
};
