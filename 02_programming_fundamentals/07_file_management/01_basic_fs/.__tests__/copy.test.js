const fs = require("fs");
const path = require("path");

const copyPaste = require("../03_copy_file");

const fromPath = () => fs.realpathSync("/tmp") + "/copyPaste/file_to_copy.txt";
const toPath = () => fs.realpathSync("/tmp") + "/copyPaste/copied.txt";

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

test(`should copy an existing file`, () => {
  expect(copyPaste(fromPath(), toPath())).toEqual(true);
  expect(fs.existsSync(fromPath())).toEqual(true);
  expect(fs.existsSync(toPath())).toEqual(true);
  expect(fs.readFileSync(fromPath())).toEqual(fs.readFileSync(toPath()));
});

test(`should not copy a non existing file`, () => {
  expect(copyPaste(path.dirname(fromPath()) + '/non-existing-file', toPath())).toEqual(false);
  expect(fs.existsSync(fromPath())).toEqual(true);
  expect(fs.existsSync(toPath())).toEqual(false);
});

test(`should not copy a folder`, () => {
  expect(copyPaste(path.dirname(fromPath()), toPath())).toEqual(false);
  expect(fs.existsSync(path.dirname(fromPath()))).toEqual(true)
  expect(fs.existsSync(toPath())).toEqual(false);
});

test(`should not copy if the destination already exists`, () => {
  fs.writeFileSync(toPath(), "My Content");

  expect(copyPaste(path.dirname(fromPath()), toPath())).toEqual(false);
  expect(fs.existsSync(path.dirname(fromPath()))).toEqual(true)
  expect(fs.existsSync(toPath())).toEqual(true);
  expect(fs.readFileSync(toPath(), 'utf-8')).toEqual("My Content");
});
