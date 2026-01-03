import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array.from({ length: this.capacity }, () => []);
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
    } else {
      const keyExists = bucket[0].findKey(key);
      if (keyExists) {
        keyExists.value = value;
        return;
      } else {
        bucket[0].append({ key, value });
        return;
      }
    }
  }
}
