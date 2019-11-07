import EventHub from '../src/index'

const test1=message =>{
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
    console.log(message)

}

const test2 = message => {
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


test1(".on 监听 .emit发布");
test2("测试off");

