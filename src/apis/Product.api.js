import http from "../utils/http";

const productApi = {
    getAllProducts: ()=>http.get('/products?page=0&limit=10'),
    getProductDetailById:(id)=>http.get(`/product_details/${id}`)
}

export default productApi