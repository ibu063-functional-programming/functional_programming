// A minimal EventEmitter-like implementation
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }
  emit(eventName, data) {
    if (this.listeners[eventName]) {
      for (const callback of this.listeners[eventName]) {
        callback(data);
      }
    }
  }
  off(eventName, callback) {
    if (!this.listeners[eventName]) return;
    this.listeners[eventName] = this.listeners[eventName].filter(cb => cb !== callback);
  }
}

// Usage:
const emitter = new EventEmitter();

// Subscribe to a custom event 'data'
emitter.on('data', value => {
  console.log("Received data:", value);
});

// Emit events:
emitter.emit('data', 42);
emitter.emit('data', 100);

