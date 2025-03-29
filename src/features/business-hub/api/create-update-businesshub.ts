import {useMutation} from '@tanstack/react-query';
import {GetBusinessHubResponse} from "@/features/business-hub";
import { axios } from '@/lib/axios';
import { QueryClient } from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import { queryClient } from '@/lib/react-query';


export const createOrUpdateBusinessHub =(
    businessHubId:string | null  |  undefined,
    data:any
):Promise<GetBusinessHubResponse> => {
    if(businessHubId)
    { return axios.put(`/business-units/${businessHubId}`,
        data
    );

    }
    return axios.post(`business-units`,data)
}

export const useCreateOrUpdateBusinessHub=(
    businessHubId:string | null = null,
) =>{
    return useMutation({
        onSuccess:()=> {
            queryClient.invalidateQueries({
                queryKey:[],
            });
            const msg= businessHubId ?
                'BusinessHub updated successfully':
                'BusinessHub created successfully'

            toast.success(msg)
        },
        onError:()=>{
            toast.error('Something unexpected happened')
        },
        mutationFn:(data:any)=> {
            console.log('Data sent to mutation',data)
            return createOrUpdateBusinessHub(businessHubId,data)
        }

    })
}


