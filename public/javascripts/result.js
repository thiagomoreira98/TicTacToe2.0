var drawX = 0; //verificando quantidade de vezes que a função chkWinnerX foi chamada
var drawO = 0; //verificando quantidade de vezes que a função chkWinnerO foi chamada
var somaWinX = 0; //Contando a quantidade de vitórias do player X
var somaWinO = 0; //Contando a quantidade de vitórias do player O
var somaDraw = 0; //Contando a quantidade de empates
var vencedorX = false;
var vencedorO = false;
var semVencedor = false;
var verif1 = false;
var verif2 = false;
var verif3 = false;
var verif4 = false;
var verif5 = false;
var verif6 = false;
var verif7 = false;
var verif8 = false;
var verif9 = false;
var verif10 = false;
var verif11 = false;
var verif12 = false;
var verif13 = false;
var verif14 = false;
var verif15 = false;
var verif16 = false;
var verif17 = false;
var verif18 = false;
var verif19 = false;
var verif20 = false;
var verif21 = false;
var verif22 = false;
var verif23 = false;
var verif24 = false;

//Função para pegar o atributo "val" de todas as img do tabuleiro
function setVetImg(){
    for(var i = 0; i < 9; i++){
        vetImg[i] = document.getElementById("home"+i).getAttribute("val");  
    }
}

//Função para verificar se o player X é o vencedor
function chkIfWinnerX(vet){
    //Linha 1
    if((vet[0] == "x") && (vet[1] == "x") && (vet[2] == "x")){
        winnerX();
    }
    //Linha 2
    else if((vet[3] == "x") && (vet[4] =="x") && (vet[5] == "x")){
        winnerX();
    }
    //Linha 3
    else if((vet[6] == "x") && (vet[7] == "x") && (vet[8] == "x")){
        winnerX();
    }
    //Diagonal primária
    else if((vet[0] == "x") && (vet[4] == "x") && (vet[8] == "x")){
        winnerX();
    }
    //Diagonal secundária
    else if((vet[2] == "x") && (vet[4] == "x") && (vet[6] == "x")){
        winnerX();
    }
    //Coluna 1
    else if((vet[0] == "x") && (vet[3] == "x") && (vet[6] == "x")){
        winnerX();
    }
    //Coluna 2
    else if((vet[1] == "x") && (vet[4] == "x") && (vet[7] == "x")){
        winnerX();
    }
    //Coluna 3
    else if((vet[2] == "x") && (vet[5] == "x") && (vet[8] == "x")){
        winnerX();
    }
    else{
        drawX++;
        return drawX;
    }
}

//Função para verificar se o player O é o vencedor
function chkIfWinnerO(vet){
    //Linha 1
    if((vet[0] == "o") && (vet[1] == "o") && (vet[2] == "o")){
        winnerO();
    }
    //Linha 2
    else if((vet[3] == "o") && (vet[4] =="o") && (vet[5] == "o")){
        winnerO();
    }
    //Linha 3
    else if((vet[6] == "o") && (vet[7] == "o") && (vet[8] == "o")){
        winnerO();
    }
    //Diagonal primária
    else if((vet[0] == "o") && (vet[4] == "o") && (vet[8] == "o")){
        winnerO();
    }
    //Diagonal secundária
    else if((vet[2] == "o") && (vet[4] == "o") && (vet[6] == "o")){
        winnerO();
    }
    //Coluna 1
    else if((vet[0] == "o") && (vet[3] == "o") && (vet[6] == "o")){
        winnerO();
    }
    //Coluna 2
    else if((vet[1] == "o") && (vet[4] == "o") && (vet[7] == "o")){
        winnerO();
    }
    //Coluna 3
    else if((vet[2] == "o") && (vet[5] == "o") && (vet[8] == "o")){
        winnerO();
    }
    else{
        drawO++;
        return drawO;
    }
}

//Função para verificar se deu empate
function chkIfDraw(){
    if(qntPlayers == 1){
        //Se o player jogou 5 vezes e ainda nao ganhou é pq deu empate (modo um jogador)
        if((contMoves == 5) && (drawX == 10) && (drawO == 10)){
            draw();
        }
    }
    else{
        //Se a soma das jogadas dos 2 players deu 9 e nao teve vencedor é pq deu empate
        if((contMoves == 9) && (drawX == 9) && (drawO == 9)){
            draw();
        }
    }
}

//Função para a CPU verificar se o Player irá ganhar na proxima jogada
function chkIfPlayerWinInNextMove(vet){
    //Linha 1
    if((vet[0] == player) && (vet[1] == player)&& (verif23 != true)){
        homeId = "home2";
        getAttVal(homeId);
        verif23 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 1
    else if((vet[1] == player) && (vet[2] ==player) && (verif24 != true)){
        homeId = "home0";
        getAttVal(homeId);
        verif24 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 1
    else if((vet[0] == player) && (vet[2] == player) && (verif1 != true)){
        homeId = "home1";
        getAttVal(homeId);
        verif1 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 2
    else if((vet[3] == player) && (vet[4] == player) && (verif2 != true)){
        homeId = "home5";
        getAttVal(homeId);
        verif2 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 2
    else if((vet[4] == player) && (vet[5] ==player) && (verif3 != true)){
        homeId = "home3";
        getAttVal(homeId);
        verif3 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 2
    else if((vet[3] == player) && (vet[5] == player) && (verif4 != true)){
        homeId = "home4";
        getAttVal(homeId);
        verif4 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 3
    else if((vet[6] == player) && (vet[7] == player) && (verif5 != true)){
        homeId = "home8";
        getAttVal(homeId);
        verif5 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 3
    else if((vet[7] == player) && (vet[8] ==player) && (verif6 != true)){
        homeId = "home6";
        getAttVal(homeId);
        verif6 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);      
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 3
    else if((vet[6] == player) && (vet[8] == player) && (verif7 != true)){
        homeId = "home7";
        getAttVal(homeId);
        verif7 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 1
    else if((vet[0] == player) && (vet[3] == player) && (verif8 != true)){
        homeId = "home6";
        getAttVal(homeId);
        verif8 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 1
    else if((vet[3] == player) && (vet[6] ==player) && (verif9 != true)){
        homeId = "home0";
        getAttVal(homeId);
        verif9 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 1
    else if((vet[0] == player) && (vet[6] == player) && (verif10 != true)){
        homeId = "home3";
        getAttVal(homeId);
        verif10 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 2
    else if((vet[1] == player) && (vet[4] == player) && (verif11 != true)){
        homeId = "home7";
        getAttVal(homeId);
        verif11 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 2
    else if((vet[4] == player) && (vet[7] ==player) && (verif12 != true)){
        homeId = "home1";
        getAttVal(homeId);
        verif12 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 2
    else if((vet[1] == player) && (vet[7] == player) && (verif13 != true)){
        homeId = "home4";
        getAttVal(homeId);
        verif13 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 3
    else if((vet[2] == player) && (vet[5] == player) && (verif14 != true)){
        homeId = "home8";
        getAttVal(homeId);
        verif14 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 3
    else if((vet[5] == player) && (vet[8] ==player) && (verif15 != true)){
        homeId = "home2";
        getAttVal(homeId);
        verif15 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 3
    else if((vet[2] == player) && (vet[8] == player) && (verif16 != true)){
        homeId = "home5";
        getAttVal(homeId);
        verif16 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Primária
    else if((vet[0] == player) && (vet[4] ==player) && (verif17 != true)){
        homeId = "home8";
        getAttVal(homeId);
        verif17 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Primária
    else if((vet[4] == player) && (vet[8] == player) && (verif18 != true)){
        homeId = "home0";
        getAttVal(homeId);
        verif18 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Primária
    else if((vet[0] == player) && (vet[8] == player) && (verif19 != true)){
        homeId = "home4";
        getAttVal(homeId);
        verif19 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Secundária
    else if((vet[6] == player) && (vet[4] ==player) && (verif20 != true)){
        homeId = "home2";
        getAttVal(homeId);
        verif20 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Secundária
    else if((vet[2] == player) && (vet[4] == player) && (verif21 != true)){
        homeId = "home6";
        getAttVal(homeId);
        verif21 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Secundária
    else if((vet[2] == player) && (vet[6] == player) && (verif22 != true)){
        homeId = "home4";
        getAttVal(homeId);
        verif22 = true;
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

//Função para remover o atributo "onclick" de todas as img
function rmOnclick(){
    for(var i = 0; i < 9; i++){
        document.getElementsByClassName("home")[i].removeAttribute("onclick");
        document.getElementsByClassName("home")[i].setAttribute("val", "");
    }
}

//Função para exibir se o ganhador for o player "X"
function winnerX(){   
    rmOnclick();
    somaWinX++;
    document.getElementById("showModalResult").innerHTML = "Player X Wins !!";
    document.getElementById("modalResult").style.display = "block";
    document.getElementById("aX").innerHTML = somaWinX;
    vencedorX = true;
}

//Função para exibir se o ganhador for o player "O"
function winnerO(){                     
    rmOnclick();
    somaWinO++;
    document.getElementById("showModalResult").innerHTML = "Player O Wins !!";
    document.getElementById("modalResult").style.display = "block";
    document.getElementById("aO").innerHTML = somaWinO;
    vencedorO = true;
}

//Função para exibir se deu Empate
function draw(){
    rmOnclick();
    somaDraw++;
    document.getElementById("showModalResult").innerHTML = "Empate !!";
    document.getElementById("modalResult").style.display = "block";
    document.getElementById("aDraw").innerHTML = somaDraw;
    semVencedor = true; 
}

//Função para verificar o resultado
function chkResult(){
    setVetImg();
    chkIfWinnerO(vetImg);
    chkIfWinnerX(vetImg);
    chkIfDraw();
}

//Função para fechar o Modal
function closeModalResult(){
    document.getElementById("modalResult").style.display = "none";
}
