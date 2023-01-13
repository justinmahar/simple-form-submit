"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm = exports.submitFormData = exports.DEFAULT_METHOD = void 0;
const form_data_1 = __importDefault(require("form-data"));
exports.DEFAULT_METHOD = 'POST';
const submitFormData = (formActionUrl, formData, fetchRequestInit = {}) => {
    return fetch(formActionUrl, Object.assign({ 
        // Fetch can accept FormData as a body. See: https://javascript.info/formdata
        body: formData, method: exports.DEFAULT_METHOD }, fetchRequestInit));
};
exports.submitFormData = submitFormData;
const submitForm = (formActionUrl, form, fetchRequestInit = {}) => {
    return (0, exports.submitFormData)(formActionUrl, new form_data_1.default(form), fetchRequestInit);
};
exports.submitForm = submitForm;
exports.default = {
    submitFormData: exports.submitFormData,
    submitForm: exports.submitForm,
};
