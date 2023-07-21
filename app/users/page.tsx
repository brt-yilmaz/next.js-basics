import getAllUser from '@/lib/getAllUser'
import { Metadata } from 'next'
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
  title:'Users',
}

export default async function page() {
  const usersData: Promise<User[]> = getAllUser();
  
  const users = await usersData ;

  console.log('inside user page') // that is invisible in console, because it is a server component

  const content = (
    <section>
      <h2>
        <Link href={'/'}>Back to Home</Link>
      </h2>
      <br/>
      {users.map((user) => (
        <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
          <br/>

        </>
      ))}
    </section>
  )

  return content;
}
