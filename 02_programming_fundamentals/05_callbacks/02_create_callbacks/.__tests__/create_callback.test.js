let outputData = "";
const storeLog = (inputs) => (outputData += inputs);

test("it should work", () => {
  console["log"] = jest.fn(storeLog);
  require("../create_callback");
  expect(outputData).toBe("arrow_up");
});
