export type SpellType =
  | 'Charm'
  | 'Enchantment'
  | 'Spell'
  | 'Hex'
  | 'Curse'
  | 'Jinx';

export interface Spell {
  spell: string;
  type: SpellType;
  effect: string;
}
