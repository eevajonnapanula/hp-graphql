export type SpellType =
  | 'Charm'
  | 'Enchantment'
  | 'Spell'
  | 'Hex'
  | 'Curse'
  | 'Jinx';

export type ThemeType = 'dark' | 'light';

export interface Spell {
  id: string;
  spell: string;
  type: SpellType;
  effect: string;
  isSelected: boolean;
}

export interface SetSpellSelectArgs {
  id: string;
}