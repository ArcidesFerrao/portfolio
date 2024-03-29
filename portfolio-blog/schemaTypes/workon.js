import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'worked',
  title: 'Worked',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        title: 'Project URL',
        name: 'projectUrl',
        type: 'url'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
        name: 'tagSet',
        title: 'Tag Set',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
                {value: 'HTML', title: 'html'},
                {value: 'JavaScript', title: 'js'},
                {value: 'Css', title: 'css'},
                {value: 'ReactJs', title: 'reactjs'},
                {value: 'Sanity', title: 'sanity'},
                {value: 'Error Page', title: 'error'},
                {value: 'Framer Motion', title: 'framermotion'},
                {value: 'Open Source', title: 'opensource'},
            ]
        }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      options: {
        maxLength: 200,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
