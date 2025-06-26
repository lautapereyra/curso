let arrayNotas = [6.3, 7.6, 3.8, 9.4, 8.7];

    function listaNotas() {
        let lista = document.getElementById("listaNotas");
        for (let nota of arrayNotas) {
            let item = document.createElement("li");
            item.innerText = nota;
            lista.appendChild(item);
        }
    }

    function calcularPromedio() {
        let suma=0;
        let elementoTextoPromedio=document.getElementById("promedio");
        for(let i =0;i<5;i++){
            suma+=arrayNotas[i];

        }
        let promedio=suma/5;
        elementoTextoPromedio.textContent=promedio.toFixed(2);
    }





    function calcularNotaMasAlta(){
        notaAlta=0;
        let elementoNotaAlta = document.getElementById("notaAlta");
        let i = 0;
        while(i<5)
        {
            if(arrayNotas[i]>notaAlta){
                notaAlta=arrayNotas[i];
            }
            i++;
        }
        elementoNotaAlta.textContent=notaAlta;
    }

    function calcularReprobado(){
        let reprobado = "No";
        let i = 0;
        do {
            if(arrayNotas[i]<6){
                reprobado="Si";
                break;
            }
            i++;
        }while(i<5)
        document.getElementById("reprobado").textContent=reprobado;
    }