class Observable {
  constructor() {
    this.subscribers = [];
  }

  // Add a new subscriber
  subscribe(callback) {
    this.subscribers.push(callback);
  }

  // Notify all subscribers with data
  notify(data) {
    this.subscribers.forEach(callback => callback(data));
  }
}
const obs = new Observable();

obs.subscribe(data => console.log("First:", data));
obs.subscribe(data => console.log("Second:", data));

obs.notify("Hello"); 
// Output:
// First: Hello
// Second: Hello
