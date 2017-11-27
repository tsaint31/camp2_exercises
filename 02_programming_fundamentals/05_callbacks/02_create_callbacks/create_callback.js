const log = (text) => console.log(text);

// A function that takes two parameters, this first one being an object like below
// and the second one being a callback function.
const getInput = (obj, func) => {
  // When finished, we want to log the key params...
  func(obj.key);
};



getInput({user: "Lorem", key: "arrow_up"}, log);
