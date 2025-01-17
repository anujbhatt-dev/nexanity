import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const saleType = defineType({
    name:"sale",
    title:"Sales",
    type:"document",
    icon:TagIcon,
    fields:[
        defineField(
            {
                name:"saleName",
                title:"Sale Name",
                type:"string",
                validation: Rule=>Rule.required()
            }
        ),
    ]
})