import "@testing-library/jest-dom/extend-expect";
import { mixUsers } from "./util";

describe("mixUsers", () => {
  it('should return a shuffled array', () => {
    const users = [1, 2, 3];
    let result = true; 
    
    for (let i = 0; i < 100; i++) { 
      const arrayShuffled = mixUsers(users); 
 
      if (arrayShuffled[0] === 1 || arrayShuffled[1] === 2 || arrayShuffled[2] === 3) { 
        result = false; 
        break; 
      } 
    } 

    expect(result).toBe(true); 
  });
});     