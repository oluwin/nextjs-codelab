'use client'

import { InputField } from "@/components/forms/input-field";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {BusinessHubTable} from "@/features/business-hub";
import useCounterStore from "@/stores/counter-store";

export default function BusinessHub() {
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

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    // Function to validate a single field
    const validateField = (name: string, value: string) => {
        if (value.trim() === "") {
            return `${name} is required`;
        }
        return "";
    };

    // Function to check if all fields are filled and valid
    const areAllFieldsValid = () => {
        return (
            formData.businessUnitName.trim() !== "" &&
            formData.region.trim() !== "" &&
            formData.state.trim() !== "" &&
            formData.contactPerson.trim() !== ""
        );
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        // Validate the field in real-time
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validate all fields before submission
        const newErrors = {
            businessUnitName: validateField("businessUnitName", formData.businessUnitName),
            region: validateField("region", formData.region),
            state: validateField("state", formData.state),
            contactPerson: validateField("contactPerson", formData.contactPerson)
        };
        setErrors(newErrors);

        // Check if there are any errors
        if (Object.values(newErrors).some(error => error !== "")) {
            toast.error("Please fill all fields correctly.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post("http://172.16.10.29:8045/api/business-units", formData);
            setMessage(response.data.message || "Form submitted successfully!");
            toast.success(message);
            setFormData({
                businessUnitName: "",
                region: "",
                state: "",
                contactPerson: ""
            });
            setErrors({
                businessUnitName: "",
                region: "",
                state: "",
                contactPerson: ""
            });
        } catch (e) {
            setMessage("Something went wrong!");
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    const { count, increment } = useCounterStore();

    return (
        <>
            <h1>This is Business Hub Page</h1>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
                <form onSubmit={handleSubmit}
                      className="bg-white ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl md:col-span-2">
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid grid-cols-2 space-x-4">
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
                    <div
                        className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <Button
                            type="submit"
                            disabled={loading || !areAllFieldsValid()}
                            className={`rounded-md px-3 py-2 cursor-pointer text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${
                                loading || !areAllFieldsValid()
                                    ? "bg-black cursor-not-allowed opacity-50" // Disabled styles
                                    : "bg-green-600 hover:bg-green-500" // Enabled styles
                            }`}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </Button>
                    </div>
                </form>
            </div>
            <BusinessHubTable/>

            <div className="flex grid grid-cols-2">
                <div><Button variant="link" className="mt-5" onClick={increment}>Increment</Button></div>
                <div><p className="text-3xl">Counter: {count}</p></div>
            </div>
        </>
    );
}