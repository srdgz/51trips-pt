export const fetchCountryGeoJson = async (countryCode) => {
  const url =
    "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const countryData = data.features.find(
      (feature) => feature.properties.ISO_A3 === countryCode
    );

    if (!countryData) {
      throw new Error(`Country with code ${countryCode} not found`);
    }

    return {
      type: "FeatureCollection",
      features: [countryData],
    };
  } catch (error) {
    console.error("Error fetching GeoJSON data:", error);
    throw error;
  }
};
