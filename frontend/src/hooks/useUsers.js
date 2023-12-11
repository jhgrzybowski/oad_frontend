import { gql, useQuery } from "@apollo/client"

const GET_USERS = gql`
{
    users {
        id
        username
        firstName
        lastName
        avatar
        weights {
            weight
            label
        }
        matches {
            id
            username
        }
    }
  }
`;

export const useUsers = () => {
    const { data, loading, error } = useQuery(GET_USERS);

    return {
        data,
        loading,
        error
    }
}