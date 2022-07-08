import { main } from ".";

describe("Main entry point", () => {
  it("is defined", () => {
    jest.spyOn(console, "log").mockImplementationOnce(() => {});

    main();

    expect(console.log).toHaveBeenCalled();
  });
});
