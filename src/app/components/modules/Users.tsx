
// import React, { useEffect, useState } from 'react';
// import { directusClient } from '../../services/directus';
// import { readUsers } from '@directus/sdk';


// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directusClient.request(
//           readUsers({
//             fields: ['*'],
//           })
//         );
//         setUsers(result); // Set the users state with the fetched data
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Users</h2>
//       <ul className="main-content">
//         {users.map((user) => (
//           <li key={user.id}>{user.first_name} {user.last_name} {user.email}</li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directusClient } from '../../services/directus';
// import { readUsers, readMe, readItems, readRole} from '@directus/sdk';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const role = "62e865eb-c311-4174-928a-42a150cf213e";
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directusClient.request(
//           readRole("62e865eb-c311-4174-928a-42a150cf213e",{
//             fields: ['*'],
//           })
//         );
//         setUsers(result.data); // Set the users state with the fetched data
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Users</h2>
//       <ul className="main-content">
//         {users.map((user) => (
//           <li key={user.id}>{user.first_name} {user.last_name} {user.email}</li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directusClient } from '../../services/directus';
// import { readUsers } from '@directus/sdk';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   // const roleId = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directusClient.request(
//           readUsers({
//             fields: ['*'],
//             // filter: {
//             //   role: {
//             //     _eq: roleId,
//             //   },
//             // },
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Users</h2>
//       {/* {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <ul className="main-content">
//           {users.map((user) => (
//             <li key={user.id}>{user.role} {user.first_name} {user.last_name} {user.email}</li>
//           ))}
//         </ul>
//       )} */}
//       {error ? (
//         <p className="text-red-500">{error}</p>
//             ) : (
//         <ul className="main-content">
//           {users.map((user) => (
//             <li key={user.id}>
//               <dl>
//                 <dt>Role:</dt>
//                 <dd>{user.role}</dd>
//                 <dt>Name:</dt>
//                 <dd>{user.first_name} {user.last_name}</dd>
//                 <dt>Email:</dt>
//                 <dd>{user.email}</dd>
//               </dl>
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directusGraphql, directusClient } from '../../services/directus';
// import { readUsers, readRoles, readRole } from '@directus/sdk';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   //const roleId = "customer";
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";
//   // const query_object = 'firstname';
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directusClient.request(
//           readUsers({
//             fields:['*'],
//           filter:{
//             role: role_id
//           }
//            }
//           )
//         );
//         setUsers(result); // Note the .data property and fallback to an empty array
//       } catch (error) {
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Customers</h2>
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="flex flex-wrap align-baseline">
//           {users.map((user) => (
//             <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 rounded-lg shadow-md">
//               <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//               <p className="text-sm">Email: {user.email}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directusClient } from '../../services/directus';
// import { readUsers, readItems } from '@directus/sdk';
// import MealPlanTable from '../MealPlanTable';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directusClient.request(
//           readUsers({
//             fields: ['*'],
//             filter: {
//               role: role_id
//             }
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Customers</h2>
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="flex flex-wrap align-baseline">
//           {users.map((user) => (
//             <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 rounded-lg shadow-md">
//               <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//               <p className="text-sm">Email: {user.email}</p>
//               {/* <MealPlanTable userId={user.id} /> */}
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Users;
// import React, { useEffect, useState } from 'react';
// import { directusClient } from '../../services/directus';
// import { readUsers } from '@directus/sdk';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directusClient.request(
//           readUsers({
//             fields: ['*'],
//             filter: {
//               role: role_id
//             }
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Customers</h2>
//       <div className="flex flex-wrap align-baseline">
//         {users.map((user: any) => (
//           <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 rounded-lg shadow-md">
//             <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//             <p className="text-sm">Email: {user.email}</p>
//             {/* {user.id && <MealPlanTable userId={user.id} />} */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directusClient } from '../../services/directus';
// import { readUsers } from '@directus/sdk';
// import { Link } from 'react-router-dom';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directusClient.request(
//           readUsers({
//             fields: ['*'],
//             filter: {
//               role: role_id
//             }
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
//       <div className="flex flex-wrap align-baseline">
//         {users.map((user: any) => (
//           <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 rounded-lg shadow-md">
//             <Link to={`/users/${user.id}`}>
//               <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//               <p className="text-sm">Email: {user.email}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directusClient } from '../../services/directus';
// import { readUsers, readItems } from '@directus/sdk';
// import UserHealthAssessments from './UserHealthAssessments';
// //import UserHealthAssessment  from '../modules/UserHealthAssessments';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
 
//   const [error, setError] = useState<string | null>(null);
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directusClient.request(
//           readUsers({
//             fields: ['*'],
//             filter: {
//               role: role_id
//             }
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
//       <div className="flex flex-wrap align-baseline">
//         {users.map((user: any) => (
//           <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 rounded-lg shadow-md"
//                onClick={() =>  <UserHealthAssessments />}>
//             <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//             <p className="text-sm">Email: {user.email}</p>
//           </div>
//         ))}
//       </div>
     
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directus } from "../../../shared/directus"
// import { useUserStore } from "../../../shared/stores/user";
// import { readUsers } from '@directus/sdk';
// import UserHealthAssessments from './UserHealthAssessments';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directus.request(
//           readUsers({
//             fields: ['*'],
//             filter: {
//               role: role_id
//             }
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
//       <div className="flex flex-wrap align-baseline">
//         {users.map((user: any) => (
//           <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 rounded-lg shadow-md">
//             <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//             <p className="text-sm">Email: {user.email}</p>
//             <UserHealthAssessments />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directus } from "../../../shared/directus"
// import { useUserStore } from "../../../shared/stores/user";
// import { readUsers } from '@directus/sdk';
// import UserHealthAssessments from './UserHealthAssessments';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedUser, setSelectedUser] = useState<any | null>(null);
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directus.request(
//           readUsers({
//             fields: ['*'],
//             filter: {
//               role: role_id
//             }
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
//       <div className="flex flex-wrap align-baseline">
//         {users.map((user: any) => (
//           <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 rounded-lg shadow-md cursor-pointer" onClick={() => setSelectedUser(user)}>
//             <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//             <p className="text-sm">Email: {user.email}</p>
//           </div>
//         ))}
//       </div>
//       {selectedUser && (
//         <div className="mt-4 p-4 border border-gray-200 rounded-lg shadow-md">
//           <h3 className="text-lg font-bold">Additional Information</h3>
//           <p className="text-sm">Phone: {selectedUser.phone}</p>
//           <p className="text-sm">Address: {selectedUser.address}</p>
//           <UserHealthAssessments />
//         </div>
//       )}
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directus } from "../../../shared/directus"
// import { useUserStore } from "../../../shared/stores/user";
// import { readUsers } from '@directus/sdk';
// import UserHealthAssessments from './UserHealthAssessments';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedUser, setSelectedUser] = useState<any | null>(null);
//   const [showUserDetails, setShowUserDetails] = useState(false);
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directus.request(
//           readUsers({
//             fields: ['*'],
//             filter: {
//               role: role_id
//             }
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
//       {showUserDetails ? (
//         <div className="p-4 border border-gray-200 rounded-lg shadow-md">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={() => setShowUserDetails(false)}>Back</button>
//           <h3 className="text-lg font-bold">{selectedUser.first_name} {selectedUser.last_name}</h3>
//           <p className="text-sm">Email: {selectedUser.email}</p>
//           <p className="text-sm">Phone: {selectedUser.phone}</p>
//           <p className="text-sm">Address: {selectedUser.address}</p>
//           <UserHealthAssessments />
//         </div>
//       ) : (
//         <div className="flex flex-wrap align-baseline">
//           {users.map((user: any) => (
//             <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 rounded-lg shadow-md cursor-pointer" onClick={() => {
//               setSelectedUser(user);
//               setShowUserDetails(true);
//             }}>
//               <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//               <p className="text-sm">Email: {user.email}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { directus } from "../../../shared/directus"
// import { useUserStore } from "../../../shared/stores/user";
// import { readUsers } from '@directus/sdk';
// import { readItems } from '@directus/sdk';
// import UserHealthAssessments from './UserHealthAssessments';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedUser, setSelectedUser] = useState<any | null>(null);
//   const [showUserDetails, setShowUserDetails] = useState(false);
//   const [customer, setCustomer] = useState<any | null>(null);
//   const role_id = "ab8bf013-50a8-4694-9a82-f821bbe94f67";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await directus.request(
//           readUsers({
//             fields: ['*'],
//             filter: {
//               role: role_id
//             }
//           })
//         );
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     const fetchCustomer = async () => {
//       if (selectedUser) {
//         try {
//           const result = await directus.request(
//             readItems('customers', {
//               fields: ['*'],
//               filter: {
//                 id: selectedUser.id
//               }
//             })
//           );
//           setCustomer(result[0]);
//         } catch (error) {
//           console.error('Error fetching customer:', error);
//         }
//       }
//     };

//     fetchCustomer();
//   }, [selectedUser]);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
//       {showUserDetails ? (
//         <div className="p-4 border border-gray-200 rounded-lg shadow-md">
//           <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={() => setShowUserDetails(false)}>Back</button>
//           <h3 className="text-lg font-bold">{selectedUser.first_name} {selectedUser.last_name}</h3>
//           <p className="text-sm">Email: {selectedUser.email}</p>
//           <p className="text-sm">Phone: {customer && customer.phone}</p>
//           <p className="text-sm">Address: {customer && customer.address}</p>
//           <UserHealthAssessments />
//         </div>
//       ) : (
//         <div className="flex flex-wrap align-baseline">
//           {users.map((user: any) => (
//             <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 hover:bg-pink-500 rounded-lg shadow-md cursor-pointer" onClick={() => {
//               setSelectedUser(user);
//               setShowUserDetails(true);
//             }}>
//               <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//               <p className="text-sm">Email: {user.email}</p>
//               {/* <p className="text-sm">Phone: {customer && customer.phone}</p>
//               <p className="text-sm">Address: {customer && customer.address}</p> */}
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { getUsers } from '../../../shared/firestore.ts'; // Adjust the import path
// import UserHealthAssessments from '../modules/UserHealthAssessments.tsx';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedUser, setSelectedUser] = useState<any | null>(null);
//   const [showUserDetails, setShowUserDetails] = useState(false);
//   const [customer, setCustomer] = useState<any | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await getUsers();
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Assuming customer details are part of the user data in Firestore
//   useEffect(() => {
//     if (selectedUser) {
//       setCustomer(selectedUser); // Assuming customer details are part of the user object
//     }
//   }, [selectedUser]);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
//       {showUserDetails ? (
//         <div className="p-4 border border-gray-200 rounded-lg shadow-md">
//           <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={() => setShowUserDetails(false)}>Back</button>
//           <h3 className="text-lg font-bold">{selectedUser.first_name} {selectedUser.last_name}</h3>
//           <p className="text-sm">Email: {selectedUser.email}</p>
//           <p className="text-sm">Phone: {customer && customer.phone}</p>
//           <p className="text-sm">Address: {customer && customer.address}</p>
//           <UserHealthAssessments userID={''} />
//         </div>
//       ) : (
//         <div className="flex flex-wrap align-baseline">
//           {users.map((user: any) => (
//             <div key={user.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 hover:bg-pink-500 rounded-lg shadow-md cursor-pointer" onClick={() => {
//               setSelectedUser(user);
//               setShowUserDetails(true);
//             }}>
//               <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//               <p className="text-sm">Email: {user.email}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Users;

// import React, { useEffect, useState } from 'react';
// import { getUsers } from '../../../shared/firestore'; // Adjust the import path
// import UserHealthAssessments from '../modules/UserHealthAssessments';

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedUser, setSelectedUser] = useState<any | null>(null);
//   const [showUserDetails, setShowUserDetails] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const result = await getUsers();
//         setUsers(result);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <section id="users" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
//       {showUserDetails ? (
//         <div className="p-4 border border-gray-200 rounded-lg shadow-md">
//           <button
//             className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4"
//             onClick={() => setShowUserDetails(false)}
//           >
//             Back
//           </button>
//           <h3 className="text-lg font-bold">{selectedUser.first_name} {selectedUser.last_name}</h3>
//           <p className="text-sm">Email: {selectedUser.email}</p>
//           <p className="text-sm">Phone: {selectedUser.phone}</p>
//           <p className="text-sm">Address: {selectedUser.address}</p>
//           <UserHealthAssessments id={selectedUser.id} />
//         </div>
//       ) : (
//         <div className="flex flex-wrap align-baseline">
//           {users.map((user: any) => (
//             <div
//               key={user.id}
//               className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 hover:bg-pink-500 rounded-lg shadow-md cursor-pointer"
//               onClick={() => {
//                 setSelectedUser(user);
//                 setShowUserDetails(true);
//               }}
//             >
//               <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
//               <p className="text-sm">Email: {user.email}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Users;

import React, { useEffect, useState } from 'react';
import { getUsers } from '../../../shared/firestore';
import UserHealthAssessments from '../modules/UserHealthAssessments';

const Users: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getUsers();
        setUsers(result);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users');
      }
    };
    fetchUsers();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section id="users" className="mb-8">
      <h2 className="text-2xl mb-2 text-pink-500">Patient Profile</h2>
      {showUserDetails ? (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={() => setShowUserDetails(false)}
          >
            Back
          </button>
          <h3 className="text-lg font-bold">{selectedUser.firstname} {selectedUser.lastname}</h3>
          <p className="text-sm">Email: {selectedUser.email}</p>
          <p className="text-sm">Phone: {selectedUser.phone}</p>
          <p className="text-sm">City: {selectedUser.city}</p>
          <UserHealthAssessments id={selectedUser.id} />
        </div>
      ) : (
        <div className="flex flex-wrap align-baseline">
          {users.map((user: any) => (
            <div
              key={user.id}
              className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 hover:bg-pink-500 rounded-lg shadow-md cursor-pointer"
              onClick={() => {
                setSelectedUser(user);
                setShowUserDetails(true);
              }}
            >
              <h3 className="text-lg font-bold">{user.firstname} {user.lastname}</h3>
              <p className="text-sm">Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Users;