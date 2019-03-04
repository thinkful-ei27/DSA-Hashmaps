'use strict';
const { LinkedList } = require('./linkedList');

class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  get(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
   

    //  check for key value


    //  else travesrse list/ 
    if (slot === undefined) {
      throw new Error('key error, cannot get');
    }

    return slot.value;
  }

  set(key, value) {
    if ((this.length + 1) / this._capacity > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);

    const slotList = new LinkedList();
    slotList.insertLast({
      key,
      value,
      deleted: false
    });

    this._slots[index] = slotList;
    this.length++;
  }
  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined) {
      throw new Error('Key Error');
    }

    slot.deleted = true;
    this.length--;
    this._deleted++;
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    let index = start % this._capacity;
    let slot = this._slots[index];

    // if (slot === undefined) {
    //   return index;
    // }
    // if (slot) {
    return index;


    // else if (slot.key === key && !slot.deleted) {
    // }
  }

  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    this.length = 0;
    this._slots = [];

    for (let slot of oldSlots) {
      if (slot !== undefined) {
        this.set(slot.key, slot.value);
      }
    }
  }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;
