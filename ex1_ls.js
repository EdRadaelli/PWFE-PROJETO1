function obterListaVeiculo(){
    return JSON.parse(localStorage.getItem('veiculo')) || [];
}

function salvarListaVeiculo(lista){
    localStorage.setItem('veiculo', JSON.stringify(lista));
}

let listaVeiculo = obterListaVeiculo();

function adicionarVeiculo(){
    modelo = document.getElementById("modeloVeiculo").value;
    preco = document.getElementById("Preco").value;
    entrada = document.getElementById("valorEntrada").value;
    
    if(modelo && preco && entrada){
        let resto = preco - entrada;
        let parcelas = (resto/10);
        let juros = parcelas + (parcelas * 0.10);

        listaVeiculo.push({modelo, preco, entrada, resto, juros});
        salvarListaVeiculo(listaVeiculo);
        limparCampos();
    }
}

function limparCampos(){
    document.getElementById("modeloVeiculo").value = "";
    document.getElementById("Preco").value = "";
    document.getElementById("valorEntrada").value = "";
}

function Parcelar(){
    let vazio = "";
    for(i = 0; i < listaVeiculo.length; i++){
        vazio += listaVeiculo[i].modelo + " • Preço R$: " + listaVeiculo[i].preco + " • Entrada R$: " + listaVeiculo[i].entrada 
        + " • Resto R$: " + listaVeiculo[i].resto + " • Parcelas: 10x de R$ " + listaVeiculo[i].juros + " com juros." + "<br>";
    }
    document.getElementById("comprovante").innerHTML = vazio;
}
