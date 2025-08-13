console.log('hello');

class LRUcahce {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    //If the key does not exist
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);
    //After getting the value, put it into last as most recently used
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.get(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const [firstKey] = this.cache.keys();
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

const cache = new LRUcahce(2);
cache.put(1, 10);
cache.put(2, 20);
console.log(cache.get(1)); // 10
cache.put(3, 30); // Removes key 2 (least recently used)
console.log(cache.get(2)); // -1 (not found)
cache.put(4, 40); // Removes key 1
console.log(cache.get(1)); // -1 (not found)
console.log(cache.get(3)); // 30
console.log(cache.get(4)); // 40
