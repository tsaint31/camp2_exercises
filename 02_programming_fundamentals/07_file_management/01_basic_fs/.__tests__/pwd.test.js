const fs = require("fs");

const pwd = require("../01_pwd");

const folders = () => {
  const rootFolder =  fs.realpathSync("/tmp") + "/basic_fs";

  return [rootFolder, `${rootFolder}/subfolder1`, `${rootFolder}/subfolder2`];
}

const createTreeStructure = () => {
  folders().forEach((folder) => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  })
}

const removeTreeStructure = () => {
  folders().concat([]).reverse().forEach((folder) => {
    if (fs.existsSync(folder)) {
      fs.rmdirSync(folder)
    }
  })
}

afterAll(removeTreeStructure)
beforeAll(createTreeStructure)

folders().forEach((folder, index) => {
  test(`should return the correct path - ${index + 1}`, () => {
    process.chdir(folder);
    expect(pwd()).toEqual(folder);
  });
})
