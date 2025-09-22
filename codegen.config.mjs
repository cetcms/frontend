export default {
  schema: 'http://127.0.0.1:3000/graphql',
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/generated/': {
      preset: 'client'
    },
  }
}