export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'First and Last',
    },
    {
      name: 'review',
      type: 'text',
      title: 'Review',
      description: 'Keep all roughly the same length',
    },
  ],
}
