let outputData = "";
const storeLog = (inputs) => (outputData += inputs);

test("it should work", () => {
  console["log"] = jest.fn(storeLog);
  require("../using_callback");
  expect(outputData).toBe("Hello, Spartacus");
});
