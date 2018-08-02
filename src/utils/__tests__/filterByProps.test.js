import { filterById, filterByKeyCode } from "../";

describe("filterById", () => {
  test("should return the correct item", () => {
    const list = [
      { id: "q", data: "kick" },
      { id: "w", data: "snare" },
      { id: "e", data: "open-hh" }
    ];

    expect(filterById(list, "q")[0]).toEqual(
      expect.objectContaining({
        id: "q"
      })
    );
  });
});

describe("filterByKeyCode", () => {
  test("should return the correct item", () => {
    const list = [
      { keyCode: 80, data: "kick" },
      { keyCode: 81, data: "snare" },
      { keyCode: 82, data: "open-hh" }
    ];
    expect(filterByKeyCode(list, 80)[0]).toEqual(
      expect.objectContaining({
        keyCode: 80
      })
    );
  });
});
