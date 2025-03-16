import { isTriplet } from "./pythagoras";

test("check triplet 3, 4, 5", () => {
  expect(isTriplet(3, 4, 5)).toBe(true);
});

test("check triplet 10, 11, 12", () => {
  expect(isTriplet(10, 11, 12)).toBe(false);
});
