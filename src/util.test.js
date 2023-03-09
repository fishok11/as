import "@testing-library/jest-dom/extend-expect";
import { mixUsers } from "./util";

describe("mixUsers", () => {
  it('should return a shuffled array', () => {
    const users = [1, 2, 3];

    expect(mixUsers(users)).not.toEqual([1, 2, 3]);
    expect(mixUsers(users)).not.toEqual([1, 3, 2]);
    expect(mixUsers(users)).not.toEqual([2, 1, 3]);
    expect(mixUsers(users)).not.toEqual([3, 2, 1]);
  });
});     