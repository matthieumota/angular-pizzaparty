export class User {
  firstname: string;
  lastname: string;
  birthday: string;
  avatar?: string;

  constructor(firstname: string, lastname: string, birthday: string, avatar?: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.avatar = avatar;
  }
}
