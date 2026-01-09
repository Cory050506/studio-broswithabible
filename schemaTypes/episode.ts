const episode = {
  name: 'episode',
  title: 'Episode',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'episodeNumber',
      title: 'Episode Number',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'spotifyEmbed',
      title: 'Spotify Embed URL',
      type: 'url',
    },
    {
      name: 'facebookUrl',
      title: 'Facebook Video URL',
      type: 'url',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
}

export default episode