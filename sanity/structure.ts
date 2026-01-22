import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Sadržaj')
        .items([
            S.documentTypeListItem('hero').title('Hero Sekcija'),
            S.documentTypeListItem('about').title('O Meni'),
            S.documentTypeListItem('package').title('Paketi'),
            S.documentTypeListItem('transformation').title('Transformacije'),
            S.documentTypeListItem('faq').title('Česta Pitanja'),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => item.getId() && !['hero', 'about', 'package', 'transformation', 'faq'].includes(item.getId()!),
            ),
        ])
