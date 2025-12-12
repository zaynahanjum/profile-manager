import { database } from "./firebase"
import { addDoc, collection, query, where, getDocs } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth";
import { authFeature } from "./firebase";

export function waitForUser() {
  return new Promise(resolve => {
    onAuthStateChanged(authFeature, (user) => resolve(user));
  });
}

export default async function createProfile(name, age, city) {
    try {
        const user = authFeature.currentUser;

        await addDoc(collection(database, "app-users"), {
            uid: user.uid,        
            name: name,
            age: age,
            city: city
        });
        alert("Profile created")
    } catch (exception) {
        alert(JSON.stringify(exception))
    }
}

export async function fetchProfile() {
    const user = await waitForUser();
    const profileStore = collection(database, "app-users")
    const q = query(profileStore, where("uid", "==", user.uid))
    const profile = await getDocs(q);

    return profile.docs;
}