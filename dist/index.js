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
exports.submitFormData = function (formActionUrl, formData, fetchRequestInit) {
    if (fetchRequestInit === void 0) { fetchRequestInit = {}; }
    return new Promise(function (resolve, reject) {
        var mergedFetchRequestInit = __assign({ body: formData, method: DEFAULT_METHOD }, fetchRequestInit);
        fetch(formActionUrl, mergedFetchRequestInit)
            .then(function (response) {
            resolve(response);
        })
            .catch(function (err) {
            reject(err);
        });
    });
};
exports.submitForm = function (formActionUrl, form, fetchRequestInit) {
    if (fetchRequestInit === void 0) { fetchRequestInit = {}; }
    return exports.submitFormData(formActionUrl, new form_data_1.default(form), fetchRequestInit);
};
exports.default = {
    submitFormData: exports.submitFormData,
    submitForm: exports.submitForm
};
