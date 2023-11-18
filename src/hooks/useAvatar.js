import useFetch from "./useFetch";
import { useKeycloak } from "@react-keycloak/web";
import noProfilePic from "../assets/no-profile.png"

const useAvatar = ({ user }) => {
  const { keycloak } = useKeycloak();
  const header = {
    Authorization: `Bearer ${keycloak.token}`,
  };

  const { avatarData, avatarLoading, avatarError } = useFetch(
    user?.avatar?.replace("8081", "8088") ?? noProfilePic,
    header
  );
  return { avatarData, avatarLoading, avatarError };
};

export default useAvatar;
