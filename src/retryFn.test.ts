import { rand } from "./retryFn";

describe("#rand", () => {
  it("returns a number", async () => {
    const randResult = await rand();

    expect(typeof randResult).toBe("number");
  });
});
