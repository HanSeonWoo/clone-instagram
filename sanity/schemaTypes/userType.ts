import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'introduction',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'password',
      type: 'string',
    }),
    defineField({
      name: 'loginType',
      type: 'string',
      options: {
        list: ['google', 'kakao', 'naver', 'facebook', 'email'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'googleId',
      type: 'string',
    }),
    defineField({
      name: 'facebookId',
      type: 'string',
    }),
    defineField({
      name: 'kakaoId',
      type: 'string',
    }),
    defineField({
      name: 'naverId',
      type: 'string',
    }),
    defineField({
      name: 'website',
      type: 'string',
    }),
    defineField({
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
          // options: {
          //   filter: (a) => {
          //     console.log('docu', a)
          //     return !a.document._id
          //   },
          // },
        },
      ],
    }),
    defineField({
      name: 'following',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'user'}]}],
    }),
  ],
})
