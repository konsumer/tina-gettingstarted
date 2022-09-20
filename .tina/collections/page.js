import { templateImage, templateTweet } from '../components/forms.jsx'

export default {
  label: 'Page Content',
  name: 'page',
  path: 'content/page',
  format: 'json',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      isTitle: true,
      required: true
    },
    {
      name: 'rows',
      label: 'Content Rows',
      type: 'object',
      list: true,
      ui: {
        itemProps (item) {
          return { label: item?.title || 'Row' }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
          description: 'An optional title for this content-row, to make it easier to edit.'
        },
        {
          type: 'object',
          name: 'blocks',
          label: 'Blocks',
          list: true,
          ui: {
            itemProps (item) {
              return { label: item?.title || 'Box' }
            }
          },
          fields: [
            {
              type: 'string',
              label: 'Title',
              name: 'title',
              description: 'An optional title for this content-block to make it easier to edit.'
            },
            {
              type: 'rich-text',
              label: 'Block',
              name: 'block',
              templates: [
                templateImage,
                templateTweet
              ]
            }
          ]
        }
      ]
    }
  ]
}

/*

row
  block | block
row
  block | block | block

*/
