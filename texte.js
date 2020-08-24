function calcularEssaPorra(Q){
    let D = 0.254 //diametro
    let rg = 0.000045 //rugosidade do tubo
    let L = 1500 //comprimento 
    let h = 1500 //tamanho da plataforma ate o poço

//Propriedades físicas
let g = 9.81

//Propriedade dos fluidos 
let rho = 800 //API (massa específica) 
let ni = 2e-3 //viscosidade 

//Propriedade do reservatório
let IP = 1.868e-8
let Pe = 150e5

//Propriedade da plataforma
let Pp = 10e5 //pfixa

//Número de Reynolds
let N_Re = 4*Q*rho/(Math.PI*ni*D);

//Fator de atrito por equação de Chen
let f = (1/(-2*Math.log10((rg/(3.7*D)) - (5.05/N_Re)*Math.log10((1/2.83)*((rg/D)**1.11) + 5.85/(N_Re**0.898)))))**2;

//Pressão - Reservatório
let Pr = Pe - Q/IP;

//Pressão - Sistema
let Pt = Pp + rho*g*h + f*(2/Math.PI)*rho*L*(Q**2)/(D**3);

return(Pr - Pt);
};