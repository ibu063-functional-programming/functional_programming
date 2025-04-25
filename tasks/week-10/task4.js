export class UserService {
  constructor(database) {
    this.db = database; // Injected dependency
  }

  getUserById(id) {
    return this.db.findUser(id);
  }

  createUser(user) {
    return this.db.saveUser(user);
  }
}
