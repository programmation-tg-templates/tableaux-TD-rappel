# Tableaux - Rappel des séquences précédentes

## Consignes

Implémentez une fonction exportée dans `src/index.ts` avec la signature suivante :

- nom : `analyserPlage`
- paramètres :
  - `debut: number` — valeur de départ
  - `nombre: number` — nombre d'itérations à effectuer (>= 0)
- retour : une chaîne de caractères formatée contenant les champs suivants séparés par `;` :
  `traités=<traités>;dernier=<dernier>;somme=<somme>;positifs=<positifs>;negatifs=<negatifs>;zéros=<zéros>`.

Comportement (pour chaque étape i de 0 à nombre-1) :

- calculez `n = debut + i` ;
- si `n === 0` → valeur calculée = 0 ;
- sinon si `n % 2 === 0` (pair) → valeur calculée = `n / 2` ;
- sinon si `n % 3 === 0` → valeur calculée = `n * 2` ;
- sinon → valeur calculée = `n + i` (utiliser l'indice i) ;
- mettez à jour la somme (`somme`), comptez le nombre de valeurs calculées positives/négatives/zéros;
- `traités` est le nombre d'éléments réellement traités (égal à `nombre`);
- `dernier` est la dernière valeur calculée.

Cas particuliers :

- si `nombre === 0` → renvoyer : `plage vide`

Contraintes pédagogiques :

- utilisez des opérateurs arithmétiques (`+`, `-`, `*`, `/`, `%`) ;
- utilisez des conditions (`if` / `else`) ;
- utilisez une boucle `for` pour parcourir les `nombre` étapes.

## Exemples attendus (chaînes de retour) :

- `analyserPlage(0, 0)` → `plage vide`
- `analyserPlage(0, 4)` → valeurs calculées : 0, 2, 1, 6 → `traités=4;dernier=6;somme=9;positifs=3;negatifs=0;zeros=1`
- `analyserPlage(-2, 3)` → valeurs calculées : -1, 0, 0 → `traités=3;dernier=0;somme=-1;positifs=0;negatifs=1;zeros=2`
