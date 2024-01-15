class User {
  constructor(_firstname, _lastname, _age, _location) {
    this.firstName = _firstname;
    this.lastName = _lastname;
    this.age = _age;
    this.location = _location;
  }
  confront() {
    if (userA.age > userB.age) {
      return userA.firstName + "is older than" + " " + userB.firstName;
    } else {
      return userA.firstName + "is yonger than" + " " + userB.firstName;
    }
  }
}

const userA = new User("Satoshi", "Goto", "25", "kyoto");
const userB = new User("Luca", "Gallo", "21", "Milano");
console.log(userA.confront());
