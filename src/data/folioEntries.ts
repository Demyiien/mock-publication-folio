import type { FolioEntry, FolioMedium, FolioTheme } from '../types/folio';

/**
 * Static exhibition dataset — Folio XLII, "Nocturne in Maroon & Concrete".
 * Eight works, two per medium, two per theme.
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
  motto: 'Truth in Print, Defiance in Art',
  issueDate: 'OCT 2026',
  volume: 'VOL. XLII',
  issueTitle: 'Nocturne in Maroon & Concrete',
} as const;

export const folioEntries: FolioEntry[] = [
  {
    id: 'jeepney-two-fourteen',
    catalogNumber: 'CAT-01',
    title: 'Jeepney, 2:14 A.M.',
    subtitle: 'after the last proof was signed',
    medium: 'Poetry',
    theme: 'Urban Rust',
    author: {
      name: 'Ysabel Marquez',
      programAndYear: 'BA Communication III',
      deskRole: 'Senior Literary Editor',
    },
    publishedDate: 'OCT 2026 // VOL. XLII',
    specsOrReadTime: '5 STANZAS // 3 MIN READ',
    excerpt:
      'The driver counts our coins by feel,\nthe way we count our errors by the light\nof a monitor gone soft with overtime.',
    pullQuote: 'We are the last edition of the night, folded small enough to fit inside a fare.',
    bodyContent: [
      'The driver counts our coins by feel,\nthe way we count our errors by the light\nof a monitor gone soft with overtime.\nTwelve pesos, a crumpled proof, a pen\nthat bled through three revisions of the truth.',
      'Taft Avenue is a long exhale of sodium.\nThe rails above us hum their iron psalm.\nSomeone sleeps against the rusted grab-bar,\nmouth open on a headline no one wrote,\nlanyard swinging like a pendulum of sleep.',
      'I hold the layout pages on my lap\nlike something that could still be saved from rain.\nThe column inches flicker in the dark.\nThe dean will read them Monday with his coffee.\nThe printer will forgive us. Maybe not.',
      'Bayad po, says the girl beside the door,\nand passes forward someone else\'s coins,\nand this is how a city keeps its faith:\nhand to stranger\'s hand to stranger\'s hand,\na chain of trust no editor could cut.',
      'We are the last edition of the night,\nfolded small enough to fit inside a fare.\nThe jeepney shudders at the España light.\nI close my eyes and proofread the stars—\nthree typos in Orion. Let them stand.',
    ],
    isFeatured: false,
  },
  {
    id: 'redacted-column',
    catalogNumber: 'CAT-02',
    title: 'The Redacted Column',
    subtitle: 'On the Eleven Black Bars of Volume XXXVIII',
    medium: 'Short Essay',
    theme: 'Dissent & Memory',
    author: {
      name: 'Rafael Domingo',
      programAndYear: 'BS Political Science IV',
      deskRole: 'Managing Editor',
    },
    publishedDate: 'OCT 2026 // VOL. XLII',
    specsOrReadTime: '1,240 WORDS // 6 MIN READ',
    excerpt:
      'In the archive room beneath the old library, there is a bound volume from 2022 with eleven black rectangles on page four. Each one is exactly the width of a column. Nobody who made them still works here.',
    pullQuote:
      'A black bar is the most honest thing an institution ever prints. It is a confession in the shape of a silence.',
    bodyContent: [
      'In the archive room beneath the old library, there is a bound volume from 2022 with eleven black rectangles on page four. Each one is exactly the width of a column. Nobody who made them still works here. The adviser retired; the editor graduated and moved to Doha; the layout artist who inked them by hand, one marker stroke at a time, now designs packaging for a snack company in Pasig. I found her on a professional networking site and asked if she remembered. She replied in four minutes: "Every night."',
      'The article beneath those bars concerned a tuition increase and a board meeting held, according to the minutes, at a resort two hours from campus. That is all I can tell you, because that is all the bars allow. What I can tell you is that the staff chose to print the bars rather than pull the page. They could have run a house advertisement. They could have widened the photographs. Instead, they printed absence at full ink density, sixty-five lines per inch, and let ten thousand students hold it in their hands.',
      'A black bar is the most honest thing an institution ever prints. It is a confession in the shape of a silence. A redaction says: something was here, and someone with power decided you should not see it. It cannot lie about its own existence. That is the paradox the censor never solves—every erasure is also an inscription.',
      'We talk about press freedom as though it were a building, something erected once and then maintained. But it behaves more like weather. It shifts with each administration, each adviser, each budget hearing where the student publication fee is quietly reallocated to "auxiliary services." The Campus Journalism Act of 1991 promised us editorial independence. It did not promise us printers, or paper, or the courage to use either.',
      'This year, we are reprinting page four in the Folio, bars and all. Not to reveal what was hidden—we do not know, and the people who know are not speaking—but to remind the incoming staff that the bars were a choice. Somebody decided that a visible wound was better than a hidden scar. That decision is the inheritance. Everything else is just ink.',
    ],
    isFeatured: false,
  },
  {
    id: 'gate-three-flood-stage',
    catalogNumber: 'CAT-03',
    title: 'Gate 3 at Flood Stage',
    subtitle: 'Seven frames from the August monsoon',
    medium: 'Photo Essay',
    theme: 'Campus Ephemera',
    author: {
      name: 'Marco Villanueva',
      programAndYear: 'BS Architecture IV',
      deskRole: 'Chief Photojournalist',
    },
    publishedDate: 'OCT 2026 // VOL. XLII',
    specsOrReadTime: '35MM // ILFORD HP5+ PUSHED 2 STOPS',
    excerpt:
      'For nine hours on the twelfth of August, Gate 3 ceased to be an entrance. Villanueva stood under the guardhouse awning with two rolls of film and photographed the water as it rewrote the campus map.',
    pullQuote:
      'The flood does not care which side of the gate you are on. For one afternoon, the campus and the city were the same brown water.',
    bodyContent: [
      'For nine hours on the twelfth of August, Gate 3 ceased to be an entrance. Marco Villanueva stood beneath the guardhouse awning with two rolls of Ilford HP5+ and a borrowed Pentax, photographing the water as it rewrote the campus map. The resulting sequence—seven frames selected from seventy-two exposures—is the most quietly devastating work in this year\'s Folio.',
      'Villanueva pushes his film two stops, and the grain becomes a kind of weather in itself. Rain is rendered not as streaks but as static, a granular fog that dissolves the boundary between the security turnstiles and the flooded avenue beyond. In the fourth frame, a student wades through knee-deep water holding a laminated thesis manuscript above her head like a hymnal. Her face is not visible. It does not need to be.',
      'What distinguishes this essay from the countless flood photographs that circulate every monsoon season is its refusal of spectacle. There are no rescue boats, no aerial drone shots, no submerged cars. Villanueva keeps his lens at the height of a pedestrian, and the frame always includes some fragment of the institution: a gate bar, an ID scanner, a sign reading AUTHORIZED PERSONNEL ONLY half-swallowed by the current.',
      'Curatorial note: The prints are exhibited here in the photographer\'s original high-contrast treatment. Viewers may toggle the "Original" view to see the digitized negative without the archival contrast filter applied by the Folio design system.',
    ],
    artworkUrl: unsplash('photo-1515694346937-94d85e41e6f0'),
    artworkCaption:
      'Frame 04 of 07. The guardhouse window at 3:40 P.M., water level at 61 cm. Silver gelatin scan, 4800 DPI.',
    isFeatured: true,
  },
  {
    id: 'advisers-red-pen',
    catalogNumber: 'CAT-04',
    title: "The Adviser's Red Pen",
    subtitle: 'A cartoon in three panels and one omission',
    medium: 'Editorial Cartoon',
    theme: 'Dissent & Memory',
    author: {
      name: 'Kristine Abad',
      programAndYear: 'BFA Visual Communication III',
      deskRole: 'Staff Cartoonist',
    },
    publishedDate: 'OCT 2026 // VOL. XLII',
    specsOrReadTime: 'INK & HALFTONE // 300 DPI',
    excerpt:
      'A newspaper drawn as a cage, its column rules becoming bars. Inside, a tiny reporter takes notes on the pen that is redrawing her prison one correction at a time.',
    pullQuote: 'Every correction is a small architecture. Enough of them and you have built a room with no door.',
    bodyContent: [
      'Kristine Abad\'s cartoon arrives in this exhibition already famous—or infamous, depending on which floor of the administration building you ask. First pinned to the pressroom corkboard in July, it was photographed, shared, and eventually printed on a protest banner carried during the student publication fee hearing.',
      'The composition is deceptively simple. A broadsheet is rendered in perspective, its column rules extruded upward into the bars of a cage. Inside, a reporter no taller than a byline crouches with her notebook. Above her, an enormous red pen—the only color Abad permits herself—hovers mid-stroke, adding one more bar. The halftone dots of the newsprint are hand-stippled; Abad estimates eleven thousand of them.',
      'Abad works in a tradition that runs from the martial-law-era underground komiks of the 1970s through to the sharp-elbowed political cartoons of the national dailies. Her contribution is restraint. There is no caption, no speech balloon, no labeled figure. The cartoon trusts its reader, which is perhaps the most radical gesture an editorial cartoon can make.',
      'Curatorial note: Reproduced here in monochrome per the Folio\'s archival treatment. In the original ink, the pen is a single stroke of cadmium red—the exhibition maroon is a deliberate homage.',
    ],
    artworkUrl: unsplash('photo-1504711434969-e33886168f5c'),
    artworkCaption:
      'Panel study, press archive. Hand-stippled halftone on Bristol board, 11 × 17 in., digitized at 300 DPI.',
    isFeatured: false,
  },
  {
    id: 'lola-keyboard',
    catalogNumber: 'CAT-05',
    title: 'Lola Speaks in a Language the Keyboard Forgot',
    medium: 'Poetry',
    theme: 'Mother Tongue',
    author: {
      name: 'Andrea Lumbao',
      programAndYear: 'BS Computer Science III',
      deskRole: 'Literary Staff Writer',
    },
    publishedDate: 'OCT 2026 // VOL. XLII',
    specsOrReadTime: '4 STANZAS // 2 MIN READ',
    excerpt:
      'My grandmother has a word for the smell\nof rain on a tin roof before it arrives.\nAutocorrect insists I meant "parasol."',
    pullQuote: 'Autocorrect insists I meant "parasol." I did not mean parasol. I meant the whole sky, warning us.',
    bodyContent: [
      'My grandmother has a word for the smell\nof rain on a tin roof before it arrives.\nAutocorrect insists I meant "parasol."\nI did not mean parasol.\nI meant the whole sky, warning us.',
      'In Waray, she says, there are four ways\nto say you are leaving, and only one\nof them means you are coming back.\nI study algorithms in a language\nthat has no word for coming back.',
      'Her voice notes reach me on the late shuttle,\nthirty seconds each, the limit of the app,\nso every story breaks off mid-sentence\nlike a river stopped by a concrete dam.\nI play them twice. I never hear the end.',
      'Tonight I am writing her a parser—\na small machine to hold the words she keeps,\nthe grammar of the rain before the rain.\nThe compiler throws an error on line one:\nunknown token. Yes. That is the point.',
    ],
    isFeatured: false,
  },
  {
    id: 'dictionary-unsaid',
    catalogNumber: 'CAT-06',
    title: 'A Dictionary of Words My Classmates No Longer Say',
    subtitle: 'Field notes from a Kapampangan childhood',
    medium: 'Short Essay',
    theme: 'Mother Tongue',
    author: {
      name: 'Joaquin Sangalang',
      programAndYear: 'BA Literature II',
      deskRole: 'Features Correspondent',
    },
    publishedDate: 'OCT 2026 // VOL. XLII',
    specsOrReadTime: '980 WORDS // 5 MIN READ',
    excerpt:
      'There is a Kapampangan word, "manalbe," for the patience required to wait for rice to finish steaming without lifting the lid. I have not heard anyone under thirty use it. I have started keeping a list.',
    pullQuote:
      'A language does not die in a single generation. It dies one dormitory at a time, one group chat at a time, one shrug at a time.',
    bodyContent: [
      'There is a Kapampangan word, manalbe, for the patience required to wait for rice to finish steaming without lifting the lid. I have not heard anyone under thirty use it. I have started keeping a list—a dictionary, really, though it grows in the wrong direction. Each entry is a word I remember from my grandfather\'s kitchen in Guagua and have not heard since I enrolled in Manila.',
      'The list is forty-one words long. It includes a term for the specific silence after a bell finishes ringing, a verb for helping someone carry something they are too proud to admit is heavy, and a noun for the second, weaker cup of coffee made from the grounds of the first. None of these have exact equivalents in Filipino or English. All of them describe something I still experience every week.',
      'A language does not die in a single generation. It dies one dormitory at a time, one group chat at a time, one shrug at a time. My blockmates are from eleven provinces. In the canteen we speak Taglish, the democratic compromise, and it is warm and fast and funny. But every compromise has a cost, and ours is paid in the words that do not survive the commute from home.',
      'I am not arguing for purity. Languages borrow; that is how they breathe. I am arguing for memory. The university library has a linguistics shelf with exactly two books on Kapampangan, one of them water-damaged from the 2009 flood. I would like there to be a third. Consider this essay a first draft of the index.',
      'Entry forty-two, added last Thursday: a word my lola used for the moment a guest stands up to leave but keeps talking at the door. I could not remember it. I called home. My mother could not remember it either. We were both quiet for a while, standing up to leave, still talking at the door.',
    ],
    isFeatured: false,
  },
  {
    id: 'deadline-ecology',
    catalogNumber: 'CAT-07',
    title: 'Deadline Ecology',
    subtitle: 'The pressroom as a habitat',
    medium: 'Editorial Cartoon',
    theme: 'Campus Ephemera',
    author: {
      name: 'Paolo Enriquez',
      programAndYear: 'BS Industrial Design II',
      deskRole: 'Graphics & Layout Artist',
    },
    publishedDate: 'OCT 2026 // VOL. XLII',
    specsOrReadTime: 'CHARCOAL & XEROX COLLAGE // 600 DPI',
    excerpt:
      'Stacked back issues become geological strata. Each layer is labeled with the crisis that filled it: the ID policy, the canteen closure, the typhoon semester. At the summit, a lone editor plants a flag made of a correction slip.',
    pullQuote: 'Our back issues are sediment. Dig down far enough and you will find every argument we have already lost.',
    bodyContent: [
      'Paolo Enriquez spent the summer break sorting the pressroom\'s disordered archive—fourteen years of unbound issues piled against the north wall—and the result is this mordant, affectionate cartoon. Deadline Ecology imagines the stack of back issues as a cross-section of the earth, each stratum annotated in the clipped hand of a field geologist.',
      'The labels are drawn from real front pages: ID LACE POLICY (2014), CANTEEN PRIVATIZATION (2017), THE TYPHOON SEMESTER (2020), MODULAR LEARNING (2021). Fossils are embedded in the layers—a dried highlighter, a USB drive, a cup noodle lid, the jawbone of a stapler. At the summit, a tiny editor plants a flag made from a correction slip, claiming a peak that will be buried by next semester\'s crisis.',
      'Enriquez builds his images through photocopy collage, enlarging and degrading charcoal drawings until the grain becomes structural. The technique suits the subject. Newspapers are, after all, machines for producing copies, and each generation of reproduction loses a little of the original while gaining texture.',
      'Curatorial note: The cartoon has been adopted by the outgoing editorial board as the unofficial cover of the TTSP style manual, fourteenth edition.',
    ],
    artworkUrl: unsplash('photo-1495020689067-958852a7765e'),
    artworkCaption:
      'Collage study from the north-wall archive. Charcoal, toner, and newsprint on chipboard, 18 × 24 in.',
    isFeatured: false,
  },
  {
    id: 'brutalist-hours',
    catalogNumber: 'CAT-08',
    title: 'Brutalist Hours',
    subtitle: 'The Engineering Hall before demolition',
    medium: 'Photo Essay',
    theme: 'Urban Rust',
    author: {
      name: 'Bea Santiago',
      programAndYear: 'BS Civil Engineering IV',
      deskRole: 'Photo Desk Editor',
    },
    publishedDate: 'OCT 2026 // VOL. XLII',
    specsOrReadTime: 'DIGITAL MONOCHROME // 24 MP RAW',
    excerpt:
      'Built in 1968 and scheduled for demolition in December, the Engineering Hall is photographed from below, its board-formed concrete rising like a cliff of unanswered memos.',
    pullQuote: 'You cannot photograph a building that is about to disappear. You can only photograph the way it holds the light while it still can.',
    bodyContent: [
      'The Engineering Hall was poured in 1968, the same year the student council first demanded representation on the Board of Regents. It has housed the drafting rooms, the materials laboratory, and—for one turbulent decade—the TTSP pressroom itself. It is scheduled for demolition on the fourteenth of December to make way for a seven-storey "innovation hub" with a café on the ground floor.',
      'Bea Santiago, a civil engineering senior who has taken every one of her structural courses inside the building, spent six weeks photographing it at the edges of the day: 5:40 A.M. and 6:10 P.M., when the light rakes across the board-formed concrete and reveals the grain of the original timber molds. In her images the hall looks less like a building than a geological formation, something weathered rather than constructed.',
      'Santiago\'s essay is unusual in that it contains almost no people. When figures appear, they are reduced to scale markers—a silhouette in a stairwell window, a janitor\'s shadow on the loading dock. The effect is elegiac without sentimentality. This is a portrait of a structure doing what structures do: holding weight, holding time, holding the faint pencil marks of fifty-eight years of students who measured themselves against its columns.',
      'Curatorial note: The Folio has submitted a formal request to the Office of Campus Planning that a single board-formed panel from the façade be preserved and installed in the new building\'s lobby. As of print time, no response has been received.',
    ],
    artworkUrl: unsplash('photo-1486406146926-c627a92ad1ab'),
    artworkCaption:
      'North façade, 5:52 A.M. Looking up from the drafting room courtyard. Converted from RAW, exhibited without retouching.',
    isFeatured: false,
  },
];
