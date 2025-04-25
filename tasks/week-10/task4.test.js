import { UserService } from "./task4.js";
import { mockDatabase } from "./task4.mock-database.js";

// Inject the mock
const service = new UserService(mockDatabase);

// Test: Add user
service.createUser({ id: 1, name: "Alice" });

// Test: Retrieve user
console.log(service.getUserById(1)); // Output: { id: 1, name: "Alice" }
console.log(service.getUserById(2)); // Output: null
