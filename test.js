const { stringLength, reverseString, Calculator, capitalize } = require("./index.js");
describe("stringLenght function", () => {
  test("'nouridine' string lenght should be equal to 9", () => {
    // Arrange
    const nouridineString = "nouridine";

    // Act
    const nouridine = stringLength(nouridineString);

    // Assert
    expect(nouridine).toBe(9);
  });

  test("throw an error if the string lenght is greater than 10", () => {
    // Arrange
    const longString = "studyingatmicroverse";

    // Assert
    expect(() => stringLength(longString)).toThrow();
  });

  test("throw an error if the string lenght is smaller than 0", () => {
    // Arrange
    const short = "";

    // Assert
    expect(() => stringLength(short)).toThrow();
  });
});

describe("reverseString function", () => {
  test("dino reversed should be onid", () => {
    // Arrange
    const dinoString = "dino";

    // Act
    const reversed = reverseString(dinoString);

    // Assert
    expect(reversed).toBe("onid");
  });
});

describe("calculator class add method", () => {
    const calculator = new Calculator()
    test("1 + 2 = 3", () => {
        expect(calculator.add(1, 2)).toBe(3)
    })
    
    test("1 + 2 != 4", () => {
        expect(calculator.add(1, 2)).not.toBe(4)
    })

    test("1 + 5 != 6", () => {
        expect(calculator.add(1, 2)).not.toBe(6)
    })
})

describe("calculator class substract method", () => {
    const calculator = new Calculator()
    test("1 - 2 = -1", () => {
        expect(calculator.substract(1, 2)).toBe(-1)
    })
    
    test("1 - 2 != 4", () => {
        expect(calculator.substract(1, 2)).not.toBe(4)
    })

    test("1 - 5 = -4", () => {
        expect(calculator.substract(1, 5)).toBe(-4)
    })
})

describe("calculator class divide method", () => {
    const calculator = new Calculator()
    test("1 / 2 = 0.5", () => {
        expect(calculator.divide(1, 2)).toBe(0.5)
    })
    
    test("1 / 2 != 4", () => {
        expect(calculator.divide(1, 2)).not.toBe(4)
    })

    test("5 / 2 = 2.5", () => {
        expect(calculator.divide(5, 2)).toBe(2.5)
    })
})

describe("calculator class multiply method", () => {
    const calculator = new Calculator()
    test("1 * 2 = 2", () => {
        expect(calculator.multiply(1, 2)).toBe(2)
    })
    
    test("3 * 9 != 29", () => {
        expect(calculator.multiply(3, 9)).not.toBe(29)
    })

    test("5 * 2 = 10", () => {
        expect(calculator.multiply(5, 2)).toBe(10)
    })
})

describe("capitalize function", () => {
    test("'nouridine' string should become Nouridine", ()=> {
        expect(capitalize("nouridine")).toBe("Nouridine")
    })
})
