const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
let i = 0;

console.log(`Cada jogador terá ${(1000 * (10 / jogadores.length)) /1000} segundo${(1000 * (10 / jogadores.length)) === 1? "" : "s"} para jogar`);
function meusJogadores(){
    
    if(i < jogadores.length){
        console.log(jogadores[i]);
        i++;
    }else{
        console.log("Fim do jogo!");
        clearInterval(intervalId);
    }
    
}
meusJogadores();
const intervalId = setInterval(meusJogadores, (1000 * (10 / jogadores.length)));


