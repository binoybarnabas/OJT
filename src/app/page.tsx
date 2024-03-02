'use client'

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Home({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  const router = useRouter();
  useEffect(()=>{
   router.push('/home') 
  })
  
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      
        {children}
        
    </section>
  )
}