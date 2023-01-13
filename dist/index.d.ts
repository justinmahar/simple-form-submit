import FormData from 'form-data';
export declare const DEFAULT_METHOD = "POST";
export declare const submitFormData: (formActionUrl: string, formData: FormData, fetchRequestInit?: RequestInit) => Promise<Response>;
export declare const submitForm: (formActionUrl: string, form: HTMLFormElement, fetchRequestInit?: RequestInit) => Promise<Response>;
declare const _default: {
    submitFormData: (formActionUrl: string, formData: FormData, fetchRequestInit?: RequestInit) => Promise<Response>;
    submitForm: (formActionUrl: string, form: HTMLFormElement, fetchRequestInit?: RequestInit) => Promise<Response>;
};
export default _default;
