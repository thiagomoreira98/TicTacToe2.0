var qntPlayers = 0; //quantidade de players
var level = 0; //nivel de dificuldade

//Função para verificar a quantidade de players
function quantifyPlayers(){
    qntPlayers = prompt("Selecione:\n1 - Jogar com CPU\n2 - Jogar com Amigo");
    console.log(qntPlayers);

   while((qntPlayers != 1) && (qntPlayers != 2) && (qntPlayers != null)){
        alert("Opção Inválida!\nSelecine novamente!");
        quantifyPlayers();
    }
}

//Seleciona se o player 1 quer ser X ou O
function whoStart(){
    contPlayer = prompt("Player 1 Escolha:\n1 - X\n2 - O");
    
    while((contPlayer != 1) && (contPlayer != 2)  && (contPlayer != null)){
        alert("Opção Inválida!");
        whoStart();
    }
}

//Função que seleciona o nivel de dificuldade da CPU
function whatCpuLevel(){
    level = prompt("Nivel de Dificuldade:\n1 - Easy\n2 - Normal");

    while((level != 1) && (level != 2) && (level != null)){
        alert("Opção Inválida!\nSelecione Novamente!");
        whatCpuLevel();
    }
}

//Função para iniciar o jogo
function startGame(){
    somaDraw = 0;
    somaWinO = 0;
    somaWinX = 0;
    document.getElementById("aX").innerHTML = "0";
    document.getElementById("aO").innerHTML = "0";
    document.getElementById("aDraw").innerHTML = "0";
    document.getElementById("modalResult").style.display = "none";

    drawO = 0;
    drawX = 0;
    contMoves = 0;
    for(var i = 0; i < 9; i++){
        imgsId = "home"+i
        document.getElementById(imgsId).src = "../public/images/branco.png";
        document.getElementById(imgsId).setAttribute("val", "branco");
        document.getElementById(imgsId).setAttribute("onclick", "inGame(this.id)");
    }
    
    //Iniciando o jogo
    quantifyPlayers();
    if(qntPlayers != null){
        if(qntPlayers == 1){
            whatCpuLevel();
            if(level != null){
                whoStart();
                chkIfPromptIsNull()    
            }
        }
        else if(qntPlayers == 2){
            whoStart();
            chkIfPromptIsNull()
        }
       
    }
}

//Função para reiniciar o jogo
function restartGame(){
    document.getElementById("modalResult").style.display = "none";
    drawO = 0;
    drawX = 0;
    contMoves = 0;
    for(var i = 0; i < 9; i++){
        imgsId = "home"+i
        document.getElementById(imgsId).src = "../public/images/branco.png";
        document.getElementById(imgsId).setAttribute("val", "branco");
        document.getElementById(imgsId).setAttribute("onclick", "inGame(this.id)");
    }

    if(qntPlayers == 2){
        whoStart();
        chkIfPromptIsNull();
    }   
}

//funcão para verificar se o usuario clicou em cancelar em algum prompt
function chkIfPromptIsNull(){
    if((qntPlayers == null) || (level == null) || (contPlayer == null)){
        qntPlayers = "semValor";
        level = "semValor";
        contPlayer = "semValor";
        for(var i = 0; i < 9; i++){
            imgsId = "home"+i;
            document.getElementById(imgsId).setAttribute("onclick", "");
        }
    }
}