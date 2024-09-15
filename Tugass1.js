//Array.prototype.map()
//digunakan untuk membuat array baru dengan hasil pemanggilan fungsi tertentu pada setiap elemen dalam array lama.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

//Array.prototype.filter()
//digunakan untuk membuat array baru dengan semua elemen yang memenuhi kondisi dari fungsi yang diberikan.
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//Array.prototype.reduce()
//digunakan untuk mengakumulasikan nilai array menjadi satu nilai tunggal dengan menjalankan fungsi pada setiap elemen array dari kiri ke kanan.
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10


//String.prototype.includes()
//digunakan untuk memeriksa apakah string tertentu berisi substring yang ditentukan.
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox")); // Output: true
console.log(sentence.includes("cat")); // Output: false


//String.prototype.toUpperCase()
//mengubah semua huruf dalam string menjadi huruf besar.
const str = "hello world";
const upperStr = str.toUpperCase();
console.log(upperStr); // Output: "HELLO WORLD"


//String.prototype.split()
//membagi string menjadi array substring berdasarkan pembatas yang ditentukan.
const str1 = "apple,banana,cherry";
const fruits = str1.split(",");
console.log(fruits); // Output: ["apple", "banana", "cherry"]


//Math.max()
//mengembalikan nilai terbesar dari sekumpulan angka yang diberikan.
const maxNumber = Math.max(10, 20, 30, 40);
console.log(maxNumber); // Output: 40


//Math.random()
//menghasilkan angka acak antara 0 (inklusif) dan 1 (eksklusif).
const randomNumber = Math.random();
console.log(randomNumber); 


//Array.prototype.push()
//menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang baru dari array.
const fruits1 = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits1); // Output: ["apple", "banana", "cherry"]


//Array.prototype.pop()
//menghapus elemen terakhir dari array dan mengembalikan elemen yang dihapus.
const fruits2 = ["apple", "banana", "cherry"];
const lastFruit = fruits2.pop();
console.log(lastFruit); // Output: "cherry"
console.log(fruits2); // Output: ["apple", "banana"]