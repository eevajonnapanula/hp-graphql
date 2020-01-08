export type SpellType =
  | 'Charm'
  | 'Enchantment'
  | 'Spell'
  | 'Hex'
  | 'Curse'
  | 'Jinx';

export type ThemeType = 'dark' | 'light';

export interface Spell {
  spell: string;
  type: SpellType;
  effect: string;
}
