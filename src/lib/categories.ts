export const CATEGORIES = [
  { slug: 'new-owner-basics',       label: 'New Owner Basics',          emoji: '🐾' },
  { slug: 'litter-box',             label: 'Litter Box',                emoji: '🪣' },
  { slug: 'food-nutrition',         label: 'Food & Nutrition',          emoji: '🍗' },
  { slug: 'behavior-body-language', label: 'Behavior & Body Language',  emoji: '👀' },
  { slug: 'play-enrichment',        label: 'Play & Enrichment',         emoji: '🎾' },
  { slug: 'biting-aggression',      label: 'Biting & Aggression',       emoji: '😾' },
  { slug: 'health-safety',          label: 'Health & Safety',           emoji: '💊' },
  { slug: 'living-together',        label: 'Living Together',           emoji: '🏠' },
  { slug: 'training',               label: 'Training',                  emoji: '🎓' },
  { slug: 'scared-anxious',         label: 'Scared & Anxious Cats',     emoji: '😨' },
  { slug: 'why-does-my-cat',        label: 'Why Does My Cat...?',       emoji: '🤔' },
] as const;

export type CategorySlug = typeof CATEGORIES[number]['slug'];
