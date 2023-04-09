export default async function FetchCity(text) {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=pk.eyJ1IjoiY2FwdGFpbm1rIiwiYSI6ImNsZnd0d2VqNzA2cXoza21rd2dhdDQxanMifQ.4bixPVjuuqOcl3Pddg48NQ&cachebuster=1625641871908&autocomplete=true&types=place`
    );
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (err) {
    return { error: "Unable to retrieve places" };
  }
};
