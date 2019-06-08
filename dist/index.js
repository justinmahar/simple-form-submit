"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var form_data_1 = __importDefault(require("form-data"));
var DEFAULT_METHOD = "POST";
exports.submitFormData = function (formActionUrl, formData, method, fetchOptions) {
    if (method === void 0) { method = DEFAULT_METHOD; }
    if (fetchOptions === void 0) { fetchOptions = {}; }
    return new Promise(function (resolve, reject) {
        var optionsToUse = __assign({ method: method, body: formData }, fetchOptions);
        fetch(formActionUrl, optionsToUse)
            .then(function (response) {
            resolve(response);
        })
            .catch(function (err) {
            reject(err);
        });
    });
};
exports.submitForm = function (formActionUrl, form, method, fetchOptions) {
    if (method === void 0) { method = DEFAULT_METHOD; }
    if (fetchOptions === void 0) { fetchOptions = {}; }
    return exports.submitFormData(formActionUrl, new form_data_1.default(form), method, fetchOptions);
};
exports.default = {
    submitFormData: exports.submitFormData,
    submitForm: exports.submitForm
};
