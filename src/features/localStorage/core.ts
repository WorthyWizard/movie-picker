class LocalStorageItem<V extends any, K extends string = string> {
  constructor(private key: K, private value: V) {
    const storageItem = this.get();
    if (!storageItem) {
      this.set(this.value);
    }
  }

  get() {
    return JSON.parse(localStorage.getItem(this.key)!) as V;
  }

  set(value: V) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  remove() {
    localStorage.removeItem(this.key);
  }

  clear() {
    localStorage.clear();
  }
}

export default LocalStorageItem;
