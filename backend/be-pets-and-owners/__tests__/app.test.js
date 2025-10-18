// write your tests in here!
const db = require("../db/connection");
const seed = require("../db/seeding/seed");
const data = require("../db/data/test-data");
const request = require("supertest");
const app = require("../app");

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return db.end();
});

describe("/api/owners/:id", () => {
  test("GET - 200: Responds with owner with corresponding ID", () => {
    return request(app)
      .get("/api/owners/1")
      .expect(200)
      .then(({ body }) => {
        const { name, age } = body.owner;
        expect(typeof name).toBe("string");
        expect(typeof age).toBe("number");
      });
  });
});

describe("/api/owners", () => {
  test("GET - 200: Responds with all owners", () => {
    return request(app)
      .get("/api/owners")
      .expect(200)
      .then(({ body }) => {
        body.owners.forEach((owner) => {
          expect(typeof owner.name).toBe("string");
          expect(typeof owner.age).toBe("number");
        });
        expect(body.owners.length).not.toBe(0);
      });
  });
});

describe("/api/owners/:owner_id/pets", () => {
  test("GET -200: Responds with all pets of given owner", () => {
    return request(app)
      .get("/api/owners/1/pets")
      .expect(200)
      .then(({ body }) => {
        body.pets.forEach((pet) => {
          expect(typeof pet.name).toBe("string");
          expect(typeof pet.avatar_url).toBe("string");
          expect(typeof pet.fave_food).toBe("string");
          expect(typeof pet.temperament).toBe("string");
          expect(typeof pet.owner).toBe("number");
          expect(typeof pet.age).toBe("number");
        });
        expect(body.pets.length).not.toBe(0);
      });
  });
});

describe("/api/pets", () => {
  test("GET -200: Responds with all pets of given temparement", () => {
    return request(app)
      .get("/api/pets?temperament=grumpy")
      .expect(200)
      .then(({ body }) => {
        expect(body.pets.length).not.toBe(0);
        body.pets.forEach((pet) => {
          expect(typeof pet.name).toBe("string");
          expect(typeof pet.avatar_url).toBe("string");
          expect(typeof pet.fave_food).toBe("string");
          expect(typeof pet.temperament).toBe("string");
          expect(typeof pet.owner).toBe("number");
          expect(typeof pet.age).toBe("number");
          expect(pet.temperament).toBe("grumpy");
        });
      });
  });
});

describe("/api/owners/:id", () => {
  test("GET - 200: Responds with pet with corresponding ID", () => {
    return request(app)
      .get("/api/pets/1")
      .expect(200)
      .then(({ body }) => {
        const { name, avatar_url, fave_food, owner, age, temperament } =
          body.pet;
        expect(typeof name).toBe("string");
        expect(typeof avatar_url).toBe("string");
        expect(typeof fave_food).toBe("string");
        expect(typeof owner).toBe("number");
        expect(typeof age).toBe("number");
        expect(typeof temperament).toBe("string");
      });
  });
});

describe("/api/owners/:owner_id", () => {
  test("PATCH - 200: Responds with updated owner age and name", () => {
    return request(app)
      .patch("/api/owners/1")
      .send({
        name: "Aragorn",
        age: 85,
      })
      .expect(200)
      .then(({ body }) => {
        console.log(body);
        const { name, age } = body.owner;
        expect(name).toBe("Aragorn");
        expect(age).toBe(85);
      });
  });
});

describe("/api/owners", () => {
  test("POST - 201: Successfully inserted an owner", () => {
    return request(app)
      .post(`/api/owners`)
      .send({
        name: "Gollum",
        age: 590,
      })
      .expect(201)
      .then(({ body }) => {
        const { name, age } = body.owner;
        expect(name).toBe("Gollum");
        expect(age).toBe(590);
      });
  });
});
describe("/api/owners/:owner_id/pets", () => {
  test("POST - 201: Successfully inserted a pet to an owner", () => {
    return request(app)
      .post(`/api/owners/1/pets`)
      .send({
        name: "Donkey",
        avatar_url: "",
        fave_food: "apples",
        owner: 1,
        age: 10,
        temperament: "sassy",
      })
      .expect(201)
      .then(({ body }) => {
        const { name, avatar_url, fave_food, owner, age, temperament } =
          body.pet;
        expect(name).toBe("Donkey");
        expect(avatar_url).toBe("");
        expect(fave_food).toBe("apples");
        expect(owner).toBe(1);
        expect(age).toBe(10);
        expect(temperament).toBe("sassy");
      });
  });
});
