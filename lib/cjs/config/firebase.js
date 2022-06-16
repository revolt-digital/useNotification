"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialSetup = void 0;
var app_1 = require("firebase/app");
var messaging_1 = require("firebase/messaging");
var credentialSetup = function (firebaseConfig) {
    var firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
    var messaging = (0, messaging_1.getMessaging)(firebaseApp);
    return { messaging: messaging };
};
exports.credentialSetup = credentialSetup;
