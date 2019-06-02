"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var submitForm = function (gformActionUrl, formFields, handleErrors) {
    if (handleErrors === void 0) { handleErrors = false; }
    return new Promise(function (resolve, reject) {
        // Convert to an array if it's a single form field.
        if (!Array.isArray(formFields)) {
            formFields = [formFields];
        }
        var formData = new FormData();
        formFields.forEach(function (formField) {
            formData.append(formField.nameAttribute, formField.value);
        });
        axios_1.default.post(gformActionUrl, formData)
            .then(function () {
            resolve();
        })
            .catch(function (err) {
            if (handleErrors) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.default = submitForm;
