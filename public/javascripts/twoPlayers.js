//Função que verifica quem é o proximo a jogar no modo dois jogadores
function whoNextTwoPlayers(id){
    if(contPlayer % 2 != 0){
        player = "x";
        proximo = "o";
        contPlayer++;
        contMoves++;
    }
    else{
        player = "o";
        proximo = "x";
        contPlayer++;
        contMoves++;
    }
    setSrcAndValPlayer(id);
}