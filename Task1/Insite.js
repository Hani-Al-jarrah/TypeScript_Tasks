var user = {
    name: "John",
    age: 25,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name));
    }
};
user.greet(); // Output: Hello, my name is John
