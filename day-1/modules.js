const fs = require('fs')

// fs.writeFile("demo1.txt", "Hello World", (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log("Successful");
//   }
// })

// fs.appendFile("demo1.txt", ", My name is Sharif", (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log("Successful");
//   }
// })

// fs.readFile("demo1.txt", "utf-8", (data, error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(data);
//   }
// })

// fs.rename("demo1.txt", "file.txt", (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log("Successful");
//   }
// })

fs.unlink("file.txt", (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Successful");
  }
})