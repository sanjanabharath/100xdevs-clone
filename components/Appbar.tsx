'use client'

import React from 'react'
import Image from 'next/image';
import main from '@/images/main-modified.png';
import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
const Appbar = () => {
    const router = useRouter();
  return (
    <div className='flex justify-between'>
        <a className='flex'>
        <Image src={main} height={30} width={30} alt='main'/>
        <h1 className='text-xl font-bold px-2'>100xdevs</h1>
        </a>

        <div>
            <button className='px-2' onClick={()=> {signIn();}}>Login</button>
            <button className='px-2 bg-blue-600 rounded' onClick={()=> {
                router.push('https://harkirat.classx.co.in/')
            }}>Join now</button>
            <button className='px-2'>Day</button>
        </div>
        

    </div>
  )
}

export default Appbar