import { gql } from 'react-apollo'

export const createNewContact = gql`
  mutation(
    $given_name: String!
    $family_name: String
    $email: String!
    $phone: String!
    $affiliate_id: Int!
  ) {
    createContact(
      given_name: $given_name
      family_name: $family_name
      email: $email
      phone: $phone
      affiliate_id: $affiliate_id
    ){
      id
    }
  }
`
