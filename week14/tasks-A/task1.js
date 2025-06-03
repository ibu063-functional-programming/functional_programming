// ************ TASK 1: Implement a Basic Observable (Manual Observer Pattern) ************

/*
* You are simulating reactive streams without using any library.
* 
* Your task:
* - Create a class `Observable` that supports:
*     - `subscribe(callback)` → registers a new subscriber.
*     - `notify(value)` → sends the value to all subscribers.
*     - `unsubscribe(callback)` → removes a subscriber.
*/

class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return {
      unsubscribe: () => {
        this.subscribers = this.subscribers.filter(fn => fn !== callback);
      }
    };
  }

  notify(value) {
    this.subscribers.forEach(callback => callback(value));
  }
}


// Below this comment any modification is prohibited.
module.exports = Observable;