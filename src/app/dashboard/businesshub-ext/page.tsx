'use client'

// import { InputField } from "@/components/forms/input-field";
// import { useState } from "react";
// import axios from "axios";
//
// import toast from "react-hot-toast";
import {BusinessHubFormDrawer, BusinessHubTableExt} from "@/features/business-hub";
import {useDisclosure} from "@/hooks/use-disclosure";
// import {EllipsisIconButton} from "@/components/icon-button";
import {Button} from "@/components/button";
import {PlusCircle} from "lucide-react";

export default function BusinessHub() {
    // const [formData, setFormData] = useState({
    //     businessUnitName: "",
    //     region: "",
    //     state: "",
    //     contactPerson: ""
    // });
    //
    // const [errors, setErrors] = useState({
    //     businessUnitName: "",
    //     region: "",
    //     state: "",
    //     contactPerson: ""
    // });

    // const [loading, setLoading] = useState<boolean>(false);
    // const [message, setMessage] = useState<string>("");

    // Function to validate a single field
    // const validateField = (name: string, value: string) => {
    //     if (value.trim() === "") {
    //         return `${name} is required`;
    //     }
    //     return "";
    // };

    // Function to check if all fields are filled and valid
    // const areAllFieldsValid = () => {
    //     return (
    //         formData.businessUnitName.trim() !== "" &&
    //         formData.region.trim() !== "" &&
    //         formData.state.trim() !== "" &&
    //         formData.contactPerson.trim() !== ""
    //     );
    // };

    const {isOpen, open, close} = useDisclosure();

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    //
    //     // Validate the field in real-time
    //     const error = validateField(name, value);
    //     setErrors({ ...errors, [name]: error });
    // };

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //
    //     // Validate all fields before submission
    //     const newErrors = {
    //         businessUnitName: validateField("businessUnitName", formData.businessUnitName),
    //         region: validateField("region", formData.region),
    //         state: validateField("state", formData.state),
    //         contactPerson: validateField("contactPerson", formData.contactPerson)
    //     };
    //     setErrors(newErrors);
    //
    //     // Check if there are any errors
    //     if (Object.values(newErrors).some(error => error !== "")) {
    //         toast.error("Please fill all fields correctly.");
    //         return;
    //     }
    //
    //     setLoading(true);
    //     setMessage("");
    //
    //     try {
    //         const response = await axios.post("http://172.16.10.29:8045/api/business-units", formData);
    //         setMessage(response.data.message || "Form submitted successfully!");
    //         toast.success(message);
    //         setFormData({
    //             businessUnitName: "",
    //             region: "",
    //             state: "",
    //             contactPerson: ""
    //         });
    //         setErrors({
    //             businessUnitName: "",
    //             region: "",
    //             state: "",
    //             contactPerson: ""
    //         });
    //     } catch (e) {
    //         setMessage("Something went wrong!");
    //         toast.error(message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <>
            {/*<h1>This is Business Hub Page</h1>*/}
            {/*<div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">*/}

            {/*</div>*/}
            <div className="mt-10">
                <div className="flex justify-between">
                    <h3 className="text-3xl font-bold">Business Hub List</h3>
                    <BusinessHubFormDrawer isOpen={isOpen} close={close} open={open} triggerButton={
                        <Button size="sm" variant="secondary" startIcon={<PlusCircle className="h-5 w-5"/>} >Add Business Hub</Button>
                    }/>
                </div>
                <BusinessHubTableExt/>
            </div>
         </>
    );
}