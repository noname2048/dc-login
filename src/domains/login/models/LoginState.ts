import User from "@/domains/login/models/User.ts";

export const initialUsers: User[] = [
  new User("admin", "admin", "admin"),
  new User("user", "user", "user"),
];

export default class LoginState {
  isLogin: boolean = false;
  name: null | string = null;
  users: User[] = initialUsers;
  login(username: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (user) {
      this.isLogin = true;
      this.name = user.name;
      return true;
    }
    return false;
  }
  logout() {
    this.isLogin = false;
    this.name = null;
  }
}
