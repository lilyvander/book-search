import { gql } from '@apollo/client'

export const GET_MET = gql`
query me {
    me {
     _id
    username 
    email
    }
}
`;

