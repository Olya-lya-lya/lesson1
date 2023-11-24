const userData = {
    name: "Ivan",
    age: null,
    say: function() {
        console.log("Hello");
    }
};

userData.say();
userData.hey?.();
console.log(userData.skills?.js);
console.log(userData?.skills?.js);