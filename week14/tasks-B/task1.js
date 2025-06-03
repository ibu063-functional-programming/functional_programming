// ************ TASK DESCRIPTION ************
//? Task: ChatChannel System (Message Broadcasting Service)

/*
* You are designing a minimalistic chat channel system where users can listen for messages.
*
* Your task:
* - Implement a class `ChatChannel` that supports:
*     - `subscribe(listener)` → adds a new listener function.
*     - `broadcast(message)` → sends the message to all current listeners (subscribers).
*     -  (you need a way to store all subscribers upon creating
*        a new ChatChannel).
*     - `unsubscribe(listener)` → removes the specified listener from the list.
*
* Hints:
* - Use an array to store subscribed functions.
* - Ensure no mutation leaks; manage state internally.
*
* Example:
* const channel = new ChatChannel();
* const alice = msg => console.log("Alice heard:", msg);
* const bob = msg => console.log("Bob heard:", msg);
* 
* channel.subscribe(alice);
* channel.subscribe(bob);
* channel.broadcast("Hello, everyone!");
* // Output:
* // Alice heard: Hello, everyone!
* // Bob heard: Hello, everyone!
*/

class ChatChannel {
  constructor() {
    this.listeners = [];
  }

  subscribe(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    }

    return {
      unsubscribe: () => this.listeners = this.listeners.filter(l => l !== listener)
    };
  }

  broadcast(message) {
    this.listeners.forEach(listener => {
      try {
        listener(message);
      } catch (e) {
      }
    });
  }
}

// Below this comment any modification is prohibited.
module.exports = ChatChannel;
