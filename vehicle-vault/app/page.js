"use client"
import { useUserAuth } from "./Vehicle-vault/_utils/auth-context"
import Link from "next/link";
import NavBar from "./Vehicle-vault/componants/navbar";
export default function Home() {

  const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

  async function handleSignIn (){
    try
    {
        await gitHubSignIn();
    }catch(error){
        console.log(error);
    }
}
async function handleSignOut (){
  try{
      await firebaseSignOut();
  }
  catch(error){
      console.log(error);
  }
}
console.dir(user);
  return (

    <main>
    {user ? (


        <NavBar/>


    ) : (

      <div>
        <button
        type='button'
        className='text-2xl bg-blue-700 rounded m-4 p-5'
        onClick={handleSignIn}>
        Sign In
        </button>
      </div>


    )
  
  }



    </main>

  );
}
