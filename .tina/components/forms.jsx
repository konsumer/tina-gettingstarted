/* global Image */

// an image that computes it's own width/height
export const templateImage = {
  name: 'Image',
  label: 'Image',
  fields: [
    {
      name: 'src',
      label: 'Image',
      type: 'image',
      ui: {
        validate: (value, allValues, meta, field) => {
          if (value) {
            const i = new Image()
            i.onload = () => {
              allValues.width = i.naturalWidth
              allValues.height = i.naturalHeight
            }
            i.src = value
          }
        }
      }
    },
    {
      name: 'width',
      label: 'Width',
      type: 'number',
      ui: {
        component: () => null
      }
    },
    {
      name: 'height',
      label: 'Height',
      type: 'number',
      ui: {
        component: () => null
      }
    },
    {
      name: 'alt',
      label: 'Alt Text (for screen-readers and SEO)',
      type: 'string'
    },
    {
      name: 'title',
      label: 'Title (shows on hover)',
      type: 'string'
    }
  ]
}
