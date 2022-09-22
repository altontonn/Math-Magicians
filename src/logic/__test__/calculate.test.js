import calculate from "../calculate";

describe("unit testing", () => {
  test("testing operation", () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = '3';
    const result = calculate(obj, buttonName);
    expect(result.next).toEqual('3');
  })

  test("testing minus sign operation", () => {
    const obj = {
      total: 20,
      next: null,
      operation: '&minus;',
    }
    const buttonName = '5';
    const result = calculate(obj, buttonName);
    expect(result.next).toEqual('5');
  })

  test("testing operation", () => {
    const obj = {
      total: 0,
      next: null,
      operation: null,
    }
    const buttonName = '&divide;';
    const result = calculate(obj, buttonName);
    expect(result.operation).toEqual('&divide;');
  })
})
