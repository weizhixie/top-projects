import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.count = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  getBucket(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    return this.buckets[index];
  }

  set(key, value) {
    const bucket = this.getBucket(key);

    if (bucket.length === 0) {
      const list = new LinkedList();
      bucket.push(list);
      list.append({ key, value });
      this.count++;
    } else {
      const keyExists = bucket[0].findKey(key);
      if (keyExists) {
        keyExists.value = value;
        return;
      } else {
        bucket[0].append({ key, value });
        this.count++;
      }
    }
    this.resize();
  }

  resize() {
    const loadLevel = this.capacity * this.loadFactor;

    if (this.count > loadLevel) {
      const oldEntries = this.entries();

      this.capacity *= 2;
      this.buckets = Array.from({ length: this.capacity }, () => []);
      this.count = 0;

      for (const [key, value] of oldEntries) {
        this.set(key, value);
      }
    }
  }

  get(key) {
    const bucket = this.getBucket(key);
    if (bucket.length === 0) return null;

    const found = bucket[0].findKey(key);

    return found ? found.value : null;
  }

  has(key) {
    const bucket = this.getBucket(key);
    if (bucket.length === 0) return false;

    const found = bucket[0].findKey(key);

    return found ? true : false;
  }

  remove(key) {
    const bucket = this.getBucket(key);
    if (bucket.length === 0) return false;

    const result = bucket[0].remove(key);
    if (result) {
      this.count--;
      if (bucket[0].headNode === null) {
        bucket.length = 0;
      }
    }

    return result;
  }

  length() {
    return this.count;
  }

  clear() {
    this.capacity = 16;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.count = 0;
  }

  keys() {
    const result = [];

    for (const bucket of this.buckets) {
      if (bucket[0]) {
        result.push(...bucket[0].getKeys());
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (const bucket of this.buckets) {
      if (bucket[0]) {
        result.push(...bucket[0].getValues());
      }
    }

    return result;
  }

  entries() {
    const result = [];

    for (const bucket of this.buckets) {
      if (bucket[0]) {
        result.push(...bucket[0].getEntries());
      }
    }

    return result;
  }
}
