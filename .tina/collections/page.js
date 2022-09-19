export default {
  label: 'Page Content',
  name: 'page',
  path: 'content/page',
  format: 'mdx',
  fields: [
    {
      name: 'body',
      label: 'Main Content',
      type: 'rich-text',
      isBody: true
    }
  ]
}
