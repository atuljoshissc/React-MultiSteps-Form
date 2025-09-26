export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    state: string;
}

export interface StepProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;

}

export interface ReviewProps {
    formData: FormData;
}
