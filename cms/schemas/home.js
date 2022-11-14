export default {
    name: 'home',
    type: 'document',
      title: 'Home',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'age',
        type: 'string',
        title: 'Age'
      },
      {
        type: "markdown",
        description: "A Github flavored markdown field with image uploading",
        name: "bio"
      }
  
    ]
  }