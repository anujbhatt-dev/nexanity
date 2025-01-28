import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCodes";
import { sanityFetch } from "../live";


export const getActiveSaleByCouponCode = async(couponCode:CouponCode)=>{
    const ACTIVE_SALE_BY_COUPON = defineQuery(`
        *[_type == "sale" && isActive == true && couponCode == $couponCode]
        | order(validFrom desc)[0]
      `);
      

    try {
        const activeSale = sanityFetch({
            query: ACTIVE_SALE_BY_COUPON,
            params:{
                couponCode
            }
        }) 

        return activeSale ? (await activeSale).data : null;
    } catch (error) {
        console.log(`Error Fetching active sale data by coupon code: ${error}` );
        
        return null;
    }
}