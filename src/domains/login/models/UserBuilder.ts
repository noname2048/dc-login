import User from "@/domains/login/models/User.ts";

export default class UserBuilder {
  username: string = "";
  password: string = "";
  name: string = "";
  token: string = "";

  constructor() {}

  setUsername(username: string): UserBuilder {
    this.username = username;
    return this;
  }

  setPassword(password: string): UserBuilder {
    this.password = password;
    return this;
  }

  setName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  setToken(token: string): UserBuilder {
    this.token = token;
    return this;
  }

  build(): User {
    if (!this.username || !this.password || !this.name) {
      throw new Error("username, password, name, token are required");
    }
    if (!this.token) {
      this.token = `***${this.username}`;
    }
    return new User(this.username, this.password, this.name, this.token);
  }
}
