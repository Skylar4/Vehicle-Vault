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

      <div>
        <NavBar/>
        <div className='text-center mt-4'>
        <div className=' items-center justify-center'>
      <h1 className=' text-7xl text-white '>Welcome to Vehicle Vault</h1>
      <div className='w-2/3 mx-auto mt-4'>
      <p className='text-white text-2xl'>If you want to know more about the app click on about. if you want to get right into using it, click on 'Your Vault'</p>
      </div>
      </div>
      </div>
      </div>
      

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
