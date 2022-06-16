import { firebaseConfig } from "./types";
export declare const credentialSetup: (firebaseConfig: firebaseConfig) => {
    messaging: import("@firebase/messaging").Messaging;
};
