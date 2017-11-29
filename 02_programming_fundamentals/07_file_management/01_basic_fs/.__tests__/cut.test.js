const fs = require("fs");
const path = require("path");

const cutPaste = require("../04_cut_file");

const fromPath = () => fs.realpathSync("/tmp") + "/cutPaste/file_to_copy.txt";
const toPath = () => fs.realpathSync("/tmp") + "/cutPaste/copied.txt";

const createTreeStructure = () => {
  if (!fs.existsSync(path.dirname(fromPath()))) {
    fs.mkdirSync(path.dirname(fromPath()));
  }

  if (!fs.existsSync(fromPath())) {
    fs.writeFileSync(fromPath(), "Hello World");
  }

  if (fs.existsSync(toPath())) {
    fs.unlinkSync(toPath())
  }
}

const removeTreeStructure = () => {
  if (fs.existsSync(fromPath())) {
    fs.unlinkSync(fromPath());
  }

  if (fs.existsSync(toPath())) {
    fs.unlinkSync(toPath());
  }

  if (fs.existsSync(path.basename(fromPath()))) {
    fs.rmdirSync(path.basename(fromPath()));
  }
}

afterEach(removeTreeStructure)
beforeEach(createTreeStructure)

test(`should cut an existing file`, () => {
  const content = fs.readFileSync(fromPath());
  expect(cutPaste(fromPath(), toPath())).toEqual(true);
  expect(fs.existsSync(fromPath())).toEqual(false);
  expect(fs.existsSync(toPath())).toEqual(true);
  expect(fs.readFileSync(toPath())).toEqual(content);
});

test(`should not cut a non existing file`, () => {
  expect(cutPaste(path.dirname(fromPath()) + '/non-existing-file', toPath())).toEqual(false);
  expect(fs.existsSync(fromPath())).toEqual(true);
  expect(fs.existsSync(toPath())).toEqual(false);
});

test(`should not cut a folder`, () => {
  expect(cutPaste(path.dirname(fromPath()), toPath())).toEqual(false);
  expect(fs.existsSync(path.dirname(fromPath()))).toEqual(true)
  expect(fs.existsSync(toPath())).toEqual(false);
});
