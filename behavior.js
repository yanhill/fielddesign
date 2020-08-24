let reservatorio = document.getElementById('reservatorio');
let poco = document.getElementById('poco');
let escoamento = document.getElementById('escoamento');
let processo = document.getElementById('processo');
let custo = document.getElementById('custo');
let btnUpdate = document.getElementById('buttonUpdate');
let btnVazao = document.getElementById('btnVazao')

let reservatorioLi = document.getElementById('reservatorioLi');

let parametresContainer = document.getElementById('parametresContainer');

let nameLabelOne = document.getElementById('nameLabelOne');
let nameLabelTwo = document.getElementById('nameLabelTwo');

let bgModal = document.getElementById('bgModal');
let modalTitle = document.getElementById('modalTitle');

/*
pocoLi.addEventListener('click', function(){
    modalTitle.innerHTML = 'POÇO';
    nameLabelOne.innerHTML = "Diametro"
    nameLabelTwo.innerHTML = "Comprimento"
    bgModal.style.display = 'flex'

    this.style.background = "rgb(0, 199, 0)";
    poco.style.border = "1px solid rgb(0, 199, 0)"
    poco.style.color = "black"
});
*/

btnUpdate.addEventListener('click', function(){
    let position = 0;
});

reservatorioLi.addEventListener('click', function(){
    modalTitle.innerHTML = 'RESERVATÓRIO';
    nameLabelOne.innerHTML = "Ip"
    nameLabelTwo.innerHTML = "Pe"
    bgModal.style.display = 'flex'

    this.style.background = "rgb(0, 199, 0)";
    reservatorio.style.border = "1px solid rgb(0, 199, 0)"
    reservatorio.style.color = "black"
});

escoamentoLi.addEventListener('click', function(){
    let containerFixal = document.createElement('div');
    containerFixal.className = 'parameter-container';

    let nameLabelThree = document.createElement('div');
    nameLabelThree.className = 'name-label';

    let input = document.createElement('input');
    
    parametresContainer.appendChild(containerFixal);
    containerFixal.appendChild(nameLabelThree);
    containerFixal.appendChild(input);

    modalTitle.innerHTML = 'Escoamento';
    nameLabelOne.innerHTML = "Diametro";
    nameLabelTwo.innerHTML = "Comprimento"
    nameLabelThree.innerHTML= 'Pfixal';

    this.style.background = "rgb(0, 199, 0)";
    escoamento.style.border = "1px solid rgb(0, 199, 0)"
    escoamento.style.color = "black"

    bgModal.style.display = 'flex'
});



processoLi.addEventListener('click', function(){
    let containerRGD = document.createElement('div');
    containerRGD.className = 'parameter-container';

    let containerCO2 = document.createElement('div');
    containerCO2.className = 'parameter-container';

    let nameLabelThree = document.createElement('div');
    nameLabelThree.className = 'name-label';

    let nameLabelFour = document.createElement('div');
    nameLabelFour.className = 'name-label';

    let input = document.createElement('input');
    let input2 = document.createElement('input');

    parametresContainer.appendChild(containerRGD);
    parametresContainer.appendChild(containerCO2);
    containerRGD.appendChild(nameLabelThree);
    containerRGD.appendChild(input);
    containerCO2.appendChild(nameLabelFour);
    containerCO2.appendChild(input2);

    modalTitle.innerHTML = 'PROCESSO';
    nameLabelOne.innerHTML = "API";
    nameLabelTwo.innerHTML = "Vazão";
    nameLabelThree.innerHTML= 'RGD';
    nameLabelFour.innerHTML= 'CO2';

    this.style.background = "rgb(0, 199, 0)";
    processo.style.border = "1px solid rgb(0, 199, 0)"
    processo.style.color = "black"

    bgModal.style.display = 'flex'
});

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


