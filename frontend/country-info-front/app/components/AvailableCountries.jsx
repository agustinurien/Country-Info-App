"use client"

import { manrope } from "../fonts/fonts";
import "./Available.css";

const AvailableCountries = ({ countries }) => {

    return (
        <section className={`${manrope.className} cardsSection`}>
            {
                countries.length > 0 &&
                countries.map((country) => {
                    return (
                        <div key={country.countryCode} className="containerCard">
                            <div>
                                <h2>{country.name}</h2>
                            </div>
                            <aside >
                                <span className="countryCode">{country.countryCode}</span>
                                <a href={`/${country.name}/${country.countryCode}`}>more info</a>
                            </aside>
                        </div>
                    )
                })

            }
        </section>
    )
}

export default AvailableCountries
