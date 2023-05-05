import { getProviders, signIn as signIntoProvider} from "next-auth/react";
import Link from 'next/link'

//Running on browser
function signIn({ providers }) {
    return (
        <>
      
      <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center
      bg-zinc-800 text-zinc-200">

        <h1 className="text-5xl mb-2" id="logo">sneakify</h1>
        <p className="font-xs italic">
          This is not a REAL app, it is built for educational purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className="p-3 bg-blue-500 rounded-lg text-white" 
              onClick={() => signIntoProvider(provider.id, {callbackUrl: "/"})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10">
            <h1 className="mb-10">OR</h1>
            <Link href="/" className="hover:text-[#fff] underline">
              Return To Home
            </Link>
        </div>
      </div>

      
      
        </>
    );
}

//On middleware/server
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn