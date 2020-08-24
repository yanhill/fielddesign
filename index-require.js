var nr2;
function f (x) { return (x - 1) * (x + 2); }


//RESERVATORIO
//let IP = ipInput
//let Pe = peInput

let IP = 1.868e-8
let Pe = 150e5


//POCO
let D = 0.254 //diametro
let rg = 0.000045 //rugosidade do tubo
let L = 1500 //comprimento 
let h = 1500 //tamanho da plataforma ate o poço

//Propriedades físicas
let g = 9.81

//Propriedade dos fluidos 
let rho = 800 //API (massa específica) 
let ni = 2e-3 //viscosidade 

//Propriedade da plataforma
let Pp = 10e5 //pfixa

function calcularEssaPorra(Q){

//Número de Reynolds
let N_Re = 4*Q*rho/(Math.PI*ni*D);

//Fator de atrito por equação de Chen
let f = (1/(-2*Math.log10((rg/(3.7*D)) - (5.05/N_Re)*Math.log10((1/2.83)*((rg/D)**1.11) + 5.85/(N_Re**0.898)))))**2;

//Pressão - Reservatório
let Pr = Pe - Q/IP;

//Pressão - Sistema
let Pt = Pp + rho*g*h + f*(2/Math.PI)*rho*L*(Q**2)/(D**3);

let result = Pr - Pt;

return(Pr - Pt);
};



(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var nr = require('newton-raphson-method');
nr2 = nr;

},{"newton-raphson-method":2}],2:[function(require,module,exports){
'use strict';

module.exports = newtonRaphson;

function newtonRaphson (f, fp, x0, options) {
  var x1, y, yp, tol, maxIter, iter, yph, ymh, yp2h, ym2h, h, hr, verbose, eps;

  // Iterpret variadic forms:
  if (typeof fp !== 'function') {
    options = x0;
    x0 = fp;
    fp = null;
  }

  options = options || {};
  tol = options.tolerance === undefined ? 1e-7 : options.tolerance;
  eps = options.epsilon === undefined ? 2.220446049250313e-16 : options.epsilon;
  maxIter = options.maxIterations === undefined ? 20 : options.maxIterations;
  h = options.h === undefined ? 1e-4 : options.h;
  verbose = options.verbose === undefined ? false : options.verbose;
  hr = 1 / h;

  iter = 0;
  while (iter++ < maxIter) {
    // Compute the value of the function:
    y = f(x0);

    if (fp) {
      yp = fp(x0);
    } else {
      // Needs numerical derivatives:
      yph = f(x0 + h);
      ymh = f(x0 - h);
      yp2h = f(x0 + 2 * h);
      ym2h = f(x0 - 2 * h);

      yp = ((ym2h - yp2h) + 8 * (yph - ymh)) * hr / 12;
    }

    // Check for badly conditioned update (extremely small first deriv relative to function):
    if (Math.abs(yp) <= eps * Math.abs(y)) {
      if (verbose) {
        console.log('Newton-Raphson: failed to converged due to nearly zero first derivative');
      }
      return false;
    }

    // Update the guess:
    x1 = x0 - y / yp;

    // Check for convergence:
    if (Math.abs(x1 - x0) <= tol * Math.abs(x1)) {
      if (verbose) {
        console.log('Newton-Raphson: converged to x = ' + x1 + ' after ' + iter + ' iterations');
      }
      return x1;
    }

    // Transfer update to the new guess:
    x0 = x1;
  }

  if (verbose) {
    console.log('Newton-Raphson: Maximum iterations reached (' + maxIter + ')');
  }

  return false;
}

},{}]},{},[1]);



