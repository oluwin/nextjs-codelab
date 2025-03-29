
import {queryClient} from "@/lib/react-query";
import {GetBusinessHubResponse} from "@/features/business-hub";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {axios} from "@/lib/axios";

interface BuProps{
    businessUnitId: number
}

export const deleteBusinessHub = async({businessUnitId}: BuProps):Promise<GetBusinessHubResponse> => {
    return axios.delete(`/business-units/${businessUnitId}`)
}

export const useDeleteBusinessHub =  () => {
    return useMutation({
        onSuccess:  () => {
            queryClient.invalidateQueries({queryKey: ['getBusinessHub']});
            toast.success("Business Hub deleted successfully!");
        },
        mutationFn: deleteBusinessHub,
    })
}