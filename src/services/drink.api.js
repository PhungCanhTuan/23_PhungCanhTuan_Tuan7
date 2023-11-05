const BASE_URL = 'https://653f473c9e8bd3be29e025c0.mockapi.io/api/v1/drinks'

async function fetchDrink() {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    return data;
};

export {
    fetchDrink
}