import { gql, useQuery } from "@apollo/client";

const GET_USER_PROFILE = gql`
query GetUserProfile($username: String!) {
    userByUsername(username: $username) {
      id
      username
      avatar
      activities
      weights {
        weight
        label
      }
      matches {
        id
        username
        avatar
        activities
        weights {
          weight
          label
        }
      }
    }
  }
`;
export const useUserProfileByUsername = (username) => {
  const { data, loading, error } = useQuery(GET_USER_PROFILE, {
    variables: {
      username,
    },
  });

  return {
    data,
    loading,
    error,
  };
};
