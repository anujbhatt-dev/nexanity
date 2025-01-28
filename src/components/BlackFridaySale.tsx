import { COUPON_CODE } from '@/sanity/lib/sales/couponCodes';
import { getActiveSaleByCouponCode } from '@/sanity/lib/sales/getActiveSaleByCouponCode';
import React from 'react'

export default async function BlackFridaySale() {
    const sale = await getActiveSaleByCouponCode(COUPON_CODE.BFRIDAY);

  if(!sale){
    console.log("sale not found");
    
    return null;
  }
  return (
    <div className='bg-gradient-to-r from-red-600 to-black text-white px-6 py-10 mx-4 rounded-lg shadow-lg mb-4'>
        <h1 className='text-[2rem] text-white ml-4 font-serif'>
            Black Friday Sale
        </h1>
        <h1 className='text-[1rem] text-white ml-4 font-semibold'>
            {sale.description?.map((block) => block._type==="block"?block.children?.map((child)=> child.text).join(""):"")
            .join("") || "No description available"
            }        
        </h1>
        <h3 className='uppercase p-2 px-6 bg-white text-black inline-block rounded-3xl mt-4 font-semibold'>
          usecode: <span className='text-red-600'>{COUPON_CODE.BFRIDAY} </span>for <span>{sale.discountAmount}</span>% off
        </h3>
    </div>
  )
}
