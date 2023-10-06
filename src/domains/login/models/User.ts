export default class User {
  username: string;
  password: string;
  name: string;
  token: string;
  constructor(
    username: string,
    password: string,
    name: string,
    token: string = "",
  ) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.token = token;
  }
}
