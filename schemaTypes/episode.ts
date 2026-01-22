const episode = {
  name: 'episode',
  title: 'Episode',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'episodeNumber',
      title: 'Episode Number',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    // ✅ NEW — matches the import file
    {
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url',
      description: 'Direct audio file URL from the podcast feed',
    },

    // Optional — keep for future use if you want
    {
      name: 'spotifyEmbed',
      title: 'Spotify Embed URL',
      type: 'url',
      hidden: true, // hide for now since we’re not using it
    },
    {
      name: 'facebookUrl',
      title: 'Facebook Video URL',
      type: 'url',
      hidden: true,
    },

    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },

    // Optional but useful
    {
      name: 'sourceUrl',
      title: 'Original Episode Link',
      type: 'url',
      description: 'Link back to the original podcast episode',
      hidden: true,
    },
  ],

  // ⭐ This makes the Studio list way nicer
  orderings: [
    {
      title: 'Episode Number (Ascending)',
      name: 'episodeNumberAsc',
      by: [{ field: 'episodeNumber', direction: 'asc' }],
    },
    {
      title: 'Published Date (Newest First)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      episodeNumber: 'episodeNumber',
      publishedAt: 'publishedAt',
    },
    prepare(selection: any) {
      const { title, episodeNumber } = selection
      return {
        title: `Episode ${episodeNumber}: ${title}`,
      }
    },
  },
}

export default episode
