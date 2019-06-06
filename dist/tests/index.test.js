"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var gformActionUrl = "https://docs.google.com/forms";
test("it can submit form data for a single form data", function () {
    var emailFormData = {
        nameAttribute: "emailAddress",
        value: "test@example.com"
    };
    expect.assertions(1);
    return index_1.default(gformActionUrl, emailFormData)
        .then(function () {
        expect(true).toBeTruthy();
    })
        .catch(function (err) {
        fail(err);
    });
});
test("it can submit form data for an array of form datas", function () {
    var emailFormData = {
        nameAttribute: "emailAddress",
        value: "test@example.com"
    };
    var messageFormData = {
        nameAttribute: "entry.12345678901",
        value: "Hello! This is my message."
    };
    var formDatas = [emailFormData, messageFormData];
    expect.assertions(1);
    return index_1.default(gformActionUrl, formDatas)
        .then(function () {
        expect(true).toBeTruthy();
    })
        .catch(function (err) {
        fail(err);
    });
});
test("it can handle errors when using a proxy", function () {
    var emailFormData = {
        nameAttribute: "emailAddress",
        value: "test@example.com"
    };
    var messageFormData = {
        nameAttribute: "entry.12345678901",
        value: "Hello! This is my message."
    };
    var formDatas = [emailFormData, messageFormData];
    expect.assertions(1);
    return index_1.default(gformActionUrl, formDatas, true)
        .then(function () {
        fail("This should not have succeeded.");
    })
        .catch(function (err) {
        expect(true).toBeTruthy();
    });
});
