let { repeatMessage } = require('../src/index');

test("Description of test here", () => {
  expect("data to check is passed here").toBeTruthy();
});

describe("repeatMessage functionality", () => {
  test("repeatMessage is a function.", () => {
      expect(typeof(repeatMessage)).toBe("function");
  });
  test("If given 'hello' and 3 as inputs, repeatMessage will return 'hellohellohello'.", () => {
      expect(repeatMessage("hello", 3)).toEqual("hellohellohello");
  });
});

