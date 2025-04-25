export const mockDatabase = {
  users: [],

  findUser(id) {
    return this.users.find((user) => user.id === id) || null;
  },

  saveUser(user) {
    this.users.push(user);
    return user;
  },
};
