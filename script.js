// 1 Uzduotis
var character = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];

console.log("Pirmas personazas: " + character[0]);
console.log("Paskutinis personazas: " + character[character.length - 1]);

var number = prompt("Iveskite skaiciu nuo 1 iki 6");
var index = parseInt(number) - 1;
if (index >= 0 && index < character.length) {
    console.log("Veikejas pagal pasirinkta skaiciu: " + character[index]);
} else {
    console.log("Blogas skaicius. Iveskite nuo 1-6");
}

// 2 Uzduotis

var skaiciuMasyvas = [2, 1, 3, 11, 4, 5, 6, 7, 8, 9, 10];
var suma = 0;

for (var i = 0; i < skaiciuMasyvas.length; i++) {
    suma += skaiciuMasyvas[i];
}
var vidurkis = suma / skaiciuMasyvas.length;


var largest = skaiciuMasyvas[0];
for (var i = 0; i < skaiciuMasyvas.length; i++) {
  if (skaiciuMasyvas[i] > largest ) {
    largest = skaiciuMasyvas[i];
  }
}
console.log("Skaiciu suma:", suma);
console.log("Skaiciu vidurkis:", vidurkis)
console.log("Didziausias skaicius:", largest)
console.log("Maziausias skaicius:", smallest)


