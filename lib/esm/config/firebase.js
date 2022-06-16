import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
export var credentialSetup = function (firebaseConfig) {
    var firebaseApp = initializeApp(firebaseConfig);
    var messaging = getMessaging(firebaseApp);
    return { messaging: messaging };
};
