import { Button } from "@/components/button";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import {FormDrawer} from "@/components/forms/form-drawer";
import {InputField} from "@/components/forms/input-field";
import {useEffect, useState} from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
import {useCreateOrUpdateBusinessHub} from "@/features/business-hub/api";


interface BusinessHubDrawerProps {
    businessHub?: any
    title?: string
    triggerButton?: any
    isOpen?: any
    close?: any
    open?: any
}

export function BusinessHubFormDrawer({
                                          businessHub,
                                          title,
                                          triggerButton,
                                          isOpen,
                                          close,
                                          open
                                      }: BusinessHubDrawerProps){

    const mutation = useCreateOrUpdateBusinessHub(businessHub?.businessUnitId);

    const [formData, setFormData] = useState({
        businessUnitName: "",
        region: "",
        state: "",
        contactPerson: ""
    });

    const [errors, setErrors] = useState({
        businessUnitName: "",
        region: "",
        state: "",
        contactPerson: ""
    });

    // const [loading, setLoading] = useState<boolean>(false);
    // const [message, setMessage] = useState<string>("");

    useEffect(() => {
        if(businessHub){
            setFormData({
                businessUnitName: businessHub.businessUnitName || "",
                region: businessHub.region || "",
                state: businessHub.state || "",
                contactPerson: businessHub.contactPerson || "",
            });
        }
    }, [businessHub]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        // Validate the field in real-time
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await mutation.mutateAsync({
            businessUnitName: formData.businessUnitName,
            region: formData.region,
            state: formData.state,
            contactPerson: formData.contactPerson,
        })

        // Validate all fields before submission
        // const newErrors = {
        //     businessUnitName: validateField("businessUnitName", formData.businessUnitName),
        //     region: validateField("region", formData.region),
        //     state: validateField("state", formData.state),
        //     contactPerson: validateField("contactPerson", formData.contactPerson)
        // };
        // setErrors(newErrors);
        //
        // // Check if there are any errors
        // if (Object.values(newErrors).some(error => error !== "")) {
        //     toast.error("Please fill all fields correctly.");
        //     return;
        // }
        //
        // setLoading(true);
        // setMessage("");
        //
        // try {
        //     const response = await axios.post("http://172.16.10.29:8045/api/business-units", formData);
        //     setMessage(response.data.message || "Form submitted successfully!");
        //     toast.success(message);
        //     setFormData({
        //         businessUnitName: "",
        //         region: "",
        //         state: "",
        //         contactPerson: ""
        //     });
        //     setErrors({
        //         businessUnitName: "",
        //         region: "",
        //         state: "",
        //         contactPerson: ""
        //     });
        // } catch (e) {
        //     setMessage("Something went wrong!");
        //     toast.error(message);
        // } finally {
        //     setLoading(false);
        // }
    };

    // Function to validate a single field
    const validateField = (name: string, value: string) => {
        if (value.trim() === "") {
            return `${name} is required`;
        }
        return "";
    };

    // Function to check if all fields are filled and valid
    // const areAllFieldsValid = () => {
    //     return (
    //         formData.businessUnitName.trim() !== "" &&
    //         formData.region.trim() !== "" &&
    //         formData.state.trim() !== "" &&
    //         formData.contactPerson.trim() !== ""
    //     );
    // };


    return (
        <FormDrawer
            title={businessHub?.businessUnitId ? "Edit business Hub" : "Add business Hub"}
            isDone={false}
            isOpen={isOpen}
            triggerButton={triggerButton}
            close={close}
            open={open}
            submitButton={
                <Button
                    form="business-hub-form"
                    type="submit"
                    size="sm"
                    variant="primary"
                    isLoading={mutation.isPending}
                >
                    Submit
                </Button>
            }
        >
            {/*<>*/}
                    <form onSubmit={handleSubmit} id='business-hub-form' className="bg-white ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl md:col-span-2">
                        <div className="px-4 py-6 sm:p-8">
                            {/*<div className="grid grid-cols-2 space-x-4">*/}
                            <div className="space-x-4">
                                <InputField
                                    name="businessUnitName"
                                    type="text"
                                    label="Business Unit Name"
                                    value={formData.businessUnitName}
                                    onChange={handleChange}
                                    required={true}
                                    error={errors.businessUnitName}
                                />

                                <InputField
                                    name="region"
                                    type="text"
                                    label="Region"
                                    value={formData.region}
                                    onChange={handleChange}
                                    required={true}
                                    error={errors.region}
                                />

                                <InputField
                                    name="state"
                                    type="text"
                                    label="State"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required={true}
                                    error={errors.state}
                                />

                                <InputField
                                    name="contactPerson"
                                    type="text"
                                    label="Contact Person"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                    required={true}
                                    error={errors.contactPerson}
                                />
                            </div>
                        </div>
                        {/*<div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">*/}
                        {/*    <button type="button" className="text-sm/6 font-semibold text-gray-900">*/}
                        {/*        Cancel*/}
                        {/*    </button>*/}
                        {/*    <Button*/}
                        {/*        type="submit"*/}
                        {/*        disabled={loading || !areAllFieldsValid()}*/}
                        {/*        className={`rounded-md px-3 py-2 cursor-pointer text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${*/}
                        {/*            loading || !areAllFieldsValid()*/}
                        {/*                ? "bg-black cursor-not-allowed opacity-50" // Disabled styles*/}
                        {/*                : "bg-green-600 hover:bg-green-500" // Enabled styles*/}
                        {/*        }`}*/}
                        {/*    >*/}
                        {/*        {loading ? "Submitting..." : "Submit"}*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </form>
            {/*</>*/}
        </FormDrawer>
    )
}