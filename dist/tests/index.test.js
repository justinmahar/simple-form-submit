"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importStar(require("../index"));
var formActionUrl = "https://docs.google.com/forms";
test("it can submit form data (unimplemented!)", function () {
    // const emailFormData: GFormData = {
    //   nameAttribute: "emailAddress",
    //   value: "test@example.com"
    // };
    // expect.assertions(1);
    // return gformsSubmit(gformActionUrl, emailFormData)
    //   .then(() => {
    //     expect(true).toBeTruthy();
    //   })
    //   .catch(err => {
    //     fail(err);
    //   });
    expect(formActionUrl).toBeTruthy();
    expect(index_1.default).toBeTruthy();
    expect(index_1.submitFormData).toBeTruthy();
});
