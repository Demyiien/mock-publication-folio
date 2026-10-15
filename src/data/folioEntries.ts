import type { FolioEntry, FolioMedium, FolioTheme } from '../types/folio';

/**
 * Static exhibition dataset — Folio XLII.
 * Eight curated works with generic title placeholders, classical Lorem Ipsum text,
 * accurate photo sources, and typographic middle dot dividers.
 */

const unsplash = (photoId: string): string =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=80`;

export const FOLIO_MEDIUMS: readonly FolioMedium[] = [
  'Poetry',
  'Short Essay',
  'Editorial Cartoon',
  'Photo Essay',
];

export const FOLIO_THEMES: readonly FolioTheme[] = [
  'Dissent & Memory',
  'Campus Ephemera',
  'Mother Tongue',
  'Urban Rust',
];

export const ISSUE_META = {
  publication: 'The Technologian Student Press',
  folio: 'Folio XLII',
  motto: 'Documentation, Literature & Visual Arts Archive',
  issueDate: 'OCT 2026',
  volume: 'VOL. XLII',
  issueTitle: 'Exhibition Foreword & Selected Works',
} as const;

export const folioEntries: FolioEntry[] = [
  {
    id: 'poetry-selection-01',
    catalogNumber: 'CAT-01',
    title: 'Poetry Selection 01',
    subtitle: 'Stanza Study in Five Parts',
    medium: 'Poetry',
    theme: 'Urban Rust',
    author: {
      name: 'Student Contributor 01',
      programAndYear: 'BA Literature III',
      deskRole: 'Staff Writer',
    },
    publishedDate: 'OCT 2026 · VOL. XLII',
    specsOrReadTime: '5 STANZAS · 3 MIN READ',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation.',
    pullQuote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    bodyContent: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\ncupidatat non proident, sunt in culpa qui officia deserunt mollit\nanim id est laborum.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem\naccusantium doloremque laudantium, totam rem aperiam, eaque ipsa\nquae ab illo inventore veritatis et quasi architecto beatae\nvitae dicta sunt explicabo.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut\nodit aut fugit, sed quia consequuntur magni dolores eos qui ratione\nvoluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\nipsum quia dolor sit amet.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus\nqui blanditiis praesentium voluptatum deleniti atque corrupti quos\ndolores et quas molestias excepturi sint occaecati cupiditate\nnon provident, similique sunt in culpa.',
    ],
    isFeatured: false,
  },
  {
    id: 'short-essay-01',
    catalogNumber: 'CAT-02',
    title: 'Short Essay 01',
    subtitle: 'Critical Notes on Archival Records',
    medium: 'Short Essay',
    theme: 'Dissent & Memory',
    author: {
      name: 'Student Contributor 02',
      programAndYear: 'BS Journalism IV',
      deskRole: 'Managing Editor',
    },
    publishedDate: 'OCT 2026 · VOL. XLII',
    specsOrReadTime: '1,240 WORDS · 6 MIN READ',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    pullQuote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    bodyContent: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.',
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    ],
    isFeatured: false,
  },
  {
    id: 'photo-essay-01',
    catalogNumber: 'CAT-03',
    title: 'Photo Essay 01',
    subtitle: 'Monochrome Photographic Series',
    medium: 'Photo Essay',
    theme: 'Campus Ephemera',
    author: {
      name: 'Max Bender',
      programAndYear: 'Contributing Artist',
      deskRole: 'Unsplash Photography',
    },
    publishedDate: 'OCT 2026 · VOL. XLII',
    specsOrReadTime: '35MM · ILFORD HP5+ · 300 DPI',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    pullQuote:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    bodyContent: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      'Curatorial note: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
    ],
    artworkUrl: unsplash('photo-1515694346937-94d85e41e6f0'),
    artworkCaption:
      'Plate 01. Water droplets on window surface, ambient monochrome exposure. Silver gelatin archival scan, 4800 DPI.',
    artworkSource: 'Max Bender on Unsplash',
    artworkSourceUrl:
      'https://unsplash.com/photos/water-droplets-on-clear-glass-1YHXFeOYpN0',
    isFeatured: true,
  },
  {
    id: 'editorial-cartoon-01',
    catalogNumber: 'CAT-04',
    title: 'Editorial Cartoon 01',
    subtitle: 'Plate Study in Halftone & Ink',
    medium: 'Editorial Cartoon',
    theme: 'Dissent & Memory',
    author: {
      name: 'AbsolutVision',
      programAndYear: 'Contributing Artist',
      deskRole: 'Unsplash Visual Archive',
    },
    publishedDate: 'OCT 2026 · VOL. XLII',
    specsOrReadTime: 'INK & HALFTONE · 300 DPI',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    pullQuote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    bodyContent: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      'Curatorial note: Stippled monochrome halftone on Bristol board, 11 × 17 in. Digitized plate study archived at 300 DPI.',
    ],
    artworkUrl: unsplash('photo-1504711434969-e33886168f5c'),
    artworkCaption:
      'Plate 02. Stacked broadsheets with typography halftone details. Digitized archive plate study at 300 DPI.',
    artworkSource: 'AbsolutVision on Unsplash',
    artworkSourceUrl:
      'https://unsplash.com/photos/business-newspaper-article-WYd_PkCa1BY',
    isFeatured: false,
  },
  {
    id: 'poetry-selection-02',
    catalogNumber: 'CAT-05',
    title: 'Poetry Selection 02',
    subtitle: 'Lyrical Sequence in Four Movements',
    medium: 'Poetry',
    theme: 'Mother Tongue',
    author: {
      name: 'Student Contributor 05',
      programAndYear: 'BS Computer Science III',
      deskRole: 'Literary Contributor',
    },
    publishedDate: 'OCT 2026 · VOL. XLII',
    specsOrReadTime: '4 STANZAS · 2 MIN READ',
    excerpt:
      'Aenean commodo ligula eget dolor,\naenean massa. Cum sociis natoque penatibus et magnis\ndis parturient montes, nascetur ridiculus mus.',
    pullQuote:
      'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    bodyContent: [
      'Aenean commodo ligula eget dolor,\naenean massa. Cum sociis natoque penatibus et magnis\ndis parturient montes, nascetur ridiculus mus.\nDonec quam felis, ultricies nec, pellentesque eu.',
      'Pretium quis, sem. Nulla consequat massa quis enim.\nDonec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\nIn enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\nNullam dictum felis eu pede mollis pretium.',
      'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.\nAenean vulputate eleifend tellus. Aenean leo ligula,\nporttitor eu, consequat vitae, eleifend ac, enim.\nAliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      'Phasellus viverra nulla ut metus varius laoreet.\nQuisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.\nCurabitur ullamcorper ultricies nisi. Nam eget dui.\nEtiam rhoncus. Maecenas tempus, tellus eget condimentum.',
    ],
    isFeatured: false,
  },
  {
    id: 'short-essay-02',
    catalogNumber: 'CAT-06',
    title: 'Short Essay 02',
    subtitle: 'Field Notes and Analytical Commentary',
    medium: 'Short Essay',
    theme: 'Mother Tongue',
    author: {
      name: 'Student Contributor 06',
      programAndYear: 'BA Literature II',
      deskRole: 'Staff Columnist',
    },
    publishedDate: 'OCT 2026 · VOL. XLII',
    specsOrReadTime: '980 WORDS · 5 MIN READ',
    excerpt:
      'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.',
    pullQuote:
      'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
    bodyContent: [
      'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
      'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
      'Quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      'In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc.',
      'Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis.',
    ],
    isFeatured: false,
  },
  {
    id: 'editorial-cartoon-02',
    catalogNumber: 'CAT-07',
    title: 'Editorial Cartoon 02',
    subtitle: 'Archival Study & Composition',
    medium: 'Editorial Cartoon',
    theme: 'Campus Ephemera',
    author: {
      name: 'Roman Kraft',
      programAndYear: 'Contributing Artist',
      deskRole: 'Unsplash Visual Archive',
    },
    publishedDate: 'OCT 2026 · VOL. XLII',
    specsOrReadTime: 'CHARCOAL & XEROX · 600 DPI',
    excerpt:
      'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    pullQuote:
      'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
    bodyContent: [
      'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.',
      'Curatorial note: Charcoal, xerox toner, and newsprint collage on chipboard, 18 × 24 in. Pressroom archival plate study digitized at 600 DPI.',
    ],
    artworkUrl: unsplash('photo-1495020689067-958852a7765e'),
    artworkCaption:
      'Plate 03. Reading broadsheet newspaper composition, archival toner and newsprint texture study.',
    artworkSource: 'Roman Kraft on Unsplash',
    artworkSourceUrl:
      'https://unsplash.com/photos/man-sitting-on-bench-reading-newspaper-_Zua2hyvTBk',
    isFeatured: false,
  },
  {
    id: 'photo-essay-02',
    catalogNumber: 'CAT-08',
    title: 'Photo Essay 02',
    subtitle: 'Architectural Study in High Contrast',
    medium: 'Photo Essay',
    theme: 'Urban Rust',
    author: {
      name: 'Sean Pollock',
      programAndYear: 'Contributing Artist',
      deskRole: 'Unsplash Photography',
    },
    publishedDate: 'OCT 2026 · VOL. XLII',
    specsOrReadTime: 'DIGITAL MONOCHROME · 24 MP RAW',
    excerpt:
      'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut.',
    pullQuote:
      'Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui.',
    bodyContent: [
      'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.',
      'Curatorial note: North façade low-angle architectural exposure. Converted from 24 MP RAW capture, exhibited without retouching.',
    ],
    artworkUrl: unsplash('photo-1486406146926-c627a92ad1ab'),
    artworkCaption:
      'Plate 04. Upward perspective of board-formed architectural concrete façade. 24 MP monochrome capture.',
    artworkSource: 'Sean Pollock on Unsplash',
    artworkSourceUrl:
      'https://unsplash.com/photos/low-angle-photo-of-city-high-rise-buildings-during-daytime-PhYq704ffdA',
    isFeatured: false,
  },
];
