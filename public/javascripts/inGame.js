//Função chamada quando o usuário clica na div
function inGame(id){
    getAttVal(id);
    if(getVal == "branco"){
        if(qntPlayers == 1){
            whoNextOnePlayer(id);
            setVetImg();
            chkResult();
            cpuLevel();
            setVetImg();
            chkResult();
        }
        else{
            whoNextTwoPlayers(id);
            setVetImg();
            chkResult();
        }  
    }
    console.log("ContMoves: "+contMoves);
    console.log("drawX: "+drawX);
    console.log("drawO: "+drawO);
}