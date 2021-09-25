let BASE_API = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const res = await fetch(`${BASE_API}/categories`);
        const json = await res.json();
        return json;
    },
    getProducts: async (category, page, search) => {

        let fields = {};

        if(category !== 0) {
            fields.category = category;
        }
        if(page >  0) {
            fields.page = page;
        }
        if(search !== 0) {
            fields.search = search;
        }

        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(`${BASE_API}/products?${queryString}`);
        const json = await res.json();
        return json;
    }

}
