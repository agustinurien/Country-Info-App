"use client"
import PopulationChart from "@/app/components/PopulationChart";
import "./infoCard.css";
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { manrope } from "@/app/fonts/fonts";

const page = () => {
    const { country, countryCode } = useParams()

    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        const fetchCountryInfo = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/country/${countryCode}`);
                if (!response.ok) {
                    throw new Error('Error fetching country info');
                }
                const data = await response.json();
                setCountryInfo(data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchCountryInfo();
    }, [countryCode]);

    return (
        <section className={`${manrope.className}`} style={{ display: 'flex', justifyContent: 'center' }}>
            {
                countryInfo &&
                <div className='containerInfoCard'>
                    <div className="country">
                        <div className="containerFlag">
                            {
                                countryInfo.flagUrl &&
                                <Image
                                    src={countryInfo.flagUrl}
                                    height={300}
                                    width={500}
                                    alt={country}
                                    loading='lazy'
                                    className="flag"
                                />

                            }
                        </div>

                        <h1>{country}</h1>
                    </div>
                    <div className='containerStats'>
                        <div className="borders">
                            <h2>BORDERS</h2>
                            {
                                countryInfo.borders?.map((border) => {
                                    return (
                                        <div key={border.countryCode} className="border">
                                            <h3>{border.commonName}</h3>
                                            <a href={`/${border.commonName}/${border.countryCode}`}>more info</a>
                                        </div>
                                    );
                                })
                            }

                        </div>
                        <PopulationChart population={countryInfo.population} />
                    </div>
                </div>
            }
        </section>
    )
}

export default page
