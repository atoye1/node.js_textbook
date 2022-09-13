class Human {
    constructor(type) {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breate() {
        console.log('haam');
    }
}

class Zero extends Human {
    constructor(type, name, age) {
        super(type);
        this.name = name;
        this.age = age;
    }
    introduce() {
        super.breate();
        console.log(`my name is ${this.name}, age is ${this.age}`);
    }
}

cho = new Zero('human', 'hy', '20');
Human.isHuman(cho);
cho.introduce();

var Human2 = function (type) {
    this.type = type;
};
Human2.isHuman = function (human) {
    return human instanceof Human2;
};
Human2.prototype.breate = function () {
    console.log('haaam');
};

const h2 = new Human2('man');
console.log(h2);
if (Human2.isHuman(h2)) {
    h2.breate();
}