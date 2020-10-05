import chai from "chai";
import { expect } from "chai";
import { getYear, getHola } from "../controllers/helpers";
import IndexController from "../controllers/indexController";

describe("Helpers", () => {
  // teastea el método getYear
  describe("Test getYear function", () => {
    const year = getYear();
    const myYear = new Date().getFullYear();
    it("Devuelve un número", () => {
      expect(year).to.be.a("number");
    });
    it("Devuelve año en curso", () => {
      expect(year).to.be.equal(myYear);
    });
    it("Otras comparaciones", () => {
      expect(year).to.be.at.most(myYear + 1);
      expect(year).to.be.at.least(myYear - 1);
      expect(year).to.be.within(2000, 2100);
      expect(year).not.to.be.NaN;
    });
  });

  describe("Test getHola function", () => {
    const message = getHola();

    it("Devuelve un string", () => {
      expect(message).to.be.a("string");
    });
    it("Devuelve un string", () => {
      expect(message).to.have.string("Hola");
      expect(message).to.not.have.string("Adios");
    });
  });

  describe("Test tipos de datos", () => {
    it("Comparar tipos", () => {
      const obj = {};
      expect(obj).to.be.a("Object");
      expect(obj).to.not.be.a("Array");
      let _null;
      expect(_null).to.be.undefined;
      _null = null;
      expect(_null).to.be.null;
    });
    it("Comparar tipos booleanos", () => {
      const obj = false;
      expect(obj).to.be.false;
    });
    it("Comparar objetos", () => {
      const obj1 = { name: "jorge" };
      const obj2 = { name: "jorge" };

      expect(obj1).to.have.property("name");
      expect(obj1).to.deep.equal(obj2);
      expect(obj1).to.have.keys("name");
      expect(obj1).to.have.any.keys("name");
      expect(obj1).to.have.all.keys("name");

      expect(obj1).to.be.instanceOf(Object);
      const instancia = new IndexController();
      expect(instancia).to.be.instanceOf(IndexController);
    });
    it("Comparar errores", () => {
      const generateError = () => {
        throw new TypeError("Error de Database");
      };
      expect(generateError).to.throw();
      expect(generateError).to.throw(TypeError);
      expect(generateError).to.throw("Error");
      const error = new TypeError("ERROR de DB");
      error.code = 500;
      const generateError2 = () => {
        throw error;
      };
      expect(generateError2).to.throw(error);
      expect(generateError2).to.throw(TypeError).with.property("code", 500);
    });
  });
});
