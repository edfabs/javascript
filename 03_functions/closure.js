function multiplicador(factor) {
  return numero => numero * factor;
}

let duplicar = multiplicador(2);
console.log(duplicar(5));
// → 10