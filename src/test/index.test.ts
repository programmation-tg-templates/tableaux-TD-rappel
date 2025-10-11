// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { analyserPlage } from "../index";

describe("analyserPlage génère une plage", () => {
  test("vide", () => {
    expect(analyserPlage(0, 0)).toBe("plage vide");
    expect(analyserPlage(1, 0)).toBe("plage vide");
    expect(analyserPlage(-1, 0)).toBe("plage vide");
  });
  test("avec un zéro et des positifs", () => {
    expect(analyserPlage(0, 4)).toBe("traités=4;dernier=6;somme=9;positifs=3;negatifs=0;zeros=1");
  });

  test("avec uniquement des positifs", () => {
    expect(analyserPlage(2, 3)).toBe("traités=3;dernier=2;somme=9;positifs=3;negatifs=0;zeros=0");
  });

  test("avec des positifs et des négatifs", () => {
    expect(analyserPlage(-2, 3)).toBe("traités=3;dernier=0;somme=-1;positifs=0;negatifs=1;zeros=2");
    expect(analyserPlage(-1, 5)).toBe("traités=5;dernier=6;somme=9;positifs=3;negatifs=1;zeros=1");
  });

  test("avec uniquement des négatifs", () => {
    expect(analyserPlage(-5, 2)).toBe("traités=2;dernier=-2;somme=-7;positifs=0;negatifs=2;zeros=0");
  });

  test("avec un seul élément", () => {
    expect(analyserPlage(3, 1)).toBe("traités=1;dernier=6;somme=6;positifs=1;negatifs=0;zeros=0");
  });
});
