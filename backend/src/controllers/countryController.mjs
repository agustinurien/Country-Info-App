import { fetchAvailableCountries, getCountryDetails, getPopulationData, getFlagUrl } from '../services/countryService.mjs';

export const getAvailableCountries = async (req, res) => {
    try {
        const countries = await fetchAvailableCountries();
        res.json(countries);
    } catch (error) {
        console.error('Error fetching available countries:', error);
        res.status(500).json({ message: 'Failed to fetch countries' });
    }
};

export const getCountryInfo = async (req, res) => {
    const countryCode = req.params.countryCode;

    try {

        const countryDetails = await getCountryDetails(countryCode);
        const populationData = await getPopulationData(countryCode);
        const flagUrl = await getFlagUrl(countryCode);

        const response = {
            borders: countryDetails.borders || [],
            population: populationData,
            flagUrl: flagUrl.flag
        };

        res.json(response);
    } catch (error) {
        console.error('Error fetching country:', error);
        res.status(500).json({ message: 'Failed to fetch country info' });
    }
};