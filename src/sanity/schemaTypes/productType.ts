import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";


export const productType = defineType ({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon:TrolleyIcon,
    fields: [
        defineField({
            name:"name",
            title:"Product Name",
            type:"string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"blockContent",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"categories",
            title:"Categories",
            type:"array",
            of:[{type:"reference", to: {type:"category"}}],
        }),
        defineField({
            name:"stock",
            title:"Stock",
            type:"number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "altText",
                title: "Alt Text",
                type: "string",
                validation: (Rule) => Rule.required().error("Alt text is required"),
              },
            ],
          }),
          defineField({
            name: "sku",
            title: "SKU",
            description:"Stock keeping unit for inventory",
            type: "string",
            validation: (Rule) => Rule.required().error("SKU is required"),
          }),
    ],
    preview:{
        select:{
            title:"name",
            media:"image",
            price:"price"
        },
        prepare(select){
            return {
                title:select.title,
                subtitle: `$${select.price}`,
                media:select.media
            }
        }
    }
})
