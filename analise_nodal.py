from scipy import optimize
import math as m

#Propriedades dos tubos
D = 0.254 #diametro
rg = 0.000045 #rugosidade do tubo
L = 1500 #comprimento 
h = 1500 #tamanho da plataforma ate o poço

#Propriedades físicas
g = 9.81

#Propriedade dos fluidos 
rho = 800 #API (massa específica) #ok
ni = 2e-3 #viscosidade #ok

#Propriedade do reservatório
ip = 1.868e-8  #ok
Pe = 150e5 #ok

#Propriedade da plataforma
Pp = 10e5 #pfinal #ok

def fobj(Q):
    #Número de Reynolds
    N_Re = 4*Q*rho/(m.pi*ni*D)

    #Fator de atrito por equação de Chen
    f = (1/(-2*m.log10((rg/(3.7*D)) - (5.05/N_Re)*m.log10((1/2.83)*((rg/D)**1.11) + 5.85/(N_Re**0.898)))))**2
    
    #Pressão - Reservatório
    Pr = Pe - Q/ip

    #Pressão - Sistema
    Pt = Pp + rho*g*h + f*(2/m.pi)*rho*L*(Q**2)/(D**3) 
    
  #  print(Pr - Pt)
    return(Pr - Pt)
    #fim da função

root = optimize.newton(fobj,0.02)
print(root)
