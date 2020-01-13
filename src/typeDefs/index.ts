import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Spell {
    isSelected: Boolean
  }
`;

export default typeDefs;
