const customFunction = async (x) => {
  if (x % 2 == 0) {
    return Promise.resolve("solved");
  } else {
    return Promise.reject("Not solved");
  }
};

const main = async (input) => {
  try {
    let x = await customFunction(input);
    print(x);
  } catch (error) {
    print(error);
  }
};
