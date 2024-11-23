// import { useNavigate } from "react-router-dom";
// import { directus } from "../../shared/directus"
// import { useUserStore } from "../../shared/stores/user";

// function Profile() {
//   const navigate = useNavigate()
//   const user = useUserStore()

//   const logoutAction = () => {
//     directus.logout().then(() => {
//       navigate('/', { replace: true });
//     });
//   }

//   return (
//     <div>
//       <button 
//       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
//       onClick={logoutAction}>logout</button>
//     </div>
//   )
// }

// export default Profile

import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../shared/stores/user";
import { logout } from "../../shared/firestore";

function Profile() {
  const navigate = useNavigate()
  const user = useUserStore()

  const logoutAction = async () => {
    await logout();
    navigate('/', { replace: true });
  }

  return (
    <div>
      <button 
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
      onClick={logoutAction}>logout</button>
    </div>
  )
}

export default Profile;