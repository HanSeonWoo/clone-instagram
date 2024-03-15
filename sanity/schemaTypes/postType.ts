import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'user'},
    }),
    defineField({
      name: 'content',
      type: 'string',
    }),
    defineField({
      name: 'media',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: ['post', 'reels'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'updated_at',
      type: 'date',
    }),
    defineField({
      name: 'liked_users',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'user'}]}],
    }),
    defineField({
      name: 'comments',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'comment'}]}],
    }),
  ],
})
