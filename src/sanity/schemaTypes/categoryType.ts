import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().error("Title is Required")
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required().error("Slug is Required"),
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.max(200).warning("Shorter descriptions are easier to manage."),
    }),
  ],
  preview: {
    select: {
      title: "title", 
      subtitle: "description",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: select.subtitle,
      };
    },
  },
  
})
