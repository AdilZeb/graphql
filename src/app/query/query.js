
import { gql } from '@apollo/client';

export  const GET_USER_DATA = gql`
 query getalluser  {
users {
    id
    name
    email
    age
    quotes {
      author
      quote
    }
  }
}

`;