import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const saleType = defineType({
    name:"sale",
    title:"Sale",
    type:"document",
    icon:TagIcon,
    fields:[
        defineField(
            {
                name:"title",
                title:"Title",
                type:"string",
                validation: Rule=>Rule.required()
            }
        ),
        defineField(
            {
                name:"discription",
                title:"Discription",
                type:"blockContent",
                validation: Rule=>Rule.required()
            }
        ),
        defineField(
            {
                name:"discountAmount",
                title:"Discount Amount",
                type:"number",
                description:"Amount off in percentage or fixed value",
                validation: Rule=>Rule.required()
            }
        ),
        defineField(
            {
                name:"couponCode",
                title:"Coupon Code",
                type:"string",
            }
        ),
        defineField(
            {
                name:"validFrom",
                title:"Valid From",
                type:"datetime",
            }
        ),
        defineField(
            {
                name:"validUntil",
                title:"Valid Until",
                type:"datetime",
            }
        ),
        defineField(
            {
                name:"isActive",
                title:"Is Active",
                type:"boolean",
                description:"Toggle to activate/deactivate the sale",
                validation: Rule=>Rule.required()
            }
        ),
    ],
    preview:{
        select:{

            title:"title",
            discountAmount: "discountAmount",
            couponCode: "couponCode",
            isActive:"isActive",
        },
        prepare(select){
            const {title,discountAmount,couponCode,isActive} = select
            const status = isActive ? "Active" : "Inactive"
            return {
                title,
                subtitle:`${discountAmount}% off - Code: ${couponCode} - ${status}`
            }
        }
    }
})