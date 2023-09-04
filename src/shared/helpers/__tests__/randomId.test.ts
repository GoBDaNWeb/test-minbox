import { randomId } from "../randomId";

describe("randomId Function", () => {
  it("генерация id указанной длины", () => {
    const idLength = 10;
    const generatedId = randomId(idLength);

    expect(typeof generatedId).toBe("string");

    expect(generatedId.length).toBe(idLength);
  });

  it("генераци уникальных id для нескольких вызовов", () => {
    const idLength = 10;
    const id1 = randomId(idLength);
    const id2 = randomId(idLength);

    expect(id1).not.toEqual(id2);
  });
});
