import gql from 'graphql-tag';

export const GET_THEME = gql`
  query getTheme {
    theme @client {
      mode
      __typename
    }
  }
`;

export const TOGGLE_THEME = gql`
  mutation setTheme {
    setTheme @client {
      theme
    }
  }
`;

export const TOGGLE_SPELL_SELECT = gql`
  mutation toggleSpellSelect($id: ID) {
    setSpellSelect(id: $id) @client {
      id
    }
  }
`;

export const GET_SPELLS = gql`
  query spells($path: String) {
    spells @rest(type: "Spell", path: $path) {
      id
      spell
      type
      effect
      isSelected @client
    }
  }
`;
