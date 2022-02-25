import formatFileSize from "./formatFileSize";

describe("formatFileSize test", () => {
  test("1KB", () => {
    expect(formatFileSize(1000)).toBe({ volumNum: 1, unit: "KB" });
  });
  test("1MB", () => {
    expect(formatFileSize(10000000)).toBe({ volumNum: 1, unit: "MB" });
  });
  test("1GB", () => {
    expect(formatFileSize(100000000000)).toBe({ volumNum: 1, unit: "GB" });
  });
});
