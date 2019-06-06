"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var form_data_1 = __importDefault(require("form-data"));
var gformsSubmit = function (gformActionUrl, gformDatas, handleErrors) {
    if (handleErrors === void 0) { handleErrors = false; }
    return new Promise(function (resolve, reject) {
        // Convert to an array if it's a single form field.
        if (!Array.isArray(gformDatas)) {
            gformDatas = [gformDatas];
        }
        var xhrFormData = new form_data_1.default();
        gformDatas.forEach(function (gformData) {
            xhrFormData.append(gformData.nameAttribute, gformData.value);
        });
        axios_1.default.post(gformActionUrl, xhrFormData)
            .then(function () {
            resolve();
        })
            .catch(function (err) {
            if (handleErrors) {
                reject(err);
                console.log("Error:", err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.default = gformsSubmit;
