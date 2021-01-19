export class User {
    constructor(username, password, token, firstName, lastName, userId, role){
      this.userId = userId;
      this.username = username;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.role = role;
      this.token = token;
    }
  }