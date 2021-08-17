import React from 'react'
import { useState } from 'react'



export default function Form({dataConsult}: any ) {
    //const handleChange = e => {return() }

 

    const [search, saveSearch] = useState({
        city : '', 
        country: ''
    })

    const handleChange = (e : any) => {

        saveSearch({
            ...search, 
            [e.target.name] : e.target.value

        })
    }

    const WeatherConsult = ( e : any) => {
        e.preventDefault();

        dataConsult(search); 
    }


    return (
        <form onSubmit = {WeatherConsult}>
            {/* {error ? <Error mensaje="Ambos campos son obligatorios" /> : null } */}


            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="city"
                    onChange={handleChange}
                />
            
            </div>


            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    //value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select a country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="PE">República Dominicana</option>
                </select>
               
            </div>


            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Search a country"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>


    )




}