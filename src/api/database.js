import { axiosDatabase } from './axiosInstances';

class Database {
  static postWatchlistMovie(data) {
    return axiosDatabase.post(`/watchlist.json`, JSON.stringify(data));
  }
  static getWatchlistMovies() {
    return axiosDatabase.get(`/watchlist.json`);
  }
  static deleteWatchlistMovie(id) {
    return axiosDatabase.delete(`/watchlist/${id}.json`);
  }
}

export default Database;