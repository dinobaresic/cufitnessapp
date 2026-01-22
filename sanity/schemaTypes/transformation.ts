import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'transformation',
    title: 'Transformacije',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Ime Klijenta',
            type: 'string',
        }),
        defineField({
            name: 'imageBefore',
            title: 'Slika PRIJE',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'imageAfter',
            title: 'Slika POSLIJE',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'duration',
            title: 'Trajanje (npr. 3 mjeseca)',
            type: 'string',
        }),
        defineField({
            name: 'weightLoss',
            title: 'Izgubljeno kg (npr. -15kg)',
            type: 'string',
        }),
        defineField({
            name: 'testimonial',
            title: 'Izjava klijenta',
            type: 'text',
        }),
    ],
})
