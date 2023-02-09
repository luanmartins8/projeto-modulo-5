const readLineSync = require("readline-sync");

const cssList = [];

const response = () => {
  let newEntry = true;
  let input = "";

  while (newEntry) {
    input = readLineSync
      .question("Digite as propriedades CSS. Ou digite 'sair' para encerrar:")
      .toLowerCase();

    if (input === "") {
      console.log("Comando inválido");
    }else if (input !== 'sair') {
      cssList.push(input);
    } else {
      newEntry = false;
    }
  }
  console.log(cssList.sort());
};
response();
