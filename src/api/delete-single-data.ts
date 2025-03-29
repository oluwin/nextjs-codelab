import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useToast } from '@/components/ui';

export async function deleteSingleData(
  url: string,
  id: number
) {
  return await axios.delete(`${url}/${id}`);
}

export const useDeleteSingleData = (url: string) => {
  const { toast } = useToast();
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getData', url] });
      toast({
        title: 'Success',
        variant: 'default',
        description: "Record deleted successfully",
      });
    },
    mutationFn: (id: number) => deleteSingleData(url, id),
  });
};