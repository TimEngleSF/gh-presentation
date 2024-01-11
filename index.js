const sayHello = (names) => {
    if (!names || names.length == 0) {
        return 'Hello, World!';
    }

    namesString = names.join(', ');

    return `Hello, ${namesString}!`;
};

console.log(sayHello());
console.log(sayHello(['Bob']));
console.log(sayHello(['Bob', 'Steve']));

module.exports = sayHello;
