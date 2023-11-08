import { getDayInDate } from "./getDayInDate";

describe("getDayInDate function", () => {
  it("Return the day of the week in a formatted and readable manner.", () => {
    expect(getDayInDate("Mon, 06 Nov 2023 16:17:58 GMT")).toEqual("Monday");
    expect(getDayInDate("Wed, 08 Nov 2023 16:17:58 GMT")).toEqual("Wednesday");
    expect(getDayInDate("Fri, 10 Nov 2023 16:17:58 GMT")).toEqual("Friday");
  });
});
