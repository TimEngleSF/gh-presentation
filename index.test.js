const sayHello = require("./index");

describe("sayHello", () => {
  it("should return 'Hello, World!' if no parameters were passed", () => {
    const expected = "Hello, World!";
    const actual = sayHello();

    expect(actual).toBe(expected);
  });

  it.each([
    [["Bob"], "Hello, Bob!"],
    [["Bob", "Steve"], "Hello, Bob, Steve"],
  ])(
    "should return strings separated by ', ' if an array of string are passed in",
    (names, expected) => {
      const actual = sayHello(names);

      expect(actual).toBe(expected);
    }
  );
});
