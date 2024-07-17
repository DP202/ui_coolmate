import http from "../utils/http";

const productApi = {
    getAllProducts: ()=>http.get('/products?page=0&limit=10')
}

export default productApi