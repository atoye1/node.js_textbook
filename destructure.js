const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        console.log("printing this inner candy func");
        console.log(this);
        this.status.count--;
        return this.status.count;
    }
};
console.log(candyMachine.getCandy());
const { getCandy, status: { count } } = candyMachine;
console.log(getCandy());