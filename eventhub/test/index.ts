import EventHub from '../src/index'

const test2=message =>{
    const eventHub = new EventHub();

    // on emit
    let called = false;
    eventHub.on("xxx", y => {
        called = true;
        console.log(called)
        console.log(y)
        console.assert(y[0] === "林志玲结婚了");
        console.assert(y[1] === "言承旭无话可说");
    });

    eventHub.emit("xxx", ["林志玲结婚了", "言承旭无话可说"]);

}

const test3 = message => {
    const eventHub = new EventHub();
    let called = false;
    const fn1 = () => {
        called = true;
    };

    eventHub.on("yyy", fn1);
    eventHub.off("yyy", fn1);
    eventHub.emit("yyy");
    console.assert(called === false);
    console.log(message);
};


test3("测试off");

