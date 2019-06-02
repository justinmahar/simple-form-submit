export declare type FormField = {
    nameAttribute: string;
    value: any;
};
declare const submitForm: (gformActionUrl: string, formFields: FormField | FormField[], handleErrors?: boolean) => Promise<unknown>;
export default submitForm;
