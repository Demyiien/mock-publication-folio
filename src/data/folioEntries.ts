import type { FolioEntry, FolioMedium, FolioTheme } from '../types/folio';

/**
 * Static exhibition dataset.
 * Curated journalism works with generic, universal press themes (News, Opinion, Features, Community),
 * photojournalistic captions, descriptive subtitles, and classical Latin prose excerpts.
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
  'News',
  'Opinion',
  'Features',
  'Community',
];

export const ISSUE_META = {
  publication: 'The Technologian Student Press',
  folio: 'Folio',
  motto: 'Documentation, Literature & Visual Arts Archive',
  issueDate: 'OCT 2026',
  volume: '',
  issueTitle: 'Exhibition Foreword & Selected Works',
} as const;

export const folioEntries: FolioEntry[] = [
  {
    id: 'poetry-selection-01',
    catalogNumber: 'CAT-01',
    title: 'Poetry Selection 01',
    subtitle: 'Stanza Reflections on Labor & Urban Life',
    medium: 'Poetry',
    theme: 'Features',
    author: {
      name: 'Student Contributor 01',
      programAndYear: 'BA Literature III',
      deskRole: 'Staff Writer',
    },
    publishedDate: 'OCT 2026',
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
    subtitle: 'Critical Notes on Press Freedom & Public Accountability',
    medium: 'Short Essay',
    theme: 'Opinion',
    author: {
      name: 'Student Contributor 02',
      programAndYear: 'BS Journalism IV',
      deskRole: 'Managing Editor',
    },
    publishedDate: 'OCT 2026',
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
    title: 'Monsoon Over the Quadrangle',
    subtitle: 'Rainy Season Dispatches Across Campus Grounds',
    medium: 'Photo Essay',
    theme: 'Features',
    author: {
      name: 'Max Bender',
      programAndYear: 'Contributing Artist',
      deskRole: 'Unsplash Photography',
    },
    publishedDate: 'OCT 2026',
    specsOrReadTime: '35MM · 300 DPI',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    pullQuote:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    bodyContent: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      'Curatorial note: High-resolution documentary capture of afternoon showers across the university quadrangle.',
    ],
    artworkUrl: unsplash('photo-1515694346937-94d85e41e6f0'),
    artworkCaption:
      'Raindrops streak across a lecture hall window as afternoon showers sweep over the campus walkway.',
    artworkSource: 'Max Bender on Unsplash',
    artworkSourceUrl:
      'https://unsplash.com/photos/water-droplets-on-clear-glass-1YHXFeOYpN0',
    isFeatured: true,
  },
  {
    id: 'editorial-cartoon-01',
    catalogNumber: 'CAT-04',
    title: 'The Daily Broadsheet',
    subtitle: 'Morning Editions Fresh off the Editorial Press',
    medium: 'Editorial Cartoon',
    theme: 'News',
    author: {
      name: 'AbsolutVision',
      programAndYear: 'Contributing Artist',
      deskRole: 'Unsplash Visual Archive',
    },
    publishedDate: 'OCT 2026',
    specsOrReadTime: 'NEWSPAPER PRINT · 300 DPI',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    pullQuote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    bodyContent: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      'Curatorial note: Documentary photojournalism study of printed newsprint broadsheet columns and typographic layout.',
    ],
    artworkUrl: unsplash('photo-1504711434969-e33886168f5c'),
    artworkCaption:
      'Freshly bundled morning newspapers lie stacked in the editorial newsroom awaiting student distribution.',
    artworkSource: 'AbsolutVision on Unsplash',
    artworkSourceUrl:
      'https://unsplash.com/photos/business-newspaper-article-WYd_PkCa1BY',
    isFeatured: false,
  },
  {
    id: 'poetry-selection-02',
    catalogNumber: 'CAT-05',
    title: 'Poetry Selection 02',
    subtitle: 'Verses on Regional Roots & Student Identity',
    medium: 'Poetry',
    theme: 'Community',
    author: {
      name: 'Student Contributor 05',
      programAndYear: 'BS Computer Science III',
      deskRole: 'Literary Contributor',
    },
    publishedDate: 'OCT 2026',
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
    subtitle: 'Analytical Commentary on Campus Welfare & Civic Engagement',
    medium: 'Short Essay',
    theme: 'Opinion',
    author: {
      name: 'Student Contributor 06',
      programAndYear: 'BA Literature II',
      deskRole: 'Staff Columnist',
    },
    publishedDate: 'OCT 2026',
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
    title: 'The Morning Reader',
    subtitle: 'Public Life & Daily Dispatches Along the Perimeter Park',
    medium: 'Editorial Cartoon',
    theme: 'Community',
    author: {
      name: 'Roman Kraft',
      programAndYear: 'Contributing Artist',
      deskRole: 'Unsplash Visual Archive',
    },
    publishedDate: 'OCT 2026',
    specsOrReadTime: 'STREET SCENE · 600 DPI',
    excerpt:
      'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
    pullQuote:
      'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
    bodyContent: [
      'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
      'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.',
      'Curatorial note: Candid street photojournalism capture of a park bench reader engrossed in the morning edition.',
    ],
    artworkUrl: unsplash('photo-1495020689067-958852a7765e'),
    artworkCaption:
      'A university commuter reads through the morning edition while seated on an outdoor perimeter park bench.',
    artworkSource: 'Roman Kraft on Unsplash',
    artworkSourceUrl:
      'https://unsplash.com/photos/man-sitting-on-bench-reading-newspaper-_Zua2hyvTBk',
    isFeatured: false,
  },
  {
    id: 'photo-essay-02',
    catalogNumber: 'CAT-08',
    title: 'Skylines in Concrete & Glass',
    subtitle: 'Metropolitan High-Rises Framing the University Corridor',
    medium: 'Photo Essay',
    theme: 'News',
    author: {
      name: 'Sean Pollock',
      programAndYear: 'Contributing Artist',
      deskRole: 'Unsplash Photography',
    },
    publishedDate: 'OCT 2026',
    specsOrReadTime: 'DIGITAL CAPTURE · 24 MP',
    excerpt:
      'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut.',
    pullQuote:
      'Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui.',
    bodyContent: [
      'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.',
      'Curatorial note: Architectural photojournalism perspective of commercial high-rises bordering the campus district.',
    ],
    artworkUrl: unsplash('photo-1486406146926-c627a92ad1ab'),
    artworkCaption:
      'Commercial towers and steel high-rises rise above the transit corridor bordering the university district.',
    artworkSource: 'Sean Pollock on Unsplash',
    artworkSourceUrl:
      'https://unsplash.com/photos/low-angle-photo-of-city-high-rise-buildings-during-daytime-PhYq704ffdA',
    isFeatured: false,
  },
];
