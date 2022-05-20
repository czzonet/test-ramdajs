import R from "ramda";

describe("", () => {
  it("should", () => {
    const greet = R.replace("{name}", R.__, "Hello, {name}!");
    expect(greet("Alice")).toBe("Hello, Alice!");
  });

  it("add", () => {
    expect(R.add(2, 3)).toBe(5);
    expect(R.add(7)(10)).toBe(17);
  });

  it("addIndex", () => {
    const mapIndexed = R.addIndex(R.map);
    const res = mapIndexed(
      (val, idx) => idx + "-" + val,
      ["f", "o", "o", "b", "a", "r"]
    );
    expect(res).toEqual(["0-f", "1-o", "2-o", "3-b", "4-a", "5-r"]);
  });

  it("adjust", () => {
    expect(R.adjust(1, R.toUpper, ["a", "b", "c", "d"])).toEqual([
      "a",
      "B",
      "c",
      "d",
    ]);
    expect(R.adjust(-1, R.toUpper, ["a", "b", "c", "d"])).toEqual([
      "a",
      "b",
      "c",
      "D",
    ]);
  });

  it("all", () => {
    const equals3 = R.equals(3);
    expect(R.all(equals3)([3, 3, 3, 3])).toEqual(true);
    expect(R.all(equals3)([3, 3, 1, 3])).toEqual(false);
  });

  it("allPass", () => {
    const isQueen = R.propEq("rank", "Q");
    const isSpade = R.propEq("suit", "♠︎");
    const isQueenOfSpades = R.allPass([isQueen, isSpade]);

    expect(isQueenOfSpades({ rank: "Q", suit: "♠︎" })).toEqual(true);
    expect(isQueenOfSpades({ rank: "Q", suit: "♣︎" })).toEqual(false);
  });

  it("always", () => {
    const t = R.always("Tee");
    expect(t()).toBe("Tee");
  });

  it("and", () => {
    expect(R.and(true, true)).toBe(true);
    expect(R.and(true, false)).toBe(false);
    expect(R.and(false, true)).toBe(false);
    expect(R.and(false, false)).toBe(false);
  });

  it("andThen", () => {});
});
