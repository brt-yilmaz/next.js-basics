import React from 'react'

interface Params {
  params: {
    userId:string
  }
}
export default function UserPage({params :{userId}}: Params) {
  return (
    <div>UserPage</div>
  )
}
