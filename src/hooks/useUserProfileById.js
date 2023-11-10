import { gql, useQuery } from "@apollo/client";

const GET_USER_PROFILE = gql`
  query GetUserProfile($id: ID!) {
    userById(id: $id) {
      id
      username
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
export const useUserProfileById = (id) => {
  const { data, loading, error } = useQuery(GET_USER_PROFILE, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
    error,
  };
};
