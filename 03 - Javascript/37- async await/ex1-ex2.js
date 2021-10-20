async function promise1() {
  try {
    return true;
  } catch (error) {
    throw Error(error);
  }
}

async function promise2() {
  try {
    setTimeout(function () {
      return true;
    }, 1000);
  } catch (error) {
    throw Error(error);
  }
}

async function promise3() {
  try {
    return "sucesso";
  } catch (error) {
    throw Error(error);
  }
}

async function resolvePromises() {
  let result = await promise1(await promise2(await promise3()));
  console.log(result);
}

resolvePromises();
