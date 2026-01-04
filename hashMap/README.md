# Linked Lists

Implementation of HashMap written in JavaScript.

---

## Methods

#### `hash(key)`

Takes a key and produces a hash code with it. `Limiting key types to strings` In the real world, hash maps can accommodate various data types as keys, including numbers, strings, or objects. However, for this project, we will only handle keys of type `string`.

#### `set(key, value)`

Takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.

#### `get(key)`

Takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return `null`.

#### `has(key)`

Takes a key as an argument and returns `true` or `false` based on whether or not the key is in the hash map.

#### `remove(key)`

Takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return `true`. If the key isn’t in the hash map, it should return `false`.

#### `length()`

Returns the number of stored keys in the hash map.

#### `clear()`

Removes all entries in the hash map.

#### `keys()`

Returns an array containing all the keys inside the hash map.

#### `values()`

Returns an array containing all the values.

#### `entries()`

Returns an array that contains each `key`, `value` pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`

#### `resize()`

Double bucket capacity when load factor is exceeded

#### `getBucket(key)`

Takes one argument as a key and retrieve the appropriate bucket by hashed key

### Test Examples

```js
const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("moon", "silver");

console.log(test.length()); //13
console.log(test.get("moon")); //silver
console.log(test.has("moon")); //rue

console.log(test.keys()); //[ "moon", "carrot", "frog", "banana", "grape", "ice cream", "jacket", "kite", "elephant", "apple", "hat", "dog", "lion" ]

console.log(test.values()); //["silver","orange","green","yellow","purple","white","blue","pink","gray","red","black","brown","golden"]

console.log(test.entries()); //[ [ "moon", "silver" ], [ "carrot", "orange" ], [ "frog", "green" ], [ "banana", "yellow" ], [ "grape", "purple" ], [ "ice cream", "white" ], [ "jacket", "blue" ], [ "kite", "pink" ], [ "elephant", "gray" ], [ "apple", "red" ], [ "hat", "black" ], [ "dog", "brown" ], [ "lion", "golden" ] ]
```
