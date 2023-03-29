export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'teamImage',
      type: 'image',
      title: 'Team Image',
      description: 'Make sure all images are same aspect ratio',
    },
    {
      name: 'teamName',
      type: 'string',
      title: 'Team Name',
    },
    {
      name: 'teamRole',
      type: 'string',
      title: 'Team Role',
    },
  ],
}
