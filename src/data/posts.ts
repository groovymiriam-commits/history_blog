export interface Post {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  excerpt: string;
  date: string;
  year: string;
  mark: string;
  style: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const posts: Post[] = [
  {
    slug: 'great-emu-war',
    category: 'DARK HISTORY',
    categorySlug: 'dark-history',
    title: 'Australia vs. the emus: a war nobody won',
    excerpt: 'Machine guns, feathers, and a military operation that sounds invented. Louis investigates the Great Emu War.',
    date: 'June 18, 2024',
    year: '1932',
    mark: 'XVIII',
    style: '',
    intro: 'In the spring of 1932, thousands of emus marched into Western Australia\'s wheat fields. They were tall, fast, hungry, and entirely unimpressed by the idea of a border.',
    sections: [
      { heading: 'The enemy had excellent footwork', paragraphs: ['For farmers, this was not a charming wildlife encounter. It was a crop crisis. So the government called in the military, supplied them with Lewis guns, and prepared for battle.', 'The first attempt began in November. Soldiers quickly discovered that emus were difficult targets: they moved in unpredictable groups, scattered when approached, and could run at speeds of up to 30 miles per hour.'] },
      { heading: 'A technical victory, perhaps', paragraphs: ['After days of jams, missed shots, and ammunition shortages, the operation was scaled back. A second attempt had slightly more success, but the emus still managed to keep the upper hand.', 'The military operation was abandoned, the emus remained, and farmers eventually received government support for fencing. Australia had not technically lost a war, but it had certainly not won one either.'] },
    ],
  },
  {
    slug: 'clockwork-duck',
    category: 'STRANGE PEOPLE',
    categorySlug: 'strange-people',
    title: 'The woman who built a clockwork duck',
    excerpt: 'In 1739, a French inventor unveiled a mechanical bird that could eat, flap, and make everyone deeply uncomfortable.',
    date: 'June 12, 2024',
    year: '1739',
    mark: '1739',
    style: '',
    intro: 'Long before robots became useful, one inventor built a duck whose main talents were eating grain and making an audience question reality.',
    sections: [
      { heading: 'A bird made of gears', paragraphs: ['The mechanical duck was presented as a marvel of engineering, with hundreds of moving parts hidden beneath its gilded feathers. It could move its wings, drink, and appear to digest food.', 'The trick was less biological than theatrical. The machine was designed to create wonder, and it succeeded magnificently.'] },
      { heading: 'The art of making people curious', paragraphs: ['The duck belonged to a long tradition of public machines that blurred the line between science and spectacle. Its legacy is not practical poultry, but the idea that invention can begin with a wonderfully strange question.'] },
    ],
  },
  {
    slug: 'fish-on-trial',
    category: 'ROYAL CHAOS',
    categorySlug: 'royal-chaos',
    title: 'When a town put a fish on trial',
    excerpt: 'A very serious courtroom. A very slippery defendant. The medieval world had a way with civic drama.',
    date: 'May 28, 2024',
    year: '1451',
    mark: '?!',
    style: 'alt',
    intro: 'Medieval courts were not always concerned with keeping the courtroom strictly human. Sometimes the accused arrived with fins, scales, and no obvious legal representation.',
    sections: [
      { heading: 'Justice, but make it aquatic', paragraphs: ['Accounts of animals being formally accused were not unheard of in Europe. The rituals borrowed the language of ordinary law: a charge, a hearing, and occasionally a punishment.', 'Whether anyone expected the animal to understand the proceedings is less clear. The ceremony was often as important as the verdict.'] },
      { heading: 'A useful kind of absurdity', paragraphs: ['These stories reveal how seriously communities treated order, even when the defendant was impossible to cross-examine. History is full of systems that become funniest when followed perfectly.'] },
    ],
  },
  {
    slug: 'emergency-moustache',
    category: 'WEIRD HISTORY',
    categorySlug: 'weird-history',
    title: 'The pocket-sized emergency moustache',
    excerpt: 'A Victorian solution in search of a problem, and a tiny grooming kit that really did exist.',
    date: 'April 03, 2024',
    year: '1881',
    mark: '1881',
    style: 'ink',
    intro: 'The Victorian era had a solution for nearly everything, including the apparently urgent problem of being caught without a moustache.',
    sections: [
      { heading: 'Portable dignity', paragraphs: ['False facial hair could be attached, trimmed, and carried as part of a personal grooming kit. The moustache was not merely decoration: it was a small piece of social architecture.', 'A pocket version turned grooming into preparedness. One never knew when a little extra gravitas might be required.'] },
      { heading: 'The accessory as biography', paragraphs: ['Objects like these tell us what people wanted to project: maturity, seriousness, authority, or simply excellent upper-lip coverage. Fashion can be a surprisingly direct historical document.'] },
    ],
  },
  {
    slug: 'forgotten-postcards',
    category: 'FORGOTTEN THINGS',
    categorySlug: 'forgotten-things',
    title: 'The postcard that crossed an ocean for a penny',
    excerpt: 'Before group chats, a small rectangle of card carried jokes, news, and tiny glimpses of ordinary lives.',
    date: 'March 19, 2024',
    year: '1902',
    mark: 'P.S.',
    style: 'alt',
    intro: 'A postcard was once the fastest way to send a thought that was too small for a letter and too important to keep to yourself.',
    sections: [
      { heading: 'A public little message', paragraphs: ['Postcards made communication cheaper and more casual. They also made it unexpectedly visible: a message could travel without an envelope, carrying a snapshot of daily life through the post.'] },
      { heading: 'The archive of ordinary days', paragraphs: ['The most revealing postcards are often not about grand events. They mention weather, errands, missed trains, and who came to tea. Together, those fragments make the past feel inhabited.'] },
    ],
  },
];

export const categories = [...new Map(posts.map((post) => [post.categorySlug, post.category])).entries()].map(([slug, name]) => ({ slug, name }));

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
