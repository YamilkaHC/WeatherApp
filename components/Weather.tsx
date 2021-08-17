import React from 'react';


export default function Weather ({result} : any){
console.log(result.cod)

const { name, main } = result;

if(!name) return null;

const kelvin : number = 273.15;

return(

    <div className="card-panel white col s12">
        <div className="black-text">
        <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseInt( String(main.temp - kelvin), 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Máxima:
                    { parseInt( String(main.temp_max - kelvin), 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima:
                    { parseInt ( String(main.temp_min - kelvin), 10 ).toFixed(2) }  <span> &#x2103; </span>
                </p>
        </div>
</div>

)


}
