import { getLastWordsInDate } from "./getLastWordsInDate";

describe("getLastWordsInDate function", () => {
  it("Return the last words of a formatted date.", () => {
    expect(getLastWordsInDate("Mon, 06 Nov 2023 16:17:58 GMT", -1)).toEqual(
      "2023"
    );
    expect(getLastWordsInDate("Wed, 08 Nov 2023 16:17:58 GMT", -2)).toEqual(
      "November 2023"
    );
    expect(getLastWordsInDate("Sun, 24 Dec 2023 16:17:58 GMT", -2)).toEqual(
      "December 2023"
    );
  });
});
