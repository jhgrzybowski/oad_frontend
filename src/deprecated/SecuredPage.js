import React from 'react';
import { useKeycloak } from '@react-keycloak/web';


const SecuredPage = () => {
  const {keycloak, initialized} = useKeycloak();

 return (
   <div>
     <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
   </div>
 );
};

export default SecuredPage;