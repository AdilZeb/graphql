import { gql } from "@apollo/client";


export const SIGNUP_USER = gql`
mutation CreateUser($userNew: userInput!) {
  createUser(userNew: $userNew) {
    name
    email
    age
  }
}
`;