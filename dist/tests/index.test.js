"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
test("it can submit form data for a single form field", function () {
    var emailFormField = {
        nameAttribute: "emailAddress",
        value: "text@example.com"
    };
    expect.assertions(1);
    index_1.default("abc123", emailFormField)
        .then(function () {
        expect(true).toBeTruthy();
    })
        .catch(function (err) {
        console.error(err);
        fail();
    });
});
test("it can submit form data for an array of form fields", function () {
    var emailFormField = {
        nameAttribute: "emailAddress",
        value: "text@example.com"
    };
    var messageFormField = {
        nameAttribute: "message",
        value: "This is a message."
    };
    var formFields = [emailFormField, messageFormField];
    expect.assertions(1);
    index_1.default("abc123", formFields)
        .then(function () {
        expect(true).toBeTruthy();
    })
        .catch(function () {
        fail();
    });
});
