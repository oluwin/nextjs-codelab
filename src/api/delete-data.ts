import { useMutation } from '@tanstack/react-query'
import { axios } from '@/lib/axios'
import { queryClient } from '@/lib/react-query'
import { useToast } from '@/components/ui'

type UseDeleteDataOption = {
  data: any
  url: string
}

export async function deleteData({ data, url }: UseDeleteDataOption) {
  return await axios.delete(`${url}`, { data })
}

export const useDeleteData = () => {
  const { toast } = useToast()
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getData'],
      })
      toast({
        title: 'Success',
        variant: 'default',
        description: "Record deleted successfully",
      });
    },
    mutationFn: deleteData,
  })
}
