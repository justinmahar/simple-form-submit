export declare type GFormData = {
    nameAttribute: string;
    value: any;
};
declare const gformsSubmit: (gformActionUrl: string, gformDatas: GFormData | GFormData[], handleErrors?: boolean) => Promise<unknown>;
export default gformsSubmit;
