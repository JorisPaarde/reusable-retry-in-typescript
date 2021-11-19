import { error } from "console";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retryFn(fn, { tries, interval }) {
  try {
    return await fn();
  } catch (e) {
    const newTries = tries - 1;

    if (newTries === 0) {
      throw e;
    }

    await wait(interval);
    return retryFn(fn, { tries: newTries, interval });
  }
}

export async function rand() {
  return Math.random();
}

retryFn(rand, { tries: 10, interval: 10 }).then((result) =>
  console.log(result)
);
