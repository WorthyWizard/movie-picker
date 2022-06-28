import { Firebase } from "@/features/firebase";
import { LocalStorageItem } from "@/features/localStorage";
import { WatchlistLSMovie } from "@/types/movie/transformed";

export interface GlobalContextValue {
  watchlistLS: LocalStorageItem<WatchlistLSMovie[]>;
  watchlistDB: Firebase;
}
