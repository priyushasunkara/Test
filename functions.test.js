const concat = require(`./functions`);

test(`name`, () => {
  expect(concat("user", "name")).toBe("username");
});