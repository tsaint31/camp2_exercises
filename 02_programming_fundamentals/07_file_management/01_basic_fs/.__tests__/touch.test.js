const fs = require("fs");
const path = require("path");

const touch = require("../05_touch");

const file = () => fs.realpathSync("/tmp") + "/touch/file.txt";


const createTreeStructure = () => {
  if (!fs.existsSync(path.dirname(file()))) {
    fs.mkdirSync(path.dirname(file()));
  }
}

const removeTreeStructure = () => {
  if (fs.existsSync(file())) {
    fs.unlinkSync(file());
  }
}

afterEach(removeTreeStructure)
beforeEach(createTreeStructure)

test(`should create an existing file`, () => {
  touch(file());
  expect(fs.existsSync(file())).toEqual(true);
});
