export default {
  schema: 'http://127.0.0.1:3000/graphql',
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/generated/': {
      preset: 'client'
    },
    'src/graphql/generated/zod.ts': {
      plugins: [
        'typescript-validation-schema',
      ],
      config: {
        importFrom: './graphql',
        schema: 'zodv4',
        scalarSchemas: {
          DateTime: 'z.date()',
          JSON: 'z.object()',
          Email: 'z.email()',
        }
      }
    },
  }
}