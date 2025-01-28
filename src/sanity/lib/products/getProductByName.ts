import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductByName = async (name:string) =>{
    const PRODUCT_BY_NAME_QUERY = defineQuery(`*[_type=="product" && name match $name ] | order(name asc)`);
    try {
        const products = await sanityFetch({
            query:PRODUCT_BY_NAME_QUERY,
            params:{
                name:`${name}*`
            }
        })
        return products.data || [];
    } catch (error) {
        console.log("Error Fetching Product by slug", error);
        return [];        
    }
}