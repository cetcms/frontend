export default {
  schema: 'src/graphql/generated/schema.graphql',
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false
      },
      config: {
        enumType: 'native',
        scalars: {
          DateTime: 'string',
          JSON: 'any',
          JSONObject: 'any',
          Upload: 'any'
        }
      }
    },
    'src/graphql/generated/enums.ts': {
      plugins: ['typescript'],
      config: {
        onlyEnums: true
      }
    }
  }
}
