let user = {
  firstName: 'Alice',
  lastName: 'Pink',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    //destructuring array
    [this.firstName, this.lastName] = value.split(' ');
  },
};

user.fullName = 'Dang Dinh';
