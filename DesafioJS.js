var nome;
var qtdXP;
var nivel;
var opcao;

do{
    nome = prompt("Digite o nome do herói: ");
    qtdXP = parseInt(prompt("Digite a quantidade de XP atual do herói: "));
    if (0 < qtdXP <= 1000){
        nivel = "Ferro";
    }
    else if (1001 < qtdXP <= 2000) {
        nivel = "Bronze";
    }
    else if (2001 < qtdXP <= 5000) {
        nivel = "Prata";
    }
    else if (5001 < qtdXP <= 7000) {
        nivel = "Ouro";
    }
    else if (7001 < qtdXP <= 8000) {
        nivel = "Platina";
    }
    else if (8001 < qtdXP <= 9000) {
        nivel = "Ascendente";
    }
    else if (9001 < qtdXP <= 10000) {
        nivel = "Imortal";
    }
    else if (qtdXP >= 10001){
        nivel = "Radiante";
    }
    else{
        print("digite valores válidos.");
    }


    opcao = prompt("Digite 1 para continuar e 2 para sair.");
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
} while(opcao != 2);
