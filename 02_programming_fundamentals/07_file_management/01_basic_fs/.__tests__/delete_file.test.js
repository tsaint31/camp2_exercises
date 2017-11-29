const fs = require("fs");
const path = require("path");

const deleteFile = require("../02_delete_file");

const fileToRemove = () => fs.realpathSync("/tmp") + "/deleteFile/file_to_rm.txt";

const createTreeStructure = () => {
  if (!fs.existsSync(path.dirname(fileToRemove()))) {
    fs.mkdirSync(path.dirname(fileToRemove()));
  }

  if (!fs.existsSync(fileToRemove())) {
    fs.writeFileSync(fileToRemove(), "Hello World");
  }
}

const removeTreeStructure = () => {
  if (fs.existsSync(fileToRemove())) {
    fs.unlinkSync(fileToRemove());
  }

  if (fs.existsSync(path.basename(fileToRemove()))) {
    fs.rmdirSync(path.basename(fileToRemove()));
  }
}

afterEach(removeTreeStructure);
beforeEach(createTreeStructure);

test(`should remove an existing file`, () => {
  expect(deleteFile(fileToRemove())).toEqual(true);
  expect(fs.existsSync(fileToRemove())).toEqual(false)
});

test(`should not remove a non existing file`, () => {
  expect(deleteFile(path.dirname(fileToRemove()) + '/non-existing-file')).toEqual(false);
});

test(`should not remove a folder`, () => {
  expect(deleteFile(path.dirname(fileToRemove()))).toEqual(false);
  expect(fs.existsSync(path.dirname(fileToRemove()))).toEqual(true)
});
