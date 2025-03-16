import { isTriplet } from "./pythagoras";

const MAX: number = 100;
for (let a = 1; a < MAX; a++) {
  for (let b = 1; b < MAX; b++) {
    for (let c = 1; c < MAX; c++) {
      if (isTriplet(a, b, c)) {
        console.log(`${a}²+${b}²=${c}²`);
      }
    }
  }
}
