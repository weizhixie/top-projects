# Linked Lists

Implementation of a singly linked list written in JavaScript.

---

## Methods

#### `append(value)`

Adds a new node containing `value` to the **end** of the list.

#### `prepend(value)`

Adds a new node containing `value` to the **start** of the list.

#### `size()`

Returns the total number of nodes in the list.

#### `head()`

Returns the value of the first node in the list. If the list is empty returns `undefined`.

#### `tail()`

Returns the value of the last node.  
Returns `undefined` if the list is empty.

#### `at(index)`

Returns the value of the node at the given index. If there’s no node at the given index returns `undefined` .

#### `pop()`

Removes the **head node** from the list and returns its value.  
Returns `undefined` if the list is empty.

#### `contains(value)`

Returns `true` if the list contains the given value, otherwise returns `false`.

#### `findIndex(value)`

Returns the index of the node containing the given value. If the value can’t be found in the list, it should return `-1`. If more than one node has a value matching the given value, it should return the index of the first node with the matching value.

#### `toString()`

Returns a string representation of the list., if the list is empty, it should return an empty string. The format will be: `( value ) -> ( value ) -> ( value ) -> null`.

#### `insertAt(index, ...values)`

Inserts one or more nodes with the given values starting at the specified index.

#### `removeAt(index)`

Removes the node at the given `index`. If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throw a `RangeError`

### Test Examples

```js
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.insertAt(1, 10, 11);
console.log(list.toString()); //( dog ) -> ( 10 ) -> ( 11 ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```
