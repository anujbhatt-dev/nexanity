"use client"
import { ClerkLoaded, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'
import Form from "next/form"
import { PackageIcon, TrolleyIcon } from '@sanity/icons';
import useBasketStore from '../../store/store';

export default function Header() {

  const {user} = useUser();

  const itemCount = useBasketStore((state)=>
    state.items.reduce((total,item)=>total+item.quantity , 0)
  )

  console.log(user);
  


  return (
    <header className='flex flex-wrap justify-between items-center px-4 py-2'>
             {/* Top row */}
            <div className='flex justify-between items-center px-4 py-2 font-bold text-blue-500 text-[2rem]'>
              <Link href={"/"}>
                sHoPr
              </Link>
            </div>
            <Form action={"/search"} 
                className='w-full sm:w-auto sm:mx-4 mt-2 sm:mt-0  flex-grow flex '>
                <input 
                  type="text" name='query' placeholder='search for products'
                  className='
                    bg-gray-100
                    text-gray-800
                    px-4 py-2
                    rounded
                    focus:ring-2
                    focus:outline-none
                    focus:ring-blue-500
                    focus:ring-opacity-50
                    border
                    w-full
                    max-x-4xl                    
                  ' 
                />
                <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r px-6' type='submit'>
                          search
                </button>
               </Form>


            {/*  */}

            <div className='flex items-center space-x-2 sm:mt-0 flex-1 sm:flex-none'>
              <Link href={"/basket"}
                className='flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
              >
                <TrolleyIcon className='w-6 h-6'/>
                {/* item count */}

                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>{itemCount}</span>
                <span>My Basket</span>
              </Link>


              {/* user area */}
              <ClerkLoaded>
                {user && (
                  <Link className='flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' href={"/orders"}>
                    <PackageIcon className='w-6 h-6'/>
                    <span>My Orders</span>
                  </Link>
                )}

                {user ? (
                  <div className='flex items-center space-x-2'>
                    <UserButton/>
                    <div className='hidden sm:block text-xs'>
                      <p className='text-gray-400'>Welcome Back</p>
                      <p className='font-bold'>{user.fullName}</p>                      
                    </div>
                  </div>
                ):(
                  <SignInButton mode='modal'/>
                )}
              </ClerkLoaded>
            </div>

    </header>
  )
}
