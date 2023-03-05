import "@testing-library/jest-dom/extend-expect";
import { mixUsers } from "./util";

describe("mixUsers", () => {
  it("array of three users", () => {
    expect(mixUsers([1, 2, 3])).toStrictEqual([2, 3, 1] || [3, 1, 2]);
  });
})