
let reservatorio = document.getElementById('reservatorio');
let poco = document.getElementById('poco');
let escoamento = document.getElementById('escoamento');
let processo = document.getElementById('processo');
let custo = document.getElementById('custo');

let btnUpdate = document.getElementById('buttonUpdate');
let btnBack = document.getElementById('buttonBack');
let btnVazao = document.getElementById('btnVazao')
let btnCloseWindow = document.getElementById('closeWindow');

let reservatorioLi = document.getElementById('reservatorioLi');

let parametresContainer = document.getElementById('parametresContainer');

let bgModal = document.getElementById('bgModal');
let modalTitle = document.getElementById('modalTitle');
let pacoReservatorio = document.getElementById('pacoReservatorio');
let pacoPoco = document.getElementById('pacoPoco');
let pacoEscoamento = document.getElementById('pacoEscoamento');
let pacoFluido = document.getElementById('pacoFluido');
let pacoResultado = document.getElementById('pacoResultado');

let pacos = document.getElementsByClassName('paco');

var ipInput;
var peInput;
var diametroInput;
var comprimentoInput;
var PFinalInput;
var position = 0;

let calculateVazao = false;

var nameLabelOne, nameLabelTwo;
var ipValue, peValue, diametroValue, comprimentoValue, PFinalValue, APIValue, viscosidadeValue;

// CLICAR PARA CALCULAR VAZÃO
btnVazao.addEventListener('click', function(){
    calculateVazao = true;
    position = 0;
    comecar();
    console.log('cliquei vazao');
});

function comecar(){
    parametresContainer.innerHTML = '';
    console.log('comecei vazao');
    changeSelectedColor();

    //create div label
    ipContainer = document.createElement('div');
    ipContainer.className = 'parameter-container';
    ipContainer.id = 'ipContainer';
    parametresContainer.appendChild(ipContainer);

    nameLabelOne = document.createElement('div');
    nameLabelOne.className = 'name-label';
    nameLabelOne.id = 'nameLabelOne';
    nameLabelOne.innerHTML= 'IP';
    ipContainer.appendChild(nameLabelOne);
    
    ipInput = document.createElement('input');
    ipInput.className = 'ip-input parameter-input';
    ipInput.id = 'ipInput';
    ipContainer.appendChild(ipInput);

    //criar segundo label
    peContainer = document.createElement('div');
    peContainer.className = 'parameter-container';
    peContainer.id = 'peContainer';
    parametresContainer.appendChild(peContainer);

    nameLabelTwo = document.createElement('div');
    nameLabelTwo.className = 'name-label';
    nameLabelTwo.id = 'nameLabelTwo';
    nameLabelTwo.innerHTML= 'Pe';
    peContainer.appendChild(nameLabelTwo);
    
    peInput = document.createElement('input');
    peInput.className = 'pe-input parameter-input';
    peInput.id = 'peInput';
    peContainer.appendChild(peInput);
    
    //outra coisa
    buttonUpdate.style.visibility ='visible';
    buttonUpdate.innerHTML ='Avançar';
    btnBack.style.visibility ='hidden';

    if(document.getElementById('containerPFInal')){
        containerPFInal.remove();
    }

    modalTitle.innerHTML = 'RESERVATÓRIO';
    nameLabelOne.innerHTML = "Ip";
    nameLabelTwo.innerHTML = "Pe";
    bgModal.style.display = 'flex';

    document.getElementById('ipInput').value = '1.868e-8';
    document.getElementById('peInput').value = '150e5';
}

function changeSelectedColor(){
    for(let i = 0 ; i < pacos.length ; i++){
        pacos[i].style.color = "#999";
    }
    pacos[position].style.color="#e8ff45";
}

// CLICAR BOTÃO VOLTAR
btnBack.addEventListener('click', function(){
    if(position > 0){
        vazaoBack();
    }
});

// CLICAR BOTÃO AVANCAR
btnUpdate.addEventListener('click', function(){
    if(position < 4){    
        vazaoGo();
    }
});

btnCloseWindow.addEventListener('click', function(){
    closeWindow();
});
function closeWindow(){
    bgModal.style.display = 'none';
    calculateVazao = false;
    parametresContainer.innerHTML = '';
    position = 0;
}

function vazaoGo(){
    position++;
    changeSelectedColor();

    if(position == 1){
        ipValue = ipInput.value;
        peValue = peInput.value;

        ipInput.id = 'diametroInput';
        peInput.id = 'comprimentoInput';

        document.getElementById('diametroInput').value = '0.254';
        document.getElementById('comprimentoInput').value = '1500';

        if(document.getElementById('containerPFInal')){
            containerPFInal.remove();
        }

        btnBack.style.visibility ='visible';

        modalTitle.innerHTML = 'POÇO';
        nameLabelOne.innerHTML = "Diametro";
        nameLabelTwo.innerHTML = "Comprimento";

        console.log(position);
    }
    
    if(position == 2){      
        diametroValue = document.getElementById('diametroInput').value
        comprimentoValue = document.getElementById('comprimentoInput').value
        
        document.getElementById('diametroInput').value = diametroValue;
        document.getElementById('comprimentoInput').value = comprimentoValue;

        document.getElementById('diametroInput').disabled = true;
        document.getElementById('comprimentoInput').disabled = true;


        if(!document.getElementById('containerPFInal')){
            let containerPFinal = document.createElement('div');
            containerPFinal.className = 'parameter-container';
            containerPFinal.id = 'containerPFInal';

            // ADICIONO LABEL E INPUT PFinal
            nameLabelThree = document.createElement('div');
            nameLabelThree.className = 'name-label';
            nameLabelThree.id = 'PFinalLabel';
            PFinalInput = document.createElement('input');
            PFinalInput.className = 'pfinal-input';
            PFinalInput.id = 'PFinalInput';
            parametresContainer.appendChild(containerPFinal);
            containerPFinal.appendChild(nameLabelThree);
            containerPFinal.appendChild(PFinalInput);
            PFinalInput.id = 'PFinalInput';
            PFinalInput.value = '10e5';
            nameLabelThree.innerHTML= 'PFinal';
        }
        modalTitle.innerHTML = 'Escoamento';
        nameLabelOne.innerHTML = "Diametro";
        nameLabelTwo.innerHTML = "Comprimento"
    }

    if(position == 3){
        btnUpdate.innerHTML = 'Calcular';

        diametroValue = document.getElementById('diametroInput').value
        comprimentoValue = document.getElementById('comprimentoInput').value;
        PFinalValue = document.getElementById('PFinalInput').value;

        document.getElementById('diametroInput').id = 'APIInput';
        document.getElementById('comprimentoInput').id = 'viscosidadeInput';
        document.getElementById('APIInput').value = '800';
        document.getElementById('viscosidadeInput').value = '2e-3';
        document.getElementById('APIInput').disabled = false;
        document.getElementById('viscosidadeInput').disabled = false;

        if(document.getElementById('containerPFInal')){
            containerPFInal.remove();
        }
        let containerRGD = document.createElement('div');
        containerRGD.className = 'parameter-container';

        let containerCO2 = document.createElement('div');
        containerCO2.className = 'parameter-container';

        modalTitle.innerHTML = 'FLUIDO';
        nameLabelOne.innerHTML = "API";
        nameLabelTwo.innerHTML = "Viscosidade";
    }

    if(position == 4){
        console.log('RESULTADO');

        APIValue = document.getElementById('APIInput').value;
        viscosidadeValue = document.getElementById('viscosidadeInput').value;

        parametresContainer.innerHTML = '';
               
        let containerResultado = document.createElement('div');
        containerResultado.className = 'container-resultado';
        containerResultado.id = 'containerResultado';

        let labelResultado = document.createElement('div');
        labelResultado.className = 'label-resultado';
        labelResultado.id = 'labelResultado';
        labelResultado.innerHTML ='Coeficiente de vazão: '

        let outputResultado = document.createElement('div');
        outputResultado.className = 'output-resultado';
        outputResultado.id = 'outputResultado';
        outputResultado.innerHTML =nr2(calcularEssaPorra,0.02);

        parametresContainer.appendChild(containerResultado);
        containerResultado.appendChild(labelResultado);
        containerResultado.appendChild(outputResultado);

        modalTitle.innerHTML = 'RESULTADO';
        btnUpdate.style.visibility = 'hidden';
    }    
}

function vazaoBack(){
    position--;
    changeSelectedColor();

    if(position == 0){     
        comecar();
    }

    if(position == 1){
        if(document.getElementById('containerPFInal')){
            containerPFInal.remove();
        }
    //    diametroInput.value = '0.254';
    //    comprimentoInput.value = '1500';
        modalTitle.innerHTML = 'POÇO';
    }
    
    if(position == 2){      
        document.getElementById('APIInput').id = 'diametroInput';
        document.getElementById('viscosidadeInput').id = 'comprimentoInput';

        document.getElementById('diametroInput').value = '0.254';
        document.getElementById('comprimentoInput').value = '1500';

        if(!document.getElementById('containerPFInal')){
            let containerPFinal = document.createElement('div');
            containerPFinal.className = 'parameter-container';
            containerPFinal.id = 'containerPFInal';

            buttonUpdate.innerHTML = 'Avançar';

            // ADICIONO LABEL E INPUT PFinal
            let nameLabelThree = document.createElement('div');
            nameLabelThree.className = 'name-label';
            nameLabelThree.id = 'PFinalLabel';
            PFinalInput = document.createElement('input');
            PFinalInput.id = 'PFinalInput';
            parametresContainer.appendChild(containerPFinal);
            containerPFinal.appendChild(nameLabelThree);
            containerPFinal.appendChild(PFinalInput);
            nameLabelThree.innerHTML= 'Pfinal';
            PFinalInput.value = '10e5';


        }
        modalTitle.innerHTML = 'Escoamento';
        nameLabelOne.innerHTML = "Diametro";
        nameLabelTwo.innerHTML = "Comprimento"
    }

    if(position == 3){
        parametresContainer.innerHTML = '';
        parametresContainer.style.display = 'block';
        btnUpdate.style.visibility = 'visible';  

        //CRIAR DE NOVO OS INPUTS
        APIContainer = document.createElement('div');
        APIContainer.className = 'parameter-container';
        APIContainer.id = 'APIContainer';
        parametresContainer.appendChild(APIContainer);
    
        nameLabelOne = document.createElement('div');
        nameLabelOne.className = 'name-label';
        nameLabelOne.id = 'nameLabelOne';
        nameLabelOne.innerHTML= 'API';
        APIContainer.appendChild(nameLabelOne);
        
        let APIInput = document.createElement('input');
        APIInput.className = 'api-input parameter-input';
        APIInput.id = 'APIInput';
        APIContainer.appendChild(APIInput);
        APIInput.value = '800';
    
        //criar segundo label
        viscosidadeContainer = document.createElement('div');
        viscosidadeContainer.className = 'parameter-container';
        viscosidadeContainer.id = 'viscosidadeContainer';
        parametresContainer.appendChild(viscosidadeContainer);
    
        nameLabelTwo = document.createElement('div');
        nameLabelTwo.className = 'name-label';
        nameLabelTwo.id = 'nameLabelTwo';
        nameLabelTwo.innerHTML= 'Viscosidade';
        viscosidadeContainer.appendChild(nameLabelTwo);
        
        let viscosidadeInput = document.createElement('input');
        viscosidadeInput.className = 'pe-input parameter-input';
        viscosidadeInput.id = 'viscosidadeInput';
        viscosidadeContainer.appendChild(viscosidadeInput);
        viscosidadeInput.value = 2e-3;
    }
}