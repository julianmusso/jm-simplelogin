import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Form.module.css'
import Head from 'next/head'
import { getSession, useSession, signIn, signOut } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session } = useSession()

  // Google Handler Function
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_WEB_URL })
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home Page</title>
        </Head>
        <div className={styles.main}>
          {session ? User({ session, handleSignOut }) : Guest(handleGoogleSignIn)}
        </div>

      </div>
    </>
  )
}

// Guest

function Guest(handleGoogleSignIn) {
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-5xl font-bold'>No estás logueado.</h3>
      <div className='flex justify-center'>
        <div className="input-button">
          <button onClick={handleGoogleSignIn} type="button" className={`${styles2.button} my-10 p-10`}>
            Ingresar
          </button>

        </div>

      </div>

    </main>
  )
}

function User({ session, handleSignOut }) {
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-5xl font-bold'>¡Hola, {session.user.name}!</h3>
      <div className='w-3/4 mx-auto p-6 shadow-md rounded-lg'>


        <div className='flex mx-auto'>
          <div className='mx-auto my-auto'>
            <Image src={session.user.image} className='rounded-full' width={50} height={50} />
          </div>
          <div className='mx-auto my-auto'>
            <p className='text-xl'>{session.user.name}</p>
            <p className='text-xl'>{session.user.email}</p>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className="input-button">
            <button onClick={handleSignOut} type="button" className={`${styles2.button_custom} px-10`}>
              Cerrar sesión
            </button>
          </div>
        </div>

      </div>

    </main>
  )
}