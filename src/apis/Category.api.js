import http from "../utils/http";

const categoryApi = {
    getAllCategories: ()=>http.get('/categories?page=0&limit=10')
}

export default categoryApi;