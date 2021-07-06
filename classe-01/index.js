const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const encontrados = cidades.filter((x) => {
    if (x.length <= 8) {
        return true;
    } else {
        return false
    }
});
let alterastring = encontrados.join(", ");

console.log(alterastring);
