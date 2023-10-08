const dateFormatter = require("../Utils").dateFormatter;

describe("dateFormatter", () => {
  it("should format date with DD/MM/YYYY format", () => {
    const date = "2023-10-07";
    const result = dateFormatter({ date: date, format: "DD/MM/YYYY" });
    expect(result).toBe("07/10/2023");
  });

  it("should format date with dd-mm-YY format", () => {
    const date = "2023-08-07";
    const result = dateFormatter({ date: date, format: "dd / mm / YY" });
    expect(result).toBe("7 / 8 / 23");
  });

  it("should format date with DD MMM, DDDD format", () => {
    const date = "2023-08-07";
    const result = dateFormatter({ date: date, format: "DD MMM, DDDD" });
    expect(result).toBe("07 Aug, Monday");
  });

  it("should format date with dd DD DDD DDDD format", () => {
    const date = "2023-08-07";
    const result = dateFormatter({ date: date, format: "dd DD DDD DDDD" });
    expect(result).toBe("7 07 Mon Monday");
  });

  it("should format date with mm MM MMM format", () => {
    const date = "2023-08-07";
    const result = dateFormatter({ date: date, format: "mm MM MMM MMMM" });
    expect(result).toBe("8 08 Aug August");
  });

  it("should throw error for invalid date", () => {
    try {
      dateFormatter({ date: "20223-08-07", format: "DD/MM/YYYY" });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("Invalid date");
    }
  });

  it("should throw error for invalid date", () => {
    try {
      dateFormatter({ date: "20223-13-32", format: "DD/MM/YYYY" });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("Invalid date");
    }
  });
});
