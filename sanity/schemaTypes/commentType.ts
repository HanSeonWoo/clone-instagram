import {defineField, defineType} from 'sanity'

export const commentType = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'post_id',
      type: 'number',
    }),
    defineField({
      name: 'comment',
      type: 'string',
    }),
    defineField({
      name: 'parent_id',
      type: 'number',
    }),
    defineField({
      name: 'children',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'comment'}]}],
    }),
    defineField({
      name: 'created_at',
      type: 'date',
    }),
    defineField({
      name: 'updated_at',
      type: 'date',
    }),
  ],
})
