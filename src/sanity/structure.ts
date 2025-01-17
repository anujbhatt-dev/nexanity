import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Nexanity')
    .items([
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      // S.documentTypeListItem('author').title('Authors'),
      // S.documentTypeListItem('product').title('Products'),
      ...S.documentTypeListItems(),
    ])
