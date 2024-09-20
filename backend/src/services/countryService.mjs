
export const fetchAvailableCountries = async () => {
    const response = await fetch(process.env.API_AVAILABLE_COUNTRIES_URL);
    const data = await response.json();
    return data;
};

export const getCountryDetails = async (countryCode) => {
    try {
        const response = await fetch(`${process.env.API_COUNTRY_INFO_URL}${countryCode}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching country details:', error);
        return null;
    }
};

export const getPopulationData = async (countryCode) => {
    const getIso3 = await getFlagUrl(countryCode)
    if (getIso3) {
        const iso3 = getIso3.iso3

        const response = await fetch(process.env.API_POPULATION_URL);
        const data = await response.json();
        const countryData = data.data.find((country) => country.iso3 === iso3);
        return countryData ? countryData.populationCounts : '';
    } else {
        return '';
    }
};

export const getFlagUrl = async (countryCode) => {
    const response = await fetch(process.env.API_FLAGS_URL);
    const data = await response.json();
    const countryData = data.data.find((country) => country.iso2 === countryCode);
    return countryData ? countryData : '';
};