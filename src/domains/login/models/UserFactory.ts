import User from "@/domains/login/models/User";

export default class UserFactory {
  static createUser(username: string) {
    return new User(username, username, username, "");
  }
}
