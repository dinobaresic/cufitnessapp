import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'O Meni',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Naslov',
            type: 'string',
            initialValue: 'TRENER. MENTOR. PODRŠKA.'
        }),
        defineField({
            name: 'heading',
            title: 'Glavna poruka',
            type: 'string',
            initialValue: 'Tvoj partner u transformaciji.',
        }),
        defineField({
            name: 'description',
            title: 'Opis (Bio)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            title: 'Slika',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'yearsExperience',
            title: 'Godina Iskustva',
            type: 'string',
            initialValue: '5+'
        }),
        defineField({
            name: 'transformationsCount',
            title: 'Broj Transformacija',
            type: 'string',
            initialValue: '100+'
        }),
    ],
})
