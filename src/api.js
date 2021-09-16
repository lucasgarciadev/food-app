let BASE_API = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const res = await fetch(`${BASE_API}/categories`);
        const json = await res.json();

        return json;
    }
}
