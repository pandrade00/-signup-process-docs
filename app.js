//lógica e DOM da section endereço

let tituloEndereco = document.getElementById("titulo-endereco");
tituloEndereco.textContent = "Endereço residencial";
let cep = document.getElementById("label-cep");
cep.textContent = "CEP";
let rua = document.getElementById("label-rua");
rua.textContent = "Rua";
let numero = document.getElementById("label-numero");
numero.textContent = "Número";
let cidade =  document.getElementById("label-cidade");
cidade.textContent = "Cidade";
let estado =  document.getElementById("label-estado");
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
        }else {
            console.error(`Elemento com id entrada-${id} não encontrado!`);
        }
    });
}
//chamadas com parametros
alterarCor(1);
alterarCor(2);
alterarCor(3);
alterarCor(4);
alterarCor(5);
alterarCor(6);
alterarCor(7);
alterarCor(8);
alterarCor(9);
alterarCor(10);
alterarCor(11);


//lógica e DOM do section trilhas 
let tituloTrilhas = document.getElementById("title-trilhas");
tituloTrilhas.textContent = "Trilhas de Aprendizagem";

const telefoneInput = document.getElementById('entrada-6');
const cpfInput = document.getElementById('entrada-3');

const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    cpfInput.addEventListener('change', function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
        
        if (value.length > 11) {
            value = value.slice(0, 11); // Limita a 11 caracteres
        }
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        
        e.target.value = value;
    });

    telefoneInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
        
        if (value.length > 11) {
            value = value.slice(0, 11); // Limita a 11 caracteres (padrão Brasil: DDD + 9 dígitos)
        }
        
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        
        e.target.value = value;
    });
