const axios = require('axios');
const url = `http://localhost:3006/graphql`;
const apiKey = '10f5f843ac75c82422f8eca04e3890bc11a916f522852106da8480e834fa68b8';

function searchProductByName(searchTerm) {
    const query = `
    query FindProductByTitle($searchTerm: String!) {
      products(where: { title: { contains: $searchTerm } }) {
        id
        title
      }
    }
    `;
    const variables = {
        searchTerm: searchTerm
    };
    axios.post(url, {
        query: query,
        variables: variables
    }, {
        headers: {
            'api-key': apiKey  // Передача API ключа через заголовок
        }
    })
    .then(response => {
        let { products } = response.data.data;
        console.log(products);
    })
    .catch(error => {
        console.error('Error fetching product:', error);
    });
}

searchProductByName('яйцо');  // Пример поиска продукта
