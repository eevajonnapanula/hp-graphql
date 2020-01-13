import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Spell {
    isSelected: Boolean
  }

  type Theme {
    mode: String
    __typename: String
  }

  extend type Query {
    theme: Theme
  }
`;

export default typeDefs;
