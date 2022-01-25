const API_BASE = 'https://api.spacexdata.com/v3/dragons';

export default async function getDragons() {
  const response = await fetch(API_BASE);
  return response.json();
}
