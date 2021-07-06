const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const newArray = frutas.map((x, index) => {

    x = x.toLowerCase();

    return index + ' - ' + x.replace(x.slice(0, 1), x.slice(0, 1).toUpperCase());

});

console.log(newArray);