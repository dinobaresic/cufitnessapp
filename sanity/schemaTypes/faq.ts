import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'Česta Pitanja (FAQ)',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Pitanje',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'Odgovor',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
    ],
})
