'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  // Redirect to the "home" route when the component mounts
  useEffect(() => {
    router.push('/home');
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
        {children}
    </section>
  )
}