// import { initializeApp } from "firebase/app";
// import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDX5JbV3mC3nS68465U5V40-T8naNwKwSQ",
//   authDomain: "enutritionapp.firebaseapp.com",
//   databaseURL: "https://enutritionapp-default-rtdb.firebaseio.com",
//   projectId: "enutritionapp",
//   storageBucket: "enutritionapp.firebasestorage.app",
//   messagingSenderId: "1025775829001",
//   appId: "1:1025775829001:web:e351c729a381e5290038d8",
//   measurementId: "G-LD7KWT5LH6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const logout = async (): Promise<void> => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Error signing out:", error);
//   }
// };

// const login = async (email: string, password: string): Promise<void> => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

// const register = async (email: string, password: string): Promise<void> => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     console.error("Error registering:", error);
//   }
// };

// const getAssessments = async (): Promise<any[]> => {
//   try {
//     const assessmentsRef = collection(db, 'health_assessments');
//     const querySnapshot = await getDocs(assessmentsRef);
//     return querySnapshot.docs.map(doc => doc.data());
//   } catch (error) {
//     console.error("Error fetching assessments:", error);
//     return [];
//   }
// };

// const getUsers = async (): Promise<any[]> => {
//   try {
//     const usersRef = collection(db, 'registrations');
//     const querySnapshot = await getDocs(usersRef);
//     return querySnapshot.docs.map(doc => doc.data());
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// };

// const getUsersBMI = async (): Promise<any[]> => {
//   try {
//     const bmiRef = collection(db, 'users_bmi');
//     const querySnapshot = await getDocs(bmiRef);
//     return querySnapshot.docs.map(doc => doc.data());
//   } catch (error) {
//     console.error("Error fetching BMI data:", error);
//     return [];
//   }
// };

// const getProfiles = async (): Promise<any[]> => {
//   try {
//     const profilesRef = collection(db, 'profile');
//     const querySnapshot = await getDocs(profilesRef);
//     return querySnapshot.docs.map(doc => doc.data());
//   } catch (error) {
//     console.error("Error fetching profiles:", error);
//     return [];
//   }
// };

// export { logout, login, register, getAssessments, getUsers, getUsersBMI, getProfiles };

// import { initializeApp } from "firebase/app";
// import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDX5JbV3mC3nS68465U5V40-T8naNwKwSQ",
//   authDomain: "enutritionapp.firebaseapp.com",
//   databaseURL: "https://enutritionapp-default-rtdb.firebaseio.com",
//   projectId: "enutritionapp",
//   storageBucket: "enutritionapp.firebasestorage.app",
//   messagingSenderId: "1025775829001",
//   appId: "1:1025775829001:web:e351c729a381e5290038d8",
//   measurementId: "G-LD7KWT5LH6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const logout = async (): Promise<void> => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Error signing out:", error);
//   }
// };

// const login = async (email: string, password: string): Promise<void> => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

// const register = async (email: string, password: string): Promise<void> => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     console.error("Error registering:", error);
//   }
// };

// const getAssessments = async (): Promise<any[]> => {
//   try {
//     const assessmentsRef = collection(db, 'health_assessments');
//     const querySnapshot = await getDocs(assessmentsRef);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching assessments:", error);
//     return [];
//   }
// };

// const getUsers = async (): Promise<any[]> => {
//   try {
//     const usersRef = collection(db, 'registrations');
//     const querySnapshot = await getDocs(usersRef);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// };

// const getUsersBMI = async (): Promise<any[]> => {
//   try {
//     const bmiRef = collection(db, 'users_bmi');
//     const querySnapshot = await getDocs(bmiRef);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching BMI data:", error);
//     return [];
//   }
// };

// const getProfiles = async (): Promise<any[]> => {
//   try {
//     const profilesRef = collection(db, 'registrations');
//     const querySnapshot = await getDocs(profilesRef);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching profiles:", error);
//     return [];
//   }
// };

// // Function to update user data
// const updateUser = async (userID: string, updatedData: any): Promise<void> => {
//   try {
//     const userRef = doc(db, 'registrations', userID);
//     await updateDoc(userRef, updatedData);
//     console.log('User updated successfully');
//   } catch (error) {
//     console.error('Error updating user:', error);
//     throw new Error('Error updating user');
//   }
// };

// // Function to delete user data
// const deleteUser = async (userID: string): Promise<void> => {
//   try {
//     const userRef = doc(db, 'registrations', userID);
//     await deleteDoc(userRef);
//     console.log('User deleted successfully');
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     throw new Error('Error deleting user');
//   }
// };

// export { logout, login, register, getAssessments, getUsers, getUsersBMI, getProfiles, updateUser, deleteUser };

// import { initializeApp } from "firebase/app";
// import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDX5JbV3mC3nS68465U5V40-T8naNwKwSQ",
//   authDomain: "enutritionapp.firebaseapp.com",
//   databaseURL: "https://enutritionapp-default-rtdb.firebaseio.com",
//   projectId: "enutritionapp",
//   storageBucket: "enutritionapp.firebasestorage.app",
//   messagingSenderId: "1025775829001",
//   appId: "1:1025775829001:web:e351c729a381e5290038d8",
//   measurementId: "G-LD7KWT5LH6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const logout = async (): Promise<void> => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Error signing out:", error);
//   }
// };

// const login = async (email: string, password: string): Promise<void> => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

// const register = async (email: string, password: string): Promise<void> => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     console.error("Error registering:", error);
//   }
// };

// const getAssessments = async (): Promise<any[]> => {
//   try {
//     const assessmentsRef = collection(db, 'health_assessments');
//     const querySnapshot = await getDocs(assessmentsRef);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching assessments:", error);
//     return [];
//   }
// };

// const getUsers = async (): Promise<any[]> => {
//   try {
//     const usersRef = collection(db, 'registrations');
//     const querySnapshot = await getDocs(usersRef);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// };

// const getUsersBMI = async (): Promise<any[]> => {
//   try {
//     const bmiRef = collection(db, 'users_bmi');
//     const querySnapshot = await getDocs(bmiRef);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching BMI data:", error);
//     return [];
//   }
// };

// // Function to update user data in a specific collection
// const updateUser = async (collectionName: string, userID: string, updatedData: any): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await updateDoc(userRef, updatedData);
//     console.log(`User in ${collectionName} updated successfully`);
//   } catch (error) {
//     console.error(`Error updating user in ${collectionName}:`, error);
//     throw new Error(`Error updating user in ${collectionName}`);
//   }
// };

// // Function to delete user data from a specific collection
// const deleteUser = async (collectionName: string, userID: string): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await deleteDoc(userRef);
//     console.log(`User in ${collectionName} deleted successfully`);
//   } catch (error) {
//     console.error(`Error deleting user in ${collectionName}:`, error);
//     throw new Error(`Error deleting user in ${collectionName}`);
//   }
// };

// // Function to create user data in a specific collection
// const createUser = async (collectionName: string, userID: string, data: any): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await setDoc(userRef, data);
//     console.log(`User in ${collectionName} created successfully`);
//   } catch (error) {
//     console.error(`Error creating user in ${collectionName}:`, error);
//     throw new Error(`Error creating user in ${collectionName}`);
//   }
// };

// export { logout, login, register, getAssessments, getUsers, getUsersBMI, updateUser, deleteUser, createUser };

// import { initializeApp } from "firebase/app";
// import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDX5JbV3mC3nS68465U5V40-T8naNwKwSQ",
//   authDomain: "enutritionapp.firebaseapp.com",
//   databaseURL: "https://enutritionapp-default-rtdb.firebaseio.com",
//   projectId: "enutritionapp",
//   storageBucket: "enutritionapp.firebasestorage.app",
//   messagingSenderId: "1025775829001",
//   appId: "1:1025775829001:web:e351c729a381e5290038d8",
//   measurementId: "G-LD7KWT5LH6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const logout = async (): Promise<void> => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Error signing out:", error);
//   }
// };

// const login = async (email: string, password: string): Promise<void> => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

// const register = async (email: string, password: string): Promise<void> => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     console.error("Error registering:", error);
//   }
// };

// const getAssessments = async (): Promise<any[]> => {
//   try {
//     const assessmentsRef = collection(db, 'health_assessments');
//     const querySnapshot = await getDocs(assessmentsRef);
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching assessments:", error);
//     return [];
//   }
// };

// const getUsers = async (): Promise<any[]> => {
//   try {
//     const usersRef = collection(db, 'registrations');
//     const usersSnapshot = await getDocs(usersRef);
//     const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//     const bmiData = await getUsersBMI();
//     const usersWithBMI = usersData.map(user => {
//       const userBMI = bmiData.find(bmi => bmi.userId === user.id);
//       return { ...user, bmiCategory: userBMI ? userBMI.bmiCategory : null };
//     });

//     return usersWithBMI;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// };

// const getUsersBMI = async (): Promise<any[]> => {
//   try {
//     const bmiRef = collection(db, 'users_bmi');
//     const querySnapshot = await getDocs(bmiRef);
//     return querySnapshot.docs.map(doc => ({ userId: doc.id, ...doc.data() }));
//   } catch (error) {
//     console.error("Error fetching BMI data:", error);
//     return [];
//   }
// };

// // Function to update user data in a specific collection
// const updateUser = async (collectionName: string, userID: string, updatedData: any): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await updateDoc(userRef, updatedData);
//     console.log(`User in ${collectionName} updated successfully`);
//   } catch (error) {
//     console.error(`Error updating user in ${collectionName}:`, error);
//     throw new Error(`Error updating user in ${collectionName}`);
//   }
// };

// // Function to delete user data from a specific collection
// const deleteUser = async (collectionName: string, userID: string): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await deleteDoc(userRef);
//     console.log(`User in ${collectionName} deleted successfully`);
//   } catch (error) {
//     console.error(`Error deleting user in ${collectionName}:`, error);
//     throw new Error(`Error deleting user in ${collectionName}`);
//   }
// };

// // Function to create user data in a specific collection
// const createUser = async (collectionName: string, userID: string, data: any): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await setDoc(userRef, data);
//     console.log(`User in ${collectionName} created successfully`);
//   } catch (error) {
//     console.error(`Error creating user in ${collectionName}:`, error);
//     throw new Error(`Error creating user in ${collectionName}`);
//   }
// };

// export { logout, login, register, getAssessments, getUsers, getUsersBMI, updateUser, deleteUser, createUser, db };

// import { initializeApp } from "firebase/app";
// import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDX5JbV3mC3nS68465U5V40-T8naNwKwSQ",
//   authDomain: "enutritionapp.firebaseapp.com",
//   databaseURL: "https://enutritionapp-default-rtdb.firebaseio.com",
//   projectId: "enutritionapp",
//   storageBucket: "enutritionapp.firebasestorage.app",
//   messagingSenderId: "1025775829001",
//   appId: "1:1025775829001:web:e351c729a381e5290038d8",
//   measurementId: "G-LD7KWT5LH6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Authentication Functions
// const logout = async (): Promise<void> => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Error signing out:", error);
//   }
// };

// const login = async (email: string, password: string): Promise<void> => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

// const register = async (email: string, password: string): Promise<void> => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     console.error("Error registering:", error);
//   }
// };

// // // Firestore Data Retrieval Functions
// // const getCollectionData = async (collectionName: string): Promise<any[]> => {
// //   try {
// //     const collectionRef = collection(db, collectionName);
// //     const querySnapshot = await getDocs(collectionRef);
// //     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //   } catch (error) {
// //     console.error(`Error fetching data from ${collectionName}:`, error);
// //     return [];
// //   }
// // };
// const getCollectionData = async (collectionName: string): Promise<any[]> => {
//   try {
//     const collectionRef = collection(db, collectionName);
//     const querySnapshot = await getDocs(collectionRef);
//     const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     console.log(`Data from ${collectionName}:`, data);
//     return data;
//   } catch (error) {
//     console.error(`Error fetching data from ${collectionName}:`, error);
//     return [];
//   }
// };

// const getAssessments = async (): Promise<any[]> => {
//   return getCollectionData('health_assessments');
// };

// const getUsers = async (): Promise<any[]> => {
//   return getCollectionData('registrations');
// };

// const getUsersBMI = async (): Promise<any[]> => {
//   return getCollectionData('users_bmi');
// };
// // Firestore Data Manipulation Functions
// const updateUser = async (collectionName: string, userID: string, updatedData: any): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await updateDoc(userRef, updatedData);
//     console.log(`User in ${collectionName} updated successfully`);
//   } catch (error) {
//     console.error(`Error updating user in ${collectionName}:`, error);
//     throw new Error(`Error updating user in ${collectionName}`);
//   }
// };

// const deleteUser = async (collectionName: string, userID: string): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await deleteDoc(userRef);
//     console.log(`User in ${collectionName} deleted successfully`);
//   } catch (error) {
//     console.error(`Error deleting user in ${collectionName}:`, error);
//     throw new Error(`Error deleting user in ${collectionName}`);
//   }
// };

// const createUser = async (collectionName: string, userID: string, data: any): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await setDoc(userRef, data);
//     console.log(`User in ${collectionName} created successfully`);
//   } catch (error) {
//     console.error(`Error creating user in ${collectionName}:`, error);
//     throw new Error(`Error creating user in ${collectionName}`);
//   }
// };

// // Firestore Data Retrieval Functions
// const getMealPlans = async (): Promise<any[]> => {
//   return getCollectionData('mealPlans');
// };
// // Firestore Data Manipulation Functions
// const createMealPlan = async (mealPlanID: string, data: any): Promise<void> => {
//   try {
//     const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
//     await setDoc(mealPlanRef, data);
//     console.log('Meal plan created successfully');
//   } catch (error) {
//     console.error('Error creating meal plan:', error);
//     throw new Error('Error creating meal plan');
//   }
// };


// const updateMealPlan = async (mealPlanID: string, updatedData: any): Promise<void> => {
//   try {
//     const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
//     await updateDoc(mealPlanRef, updatedData);
//     console.log('Meal plan updated successfully');
//   } catch (error) {
//     console.error('Error updating meal plan:', error);
//     throw new Error('Error updating meal plan');
//   }
// };
// const deleteMealPlan = async (mealPlanID: string): Promise<void> => {
//   try {
//     const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
//     await deleteDoc(mealPlanRef);
//     console.log('Meal plan deleted successfully');
//   } catch (error) {
//     console.error('Error deleting meal plan:', error);
//     throw new Error('Error deleting meal plan');
//   }
// };


// export {
//   logout,
//   login,
//   register,
//   getAssessments,
//   getUsers,
//   getUsersBMI,
//   updateUser,
//   deleteUser,
//   createUser,
//   getMealPlans,
//   createMealPlan,
//   updateMealPlan,
//   deleteMealPlan,
//   db
// };

// import { initializeApp } from "firebase/app";
// import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, setDoc, getDoc } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDX5JbV3mC3nS68465U5V40-T8naNwKwSQ",
//   authDomain: "enutritionapp.firebaseapp.com",
//   databaseURL: "https://enutritionapp-default-rtdb.firebaseio.com",
//   projectId: "enutritionapp",
//   storageBucket: "enutritionapp.firebasestorage.app",
//   messagingSenderId: "1025775829001",
//   appId: "1:1025775829001:web:e351c729a381e5290038d8",
//   measurementId: "G-LD7KWT5LH6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Authentication Functions
// const logout = async (): Promise<void> => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Error signing out:", error);
//   }
// };

// const login = async (email: string, password: string): Promise<void> => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

// const register = async (email: string, password: string): Promise<void> => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     console.error("Error registering:", error);
//   }
// };

// // Firestore Data Retrieval Functions
// const getCollectionData = async (collectionName: string): Promise<any[]> => {
//   try {
//     const collectionRef = collection(db, collectionName);
//     const querySnapshot = await getDocs(collectionRef);
//     const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     console.log(`Data from ${collectionName}:`, data);
//     return data;
//   } catch (error) {
//     console.error(`Error fetching data from ${collectionName}:`, error);
//     return [];
//   }
// };

// const getAssessments = async (): Promise<any[]> => {
//   return getCollectionData('health_assessments');
// };

// const getUsers = async (): Promise<any[]> => {
//   return getCollectionData('registrations');
// };

// const getUsersBMI = async (): Promise<any[]> => {
//   return getCollectionData('users_bmi');
// };

// const getUserBmiCategory = async (userId: string): Promise<string | null> => {
//   try {
//     const userBmiRef = doc(db, 'users_bmi', userId);
//     const docSnap = await getDoc(userBmiRef);
//     if (docSnap.exists()) {
//       return docSnap.data().bmiCategory || null;
//     } else {
//       console.error('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error getting BMI category:', error);
//     return null;
//   }
// };

// // Firestore Data Manipulation Functions
// const updateUser = async (collectionName: string, userID: string, updatedData: any): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await updateDoc(userRef, updatedData);
//     console.log(`User in ${collectionName} updated successfully`);
//   } catch (error) {
//     console.error(`Error updating user in ${collectionName}:`, error);
//     throw new Error(`Error updating user in ${collectionName}`);
//   }
// };

// const deleteUser = async (collectionName: string, userID: string): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await deleteDoc(userRef);
//     console.log(`User in ${collectionName} deleted successfully`);
//   } catch (error) {
//     console.error(`Error deleting user in ${collectionName}:`, error);
//     throw new Error(`Error deleting user in ${collectionName}`);
//   }
// };

// const createUser = async (collectionName: string, userID: string, data: any): Promise<void> => {
//   try {
//     const userRef = doc(db, collectionName, userID);
//     await setDoc(userRef, data);
//     console.log(`User in ${collectionName} created successfully`);
//   } catch (error) {
//     console.error(`Error creating user in ${collectionName}:`, error);
//     throw new Error(`Error creating user in ${collectionName}`);
//   }
// };

// // Firestore Data Retrieval Functions
// const getMealPlans = async (): Promise<any[]> => {
//   return getCollectionData('mealPlans');
// };

// // Firestore Data Manipulation Functions
// const createMealPlan = async (mealPlanID: string, data: any): Promise<void> => {
//   try {
//     const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
//     await setDoc(mealPlanRef, data);
//     console.log('Meal plan created successfully');
//   } catch (error) {
//     console.error('Error creating meal plan:', error);
//     throw new Error('Error creating meal plan');
//   }
// };

// const updateMealPlan = async (mealPlanID: string, updatedData: any): Promise<void> => {
//   try {
//     const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
//     await updateDoc(mealPlanRef, updatedData);
//     console.log('Meal plan updated successfully');
//   } catch (error) {
//     console.error('Error updating meal plan:', error);
//     throw new Error('Error updating meal plan');
//   }
// };

// const deleteMealPlan = async (mealPlanID: string): Promise<void> => {
//   try {
//     const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
//     await deleteDoc(mealPlanRef);
//     console.log('Meal plan deleted successfully');
//   } catch (error) {
//     console.error('Error deleting meal plan:', error);
//     throw new Error('Error deleting meal plan');
//   }
// };
// const createNotification = async (notificationData: any) => {
//   try {
//     const notificationRef = firestore.collection('notifications').doc();
//     await notificationRef.set(notificationData);
//   } catch (error) {
//     console.error('Error creating notification:', error);
//   }
// };

// export {
//   logout,
//   login,
//   register,
//   getAssessments,
//   getUsers,
//   getUsersBMI,
//   getUserBmiCategory,
//   updateUser,
//   deleteUser,
//   createUser,
//   getMealPlans,
//   createMealPlan,
//   updateMealPlan,
//   deleteMealPlan,
//   createNotification,
//   db
// };

import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, setDoc, getDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX5JbV3mC3nS68465U5V40-T8naNwKwSQ",
  authDomain: "enutritionapp.firebaseapp.com",
  databaseURL: "https://enutritionapp-default-rtdb.firebaseio.com",
  projectId: "enutritionapp",
  storageBucket: "enutritionapp.firebasestorage.app",
  messagingSenderId: "1025775829001",
  appId: "1:1025775829001:web:e351c729a381e5290038d8",
  measurementId: "G-LD7KWT5LH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Authentication Functions
const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

const login = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error('Login failed');
  }
};

const register = async (email: string, password: string): Promise<void> => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error registering:", error);
  }
};

// Firestore Data Retrieval Functions
const getCollectionData = async (collectionName: string): Promise<any[]> => {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(`Data from ${collectionName}:`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error);
    return [];
  }
};

const getAssessments = async (): Promise<any[]> => {
  return getCollectionData('health_assessments');
};

const getUsers = async (): Promise<any[]> => {
  return getCollectionData('registrations');
};

const getUsersBMI = async (): Promise<any[]> => {
  return getCollectionData('users_bmi');
};

const getUserBmiCategory = async (userId: string): Promise<string | null> => {
  try {
    const userBmiRef = doc(db, 'users_bmi', userId);
    const docSnap = await getDoc(userBmiRef);
    if (docSnap.exists()) {
      return docSnap.data().bmiCategory || null;
    } else {
      console.error('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting BMI category:', error);
    return null;
  }
};

// Firestore Data Manipulation Functions
const updateUser = async (collectionName: string, userID: string, updatedData: any): Promise<void> => {
  try {
    const userRef = doc(db, collectionName, userID);
    await updateDoc(userRef, updatedData);
    console.log(`User in ${collectionName} updated successfully`);
  } catch (error) {
    console.error(`Error updating user in ${collectionName}:`, error);
    throw new Error(`Error updating user in ${collectionName}`);
  }
};

const deleteUser = async (collectionName: string, userID: string): Promise<void> => {
  try {
    const userRef = doc(db, collectionName, userID);
    await deleteDoc(userRef);
    console.log(`User in ${collectionName} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting user in ${collectionName}:`, error);
    throw new Error(`Error deleting user in ${collectionName}`);
  }
};

const createUser = async (collectionName: string, userID: string, data: any): Promise<void> => {
  try {
    const userRef = doc(db, collectionName, userID);
    await setDoc(userRef, data);
    console.log(`User in ${collectionName} created successfully`);
  } catch (error) {
    console.error(`Error creating user in ${collectionName}:`, error);
    throw new Error(`Error creating user in ${collectionName}`);
  }
};

// Firestore Data Retrieval Functions
const getMealPlans = async (): Promise<any[]> => {
  return getCollectionData('mealPlans');
};

// Firestore Data Manipulation Functions
const createMealPlan = async (mealPlanID: string, data: any): Promise<void> => {
  try {
    const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
    await setDoc(mealPlanRef, data);
    console.log('Meal plan created successfully');
  } catch (error) {
    console.error('Error creating meal plan:', error);
    throw new Error('Error creating meal plan');
  }
};

const updateMealPlan = async (mealPlanID: string, updatedData: any): Promise<void> => {
  try {
    const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
    await updateDoc(mealPlanRef, updatedData);
    console.log('Meal plan updated successfully');
  } catch (error) {
    console.error('Error updating meal plan:', error);
    throw new Error('Error updating meal plan');
  }
};

const deleteMealPlan = async (mealPlanID: string): Promise<void> => {
  try {
    const mealPlanRef = doc(db, 'mealPlans', mealPlanID);
    await deleteDoc(mealPlanRef);
    console.log('Meal plan deleted successfully');
  } catch (error) {
    console.error('Error deleting meal plan:', error);
    throw new Error('Error deleting meal plan');
  }
};

// Create Notification Function
const createNotification = async (notificationData: any): Promise<void> => {
  try {
    const notificationRef = doc(collection(db, 'notifications'));
    await setDoc(notificationRef, notificationData);
    console.log('Notification created successfully');
  } catch (error) {
    console.error('Error creating notification:', error);
    throw new Error('Error creating notification');
  }
};

// Fetch all BMI categories
const getBmiCategories = async (): Promise<string[]> => {
  try {
    const categoriesRef = collection(db, 'bmi_categories');
    const querySnapshot = await getDocs(categoriesRef);
    return querySnapshot.docs.map(doc => doc.id);
  } catch (error) {
    console.error('Error fetching BMI categories:', error);
    return [];
  }
};

// Add a new BMI category
const addBmiCategory = async (category: string): Promise<void> => {
  try {
    const categoryRef = doc(db, 'bmi_categories', category);
    await setDoc(categoryRef, {});
    console.log('BMI category added successfully');
  } catch (error) {
    console.error('Error adding BMI category:', error);
  }
};

// Update an existing BMI category
const updateBmiCategory = async (oldCategory: string, newCategory: string): Promise<void> => {
  try {
    const oldCategoryRef = doc(db, 'bmi_categories', oldCategory);
    const newCategoryRef = doc(db, 'bmi_categories', newCategory);
    const docSnap = await getDoc(oldCategoryRef);
    if (docSnap.exists()) {
      await setDoc(newCategoryRef, docSnap.data());
      await deleteDoc(oldCategoryRef);
      console.log('BMI category updated successfully');
    } else {
      console.error('Old BMI category does not exist');
    }
  } catch (error) {
    console.error('Error updating BMI category:', error);
  }
};

// Delete a BMI category
const deleteBmiCategory = async (category: string): Promise<void> => {
  try {
    const categoryRef = doc(db, 'bmi_categories', category);
    await deleteDoc(categoryRef);
    console.log('BMI category deleted successfully');
  } catch (error) {
    console.error('Error deleting BMI category:', error);
  }
};

export {
  logout,
  login,
  register,
  getAssessments,
  getUsers,
  getUsersBMI,
  getUserBmiCategory,
  updateUser,
  deleteUser,
  createUser,
  getMealPlans,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
  createNotification,
  getBmiCategories,
  addBmiCategory,
  updateBmiCategory,
  deleteBmiCategory,
  db
};