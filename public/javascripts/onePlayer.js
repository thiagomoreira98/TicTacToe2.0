var cpu = 0;

//Função que verifica quem é o proximo a jogar no modo um jogador
function whoNextOnePlayer(id){
    if(contPlayer == 1){
        player = "x";
        cpu = "o";
    }
    else{
        player = "o";
        cpu = "x";
    }
    setSrcAndValPlayer(id);
    contMoves++;
}