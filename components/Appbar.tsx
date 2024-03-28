import React from 'react'
import Image from 'next/image';
import main from '@/images/main-modified.png';
const Appbar = () => {
  return (
    <div>
        <a className='flex'>
        <Image src={main} height={30} width={30} alt='main'/>
        <h1 className='text-xl font-bold px-2'>100xdevs</h1>
        </a>
        

    </div>
  )
}

export default Appbar