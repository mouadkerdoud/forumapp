export class User {
    constructor(username, password, token, firstName, lastName, userId, role){
      this.username = username;
      this.password = password;
      this.token = token;
      this.firstName = firstName;
      this.lastName = lastName;
      this.userId = userId;
      this.role = role;
    }
  }