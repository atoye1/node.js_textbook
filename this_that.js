let rel = {
    name: "seol",
    friends: ['f1', 'f2', 'f3'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(this.name, friend);
        });
    },
    arrowFriends: function () {
        console.log(this);
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
};
var this = "newThis";
console.log("this => ", this);
rel.logFriends();
rel.arrowFriends();