const axios = require('axios');
const url = `http://localhost:3006/graphql`
function searchProductByName(searchTerm) {
    const query = `
    query FindProductByTitleBGU($searchTerm: String!) {
        products(where: { title: { contains: $searchTerm } }) {
          id
          title
          nutrients(where: { nutrient: { is: {name:{in: ["Белки", "Жиры", "Углеводы"]}} }}) {
            valueString
            valueAmount
            valueExponent
            nutrient {
              name
            } 
          }
        }
      }
    `;
    const variables = {
        searchTerm: searchTerm
    };
    axios.post(url, {
        query: query,
        variables: variables
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
