import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero Sekcija',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Glavni Naslov',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Podnaslov',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Lokacija (Sub-badge)',
            type: 'string',
            initialValue: 'PAKOŠTANE & BIOGRAD'
        }),
        defineField({
            name: 'ctaText',
            title: 'Tekst na gumbu',
            type: 'string',
            initialValue: 'ZAPOČNI ODMAH'
        }),
        defineField({
            name: 'videoUrl',
            title: 'URL Videa (pozadina)',
            type: 'url',
            description: 'Link na video (npr. Cloudinary ili javni URL). Ako nije postavljen, koristi se zadani.',
        }),
    ],
})
