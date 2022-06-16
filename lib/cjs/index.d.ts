import { firebaseConfig } from "./config/types";
declare const useNotification: (firebaseConfig: firebaseConfig, vapidKey: string) => {
    suscribe: () => Promise<string>;
    unsuscribe: () => Promise<boolean>;
    onMessageListener: () => import("@firebase/util").Unsubscribe;
};
export default useNotification;
