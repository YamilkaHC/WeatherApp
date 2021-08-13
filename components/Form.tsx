import React from 'react'
import { useState } from 'react'


export default function Form(dataConsult: any) {
    //const handleChange = e => {return() }

    const [search, saveSearch] = useState({
        city : '', 
        country: ''
    })

    const handleChange = e => {

        saveSearch({
            ...search, 
            [e.target.name] : e.target.value

        })
    }

    const WeatherConsult = e => {
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
                    //value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">city: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                   // value={country}
                    //onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">País: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>


    )




}