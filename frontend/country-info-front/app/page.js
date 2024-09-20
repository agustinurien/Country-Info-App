import AvailableCountries from "./components/AvailableCountries";
import { manrope } from "./fonts/fonts";

async function fetchCountries() {
  try {
    const response = await fetch('http://localhost:5000/api/countries');
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
}

export default async function Home() {
  const countries = await fetchCountries();
  return (
    <section>
      <h1 className={manrope.className}>COUNTRIES</h1>
      <AvailableCountries countries={countries} />
    </section>
  );
}
