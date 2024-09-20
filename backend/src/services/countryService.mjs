export const fetchAvailableCountries = async () => {
    const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
    const data = await response.json();
    return data;
};

export const getCountryDetails = async (countryCode) => {
    const response = await fetch(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
    const data = await response.json();
    return data;
};

export const getPopulationData = async (countryCode) => {
    const getIso3 = await getFlagUrl(countryCode)
    if (getIso3) {
        const iso3 = getIso3.iso3

        const response = await fetch('https://countriesnow.space/api/v0.1/countries/population');
        const data = await response.json();
        const countryData = data.data.find((country) => country.iso3 === iso3);
        return countryData ? countryData.populationCounts : {};
    } else {
        return {};
    }
};

export const getFlagUrl = async (countryCode) => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
    const data = await response.json();
    const countryData = data.data.find((country) => country.iso2 === countryCode);
    return countryData ? countryData : '';
};