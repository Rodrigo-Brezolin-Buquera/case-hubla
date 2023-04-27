import Business from "../src/business";
import { DatabaseMock } from "./mocks/databaseMock";
import { SellerType } from "../src/types";
import {
  AuthenticatorMock,
  HashManagerMock,
} from "./mocks/mocks";

const hashManager = new HashManagerMock();
const authenticator = new AuthenticatorMock();

const databaseMock = new DatabaseMock();
const business = new Business(
  databaseMock,
  hashManager,
  authenticator
);

describe("Business Tests - insertData method", () => {
  const file = {
    path: "./tests/mocks/sales.txt",
  };

  test("Sucess case: database insertSeller calls ", async () => {
    await business.insertData(file as any);
    expect(databaseMock.insertSeller).toBeCalledTimes(7);
  });

  test("Sucess case: database insertTransaction calls ", async () => {
    await business.insertData(file as any);
    expect(databaseMock.insertTransaction).toBeCalledTimes(20);
  });

  test("Sucess case: database updateBalance calls ", async () => {
    await business.insertData(file as any);
    expect(databaseMock.updateBalance).toBeCalledTimes(7);
  });

  test("Error: empty file ", async () => {
    const emptyfile = {
      path: "./tests/mocks/empty.txt",
    };
    try {
      await business.insertData(emptyfile as any);
    } catch (error: any) {
      expect(error.message).toBe("Error reading the file");
      expect(error.statusCode).toBe(400);
    }
  });

  test("Error: incorrect format ", async () => {
    const wrongFile = {
      path: "./tests/mocks/wrong.txt",
    };
    try {
      await business.insertData(wrongFile as any);
    } catch (error: any) {
      expect(error.message).toBe("Incorrect file format");
      expect(error.statusCode).toBe(406);
    }
  });
});

describe("Business Tests - findSeller method", () => {
  test("Sucess case", async () => {
    const result = await business.findSeller("id");
    expect(result.id).toBe("id");
    expect(result.name).toBe("name");
    expect(result.type).toBe(SellerType.AFFILIATE);
    expect(result.balance).toBe(0);
    expect(result.transactions).toEqual([]);
  });

  test("Sucess case: database calls", async () => {
    await business.findSeller("id");
    expect(databaseMock.findSeller).toBeCalledTimes(1);
  });

  test("Error: empty id", async () => {
    expect.assertions(2);
    try {
      await business.findSeller("");
    } catch (error: any) {
      expect(error.message).toBe("Please select an id");
      expect(error.statusCode).toBe(400);
    }
  });

  test("Error: seller not found", async () => {
    expect.assertions(2);
    try {
      await business.findSeller("notTheId");
    } catch (error: any) {
      expect(error.message).toBe("Sellers not found");
      expect(error.statusCode).toBe(404);
    }
  });
});

describe("Business Tests - findAllSellers method", () => {
  test("Sucess case", async () => {
    const result = await business.findAllSellers();
    expect(result.length).toBe(2);
    expect(result[0].id).toBe("id");
    expect(result[0].name).toBe("name");
    expect(result[0].type).toBe(SellerType.AFFILIATE);
    expect(result[0].balance).toBe(0);
    expect(result[0].transactions).toEqual([]);
  });

  test("Sucess case: database calls", async () => {
    await business.findAllSellers();
    expect(databaseMock.findAllSellers).toBeCalledTimes(1);
  });
});

describe("Business Tests - findAllTransactions method", () => {
  test("Sucess case", async () => {
    const result = await business.findAllTransactions();
    expect(result.length).toBe(2);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe("id");
    expect(result[0].type).toBe(1);
    expect(result[0].date).toBe("Date");
    expect(result[0].product).toBe("Description");
    expect(result[0].seller).toBe("sellerId");
  });

  test("Sucess case: database calls", async () => {
    await business.findAllTransactions();
    expect(databaseMock.findAllTransactions).toBeCalledTimes(1);
  });

  describe("Business Tests - login method", () => {
    const input = {
      email: "email@email.com",
      password: "123456",
    };

    test("Sucess case", async () => {
      const result = await business.login(input);
      expect(result).toBe("token");
    });

    test("Sucess case:: database call", async () => {
     await business.login(input);
      expect(databaseMock.findUserByEmail).toBeCalledTimes(1)
    });

    test("Sucess case:: authenticator call", async () => {
      await business.login(input);
       expect(authenticator.generateToken).toBeCalledTimes(1)
     });
    
     test("Sucess case:: hashManager call", async () => {
      await business.login(input);
       expect(hashManager.verifyHash).toBeCalledTimes(1)
     });

    test("Error: wrong password", async () => {
      input.password = "123";
      try {
        await business.login(input);
      } catch (error: any) {
        expect(error.message).toBe("Invalid password, try again");
        expect(error.statusCode).toBe(406);
      }
    });
  });
});
