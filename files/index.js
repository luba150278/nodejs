import fs from "fs";

fs.readFile("./text.txt", "utf8", (error, data) => {
  error ? error : null; //обработка ошибок

  fs.mkdir("./files", () => {
    fs.writeFile("./files/text2.txt", `${data} new data`, (error) => {
      error ? error : null;
    });
  });
});

fs.rm("./text3.txt", () => {
  console.log("deleted");
});
