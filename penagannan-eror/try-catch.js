try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

/* output
Awal blok try
Akhir blok try
*/

try {
  console.log("Awal blok try"); // (1)
  errorCode; // (2)
  console.log("Akhir blok try"); // (3)
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
