 function clicar(){
    var pessoas = document.getElementById("adultos").value + document.getElementById("criancas").value;
    var adultos = document.getElementById("adultos").value;
    var criancas = document.getElementById("criancas").value;
    var carnen = document.getElementById("carne");
    var refrin = document.getElementById("refrigerante");
    var cervejan = document.getElementById("cerveja");
    var carnem = document.getElementById("carne");
    var refrim = document.getElementById("refrigerante");
    var cervejam = document.getElementById("cerveja");

                var a = document.getElementById("horas").value;
            
            
                if(a >= 6 ){
                    let carnemais = Math.round((adultos * 0.65) + (criancas * 0.325));
                    let refrimais = Math.round((adultos * 1.5) + (criancas * 0.75));                                             
                    let cervejamais =  Math.round(adultos * 2);
                    carnem.innerHTML = carnemais + " Kilos de Carne";
                    refrim.innerHTML = refrimais + " Litros de Refrigerante";
                    cervejam.innerHTML = cervejamais + " Litros de Cerveja"; 
            }
        else{
                let carnenormal = Math.round((adultos * 0.4) + (criancas * 0.2));
                let refrinormal = Math.round((adultos * 1) + (criancas * 0.5));                                             
                let cervejanormal =  Math.round(adultos * 1.2);
                carnen.innerHTML = carnenormal + " Kilos de Carne";
                refrin.innerHTML = refrinormal + " Litros de Refrigerante";
                cervejan.innerHTML = cervejanormal + " Litros de Cerveja";       
        }

        }