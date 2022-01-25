const API_BASE = 'https://api.spacexdata.com/v3/dragons';

function getDragonsOptions() {
  return {
    method: 'GET',
  };
}

export default async function getDragons() {
    const response = await fetch(API_BASE, getDragonsOptions());
    return response.json();
}
