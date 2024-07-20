import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import productApi from "../../../../apis/Product.api";


export default function ProductDetail(){
    const {id:productId} = useParams();
    // console.log('Product detail : ',productId);

    const {data : product} = useQuery({
        queryKey:['product_detail',productId],
        queryFn:()=>productApi.getProductDetailById(productId),
        enabled:!!productId
    })

    console.log('----------',product);

    return (
        <div>Product detail</div>
    )
}