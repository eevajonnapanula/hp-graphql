import gql from 'graphql-tag';

export const GET_THEME = gql`
  query getTheme {
    theme @client {
      mode
      __typename
    }
  }
`;

export const TOGGLE_SELECTED = gql`
  mutation toggleSelected($theme: String) {
    setTheme(theme: $theme) @client {
      theme
    }
  }
`;

export const TOGGLE_SPELL_SELECT = gql`
  mutation toggleSelected($id: ID) {
    setSpellSelect(id: $id) @client {
      id
    }
  }
`;

export const GET_SPELLS = gql`
  query spell($path: String) {
    spells @rest(type: "Spell", path: $path) {
      id
      spell
      type
      effect
      isSelected @client
    }
  }
`;
