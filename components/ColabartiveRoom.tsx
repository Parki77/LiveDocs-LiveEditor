import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import React from 'react'
import Header from './Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'

const ColabartiveRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
         <div className='collabrativeRoom'>
         <Header>
        <p className='text-white'>Test</p>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </Header>
      <Editor/>
         </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default ColabartiveRoom