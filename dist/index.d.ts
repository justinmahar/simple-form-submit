import FormData from "form-data";
export declare const submitFormData: (formActionUrl: string, formData: FormData, method?: string, fetchOptions?: any) => Promise<any>;
export declare const submitForm: (formActionUrl: string, form: HTMLFormElement, method?: string, fetchOptions?: any) => Promise<any>;
declare const _default: {
    submitFormData: (formActionUrl: string, formData: FormData, method?: string, fetchOptions?: any) => Promise<any>;
    submitForm: (formActionUrl: string, form: HTMLFormElement, method?: string, fetchOptions?: any) => Promise<any>;
};
export default _default;
