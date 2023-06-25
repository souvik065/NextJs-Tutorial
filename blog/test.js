const person = {
  name: "John Doe",
  age: 25,
  greet: function () {
    const self = this;
    setTimeout(function () {
      console.log("Hello, my name is " + self.name);
    }, 1000);
  },
};

person.greet();
