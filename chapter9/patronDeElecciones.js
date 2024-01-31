let conteoAnimales = /\b\d+ (cerdo|vaca|pollo|perro)s?\b/;
console.log(conteoAnimales.test("15 cerdos"));
console.log(conteoAnimales.test("15 cerdopollos"));
console.log(conteoAnimales.test("3 perros bien veigas"));