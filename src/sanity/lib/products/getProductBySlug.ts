import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { Slug } from "../../../../sanity.types";

export const getProductBySlug = async (slug:Slug) =>{
    const ALL_PRODUCT_QUERY = defineQuery(`*[_type=="product"] | order(name asc)`);
    try {
        const products = await sanityFetch({
            query:ALL_PRODUCT_QUERY
        })
        return products.data || [];
    } catch (error) {
        console.log("something went wrong");
        return [];        
    }
}