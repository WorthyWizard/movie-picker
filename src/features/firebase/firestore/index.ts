import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { firestore } from "../init";

import {
  SubscribeCompletionCallback,
  SubscribeConnectCallback,
  SubscribeErrorCallback,
} from "./types";

export class Firebase<P extends string = string> {
  constructor(private path: P) {}

  async add(data: any, ...pathSegments: string[]) {
    try {
      return await addDoc(
        collection(firestore, this.path, ...pathSegments),
        data
      );
    } catch (e) {
      throw new Error("Error while adding the document!");
    }
  }

  async remove(...pathSegments: string[]) {
    try {
      await deleteDoc(doc(firestore, this.path, ...pathSegments));
    } catch (e) {
      throw new Error("Error while removing the document!");
    }
  }

  async getAll(...pathSegments: string[]) {
    const watchlistRef = collection(firestore, this.path, ...pathSegments);
    const order = orderBy("addingDate");
    const watchlistQuery = query(watchlistRef, order);
    try {
      return await getDocs(watchlistQuery);
    } catch (e) {
      throw new Error("Error while getting the documents!");
    }
  }

  async get(...pathSegments: string[]) {
    try {
      const docRef = doc(firestore, this.path, ...pathSegments);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap;
      } else {
        return null;
      }
    } catch (e) {
      throw new Error("Error while getting the document!");
    }
  }

  async subscribe(
    onConnect: SubscribeConnectCallback,
    onError?: SubscribeErrorCallback,
    onCompletion?: SubscribeCompletionCallback
  ) {
    const watchlistRef = collection(firestore, this.path);
    const order = orderBy("addingDate");
    const watchlistQuery = query(watchlistRef, order);
    return onSnapshot(watchlistQuery, onConnect, onError, onCompletion);
  }
}
