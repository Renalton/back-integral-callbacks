const  data = "Estou aprendendo JavaScript na Cubos Academy";

const fs = require('fs');

fs.writeFile("./classe-07/meuarquivo.txt", data, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("Arquivo gravado com sucesso!");
    }
});

