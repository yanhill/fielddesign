
let reservatorio = document.getElementById('reservatorio');
let poco = document.getElementById('poco');
let escoamento = document.getElementById('escoamento');
let processo = document.getElementById('processo');
let custo = document.getElementById('custo');

let btnUpdate = document.getElementById('buttonUpdate');
let btnBack = document.getElementById('buttonBack');
let btnVazao = document.getElementById('btnVazao')

let reservatorioLi = document.getElementById('reservatorioLi');

let parametresContainer = document.getElementById('parametresContainer');

let nameLabelOne = document.getElementById('nameLabelOne');
let nameLabelTwo = document.getElementById('nameLabelTwo');

let bgModal = document.getElementById('bgModal');
let modalTitle = document.getElementById('modalTitle');
let pacoReservatorio = document.getElementById('pacoReservatorio');
let pacoPoco = document.getElementById('pacoPoco');
let pacoEscoamento = document.getElementById('pacoEscoamento');
let pacoFluido = document.getElementById('pacoFluido');

let pacos = document.getElementsByClassName('paco');

var ipInput;
var peInput;
var diametroInput;
var comprimentoInput;

var position = 0;

let calculateVazao = false;

btnBack.addEventListener('click', function(){
    if(position > 0){
        position--;
        startCalculateVazao()
    }
    console.log(position);
});

btnUpdate.addEventListener('click', function(){
   // saveInputs();
    if(position < 4){    
        position++;
        startCalculateVazao();    
    }
    console.log(position);
});

btnVazao.addEventListener('click', function(){
    calculateVazao = true;
    position == 0;
    startCalculateVazao();
});



function saveInputs(){

    if(position == 0){
        ipInput = document.getElementById('ipInput').value;
        peInput = document.getElementById('peInput').value;

        document.getElementById('ipInput').value= '';
        document.getElementById('peInput').value = '';

        console.log(ipInput);
        console.log(peInput);
    }

    if(position == 1){
        diametroInput = document.getElementById('diametroInput').value;
        comprimentoInput = document.getElementById('comprimentoInput').value;
    
        document.getElementById('diametroInput').value= '';
        document.getElementById('comprimentoInput').value = '';
    
        console.log(diametroInput);
        console.log(comprimentoInput);
        }
}

function startCalculateVazao(){

    if(position == 0){         
    btnUpdate.innerHTML = 'Avançar';
        if(document.getElementById('containerPFInal')){
            containerPFInal.remove();
        }

        btnBack.style.border ='none';
        btnBack.innerHTML ='';

        for(let i = 0 ; i < pacos.length ; i++){
            pacos[i].style.color = "#999";
        }
        pacoReservatorio.style.color = "#e8ff45";

        modalTitle.innerHTML = 'RESERVATÓRIO';
        nameLabelOne.innerHTML = "Ip"
        nameLabelTwo.innerHTML = "Pe"
        bgModal.style.display = 'flex'
    
        //this.style.background = "rgb(0, 199, 0)";
        //reservatorio.style.border = "1px solid rgb(0, 199, 0)"
        //reservatorio.style.color = "black"

    }

    if(position == 1){
        
        btnUpdate.innerHTML = 'Avançar';

        document.getElementById('ipInput').id = 'diametroInput';
        document.getElementById('peInput').id = 'comprimentoInput';

        if(document.getElementById('containerPFInal')){
            containerPFInal.remove();
        }

        btnBack.style.border ='1px solid #555';
        btnBack.innerHTML ='Voltar';

        for(let i = 0 ; i < pacos.length ; i++){
            pacos[i].style.color = "#999";
        }
        pacoPoco.style.color = "#e8ff45";

        modalTitle.innerHTML = 'POÇO';
        nameLabelOne.innerHTML = "Diametro"
        nameLabelTwo.innerHTML = "Comprimento"
        bgModal.style.display = 'flex'
    
        //this.style.background = "rgb(0, 199, 0)";
        //poco.style.border = "1px solid rgb(0, 199, 0)"
        //poco.style.color = "black"
    }

    if(position == 2){

        btnUpdate.innerHTML = 'Avançar';

        if(!document.getElementById('containerPFInal')){
            let containerPFinal = document.createElement('div');
            containerPFinal.className = 'parameter-container';
            containerPFinal.id = 'containerPFInal'

            let nameLabelThree = document.createElement('div');
            nameLabelThree.className = 'name-label';
            nameLabelThree.id = 'PFinalLabel';

            let input = document.createElement('input');
            
            parametresContainer.appendChild(containerPFinal);
            containerPFinal.appendChild(nameLabelThree);
            containerPFinal.appendChild(input);

            nameLabelThree.innerHTML= 'Pfinal';
        }

        for(let i = 0 ; i < pacos.length ; i++){
            pacos[i].style.color = "#999";
        }
        pacoEscoamento.style.color = "#e8ff45";

        modalTitle.innerHTML = 'Escoamento';
        nameLabelOne.innerHTML = "Diametro";
        nameLabelTwo.innerHTML = "Comprimento"
        

        //this.this.style.background = "rgb(0, 199, 0)";
        //escoamento.style.border = "1px solid rgb(0, 199, 0)";
        //escoamento.style.color = "black";

        bgModal.style.display = 'flex';
    }

    if(position == 3){
        if(document.getElementById('containerPFInal')){
            containerPFInal.remove();
        }

        btnUpdate.innerHTML = 'Calcular';

        let containerRGD = document.createElement('div');
        containerRGD.className = 'parameter-container';

        let containerCO2 = document.createElement('div');
        containerCO2.className = 'parameter-container';

        for(let i = 0 ; i < pacos.length ; i++){
            pacos[i].style.color = "#999";
        }
        pacoFluido.style.color = "#e8ff45";

        modalTitle.innerHTML = 'FLUIDO';
        nameLabelOne.innerHTML = "API";
        nameLabelTwo.innerHTML = "Viscosidade";

        //this.style.background = "rgb(0, 199, 0)";
        //processo.style.border = "1px solid rgb(0, 199, 0)"
        //processo.style.color = "black"

        bgModal.style.display = 'flex'

       
    }
}
/*
custoLi.addEventListener('click', function(){
    let flowlineContainer = document.createElement('div');
    flowlineContainer.className = 'parameter-container';

    let FPSOContainer = document.createElement('div');
    FPSOContainer.className = 'parameter-container';

    let nameLabelThree = document.createElement('div');
    nameLabelThree.className = 'name-label';

    let nameLabelFour = document.createElement('div');
    nameLabelFour.className = 'name-label';

    let input = document.createElement('input');
    let input2 = document.createElement('input');

    parametresContainer.appendChild(flowlineContainer);
    parametresContainer.appendChild(FPSOContainer);
    flowlineContainer.appendChild(nameLabelThree);
    flowlineContainer.appendChild(input);
    FPSOContainer.appendChild(nameLabelFour);
    FPSOContainer.appendChild(input2);

    modalTitle.innerHTML = 'CUSTO';

    nameLabelOne.innerHTML = "Poço";
    nameLabelTwo.innerHTML = "ANM";
    nameLabelThree.innerHTML= 'Flowline';
    nameLabelFour.innerHTML= 'FPSO';

    this.style.background = "rgb(0, 199, 0)";
    custo.style.border = "1px solid rgb(0, 199, 0)"
    custo.style.color = "black"

    bgModal.style.display = 'flex'
});
*/
