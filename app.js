//lógica e DOM da section endereço

let tituloEndereco = document.getElementById("titulo-endereco");
tituloEndereco.textContent = "Endereço residencial";
let cep = document.getElementById("label-1");
cep.textContent = "CEP";
let rua = document.getElementById("label-2");
rua.textContent = "Rua";
let numero = document.getElementById("label-3");
numero.textContent = "Número";
let cidade =  document.getElementById("label-4");
cidade.textContent = "Cidade";
let estado =  document.getElementById("label-5");
estado.textContent = "Estado";  

//selecionar o arquivo
function selecionarArquivo(){
    console.log("função chamada")
    let arquivo = document.querySelector('.file-upload-area');
        
        if(arquivo){
           arquivo.addEventListener('click', function(){
            console.log("Area de arquivo foi clicada");
            document.getElementById('file-input').click();
           });
        }else{
            console.log("missão falhou: elemento file-upload-are não encotrado");
        }
  
}
selecionarArquivo();  //chamada da função

//funçao que altera a cor dos campos de entradas
function alterarCor(id){
    let entrada = document.getElementById(`entrada-${id}`);
    entrada.addEventListener('focus', function(){
        entrada.classList.remove('bg-secondary', 'bg-opacity-25');
        entrada.classList.add('bg-light')
    });
    entrada.addEventListener('blur', function() {
        if (!entrada.value) {
            entrada.classList.remove('bg-light');
            entrada.classList.add('bg-secondary', 'bg-opacity-25');
        }
    });
}
//chamadas com parametros
alterarCor(1);
alterarCor(2);
alterarCor(3);
alterarCor(4);
alterarCor(5);

//lógica e DOM do section trilhas 
let tituloTrilhas = document.getElementById("titulo-Trilhas");
tituloTrilhas.textContent = "Trilhas de Aprendizagem";

