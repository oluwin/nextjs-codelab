import axios from "axios";
import {API_URL} from "@/config";
import {useQuery} from "@tanstack/react-query";

// export const getBusinessHubs = async () => {
//     const response = await axios.get(`${API_URL}/business-units`)
//     return response.data;
// }

export const getBusinessHubs = async () => {
    const response = await axios.get(`/business-units`)
    return response.data;
}

export const useGetBusinessHubs = () => {
    return useQuery({
        queryKey: ['getBusinessHub'],
        queryFn: async () => await getBusinessHubs(),
    });
}