import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import about from './about'
import packageType from './package'
import transformation from './transformation'
import faq from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [hero, about, packageType, transformation, faq],
}
