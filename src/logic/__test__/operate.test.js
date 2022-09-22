import operate from "../operate";

describe("operation testing", () => {
  test("mulitiplication testing", () => {
    expect(operate('3', '3', 'x')).toBe('9');
  })

  test("addition testing", () => {
    expect(operate('34', '23', '+')).toBe('57');
  })
  
  test("Division testing", () => {
    expect(operate('23', '0', '÷')).toBe("Can't divide by 0.");
  })

  test("Modulo testing", () => {
    expect(operate('9', '2', '%')).toBe("1");
  })
})