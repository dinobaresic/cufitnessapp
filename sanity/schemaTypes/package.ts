import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'package',
    title: 'Paketi Cijene',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Naziv Paketa',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Cijena (€)',
            type: 'string',
        }),
        defineField({
            name: 'popular',
            title: 'Najpopularniji?',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'features',
            title: 'Uključeno u cijenu',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'description',
            title: 'Kratki opis',
            type: 'text',
            rows: 3
        })
    ],
})
