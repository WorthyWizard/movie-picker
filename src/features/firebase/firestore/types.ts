import { FirebaseError } from "firebase/app";
import { DocumentData, QuerySnapshot } from "firebase/firestore";

export type SubscribeConnectCallback = (
  data: QuerySnapshot<DocumentData>
) => void;
export type SubscribeErrorCallback = (error: FirebaseError) => void;
export type SubscribeCompletionCallback = () => void;
