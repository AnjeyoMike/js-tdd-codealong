// Your code here
// utils.js
export const currentAgeForBirthYear = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

// test file
import { currentAgeForBirthYear } from "./utils"; // Make sure to adjust the path if necessary

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(38);
  });
});
