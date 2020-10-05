import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import { getData } from "../controllers/indexController";
import { deleteItem } from "../controllers/deleteController";


chai.use(chaiHttp);

// CONFIGURAR CHAI
chai.should();

describe("Get 404", () => {
  // organizar las rutas de la misma forma que estan organizadas las rutas

  it("Debe recibirse un codigo 404", () => {
    // Metodo de chai-http
    return chai
      .request(app)
      .get("/bu")
      .then((res) => {
        res.should.have.status(404);
        (err) => {
          Promise.reject();
        };
      });
  });
});

describe("Http Index", () => {
  describe("GET /", () => {
    it("Debe recibirse un codigo 200", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

describe("Http Index", () => {
  describe("Control de los datos del array", () => {
    let lastId; 
    beforeEach((done) => {
      chai
        .request(app)
        .post("/new")
        .send({
          subject: "Registro para test",
          description: "Esta es la descripcion",
        })
        .end((err, res) => {
          done();
        });
    });
    afterEach((done)=>{
      deleteItem(lastId)
      .then(()=>{
        done();
      })
    })
    it("Debe recibirse un array con los ToDos", (done) => {
      getData().then((data) => {
        expect(data).not.to.be.empty;
        lastId = data[data.length-1].id
        
        done();
      });
    });
  });
});
