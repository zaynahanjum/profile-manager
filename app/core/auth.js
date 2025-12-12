import { authFeature } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
export async function loginWithEmail(email, password) {
    //firebase logic
    try {
        const result = await signInWithEmailAndPassword(authFeature, email, password)
        console.log(JSON.stringify(result))
        if(result.user.emailVerified) {
            alert("You can use the app")
        } else {
            alert("Please verify your email first")
        }
    } catch (exception) {
        console.log(JSON.stringify(exception))
    }
}

export async function createAccount(email, password) {
    try {
        const result = await createUserWithEmailAndPassword(authFeature, email, password)
        console.log(JSON.stringify(result))
        await sendEmailVerification(result.user)
    } catch (exception) {
        console.log(JSON.stringify(exception))
    }
}