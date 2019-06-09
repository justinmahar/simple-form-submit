import FormData from "form-data";
export declare const submitFormData: (formActionUrl: string, formData: FormData, fetchRequestInit?: RequestInit) => Promise<any>;
export declare const submitForm: (formActionUrl: string, form: HTMLFormElement, fetchRequestInit?: RequestInit) => Promise<any>;
declare const _default: {
    submitFormData: (formActionUrl: string, formData: FormData, fetchRequestInit?: RequestInit) => Promise<any>;
    submitForm: (formActionUrl: string, form: HTMLFormElement, fetchRequestInit?: RequestInit) => Promise<any>;
};
export default _default;
