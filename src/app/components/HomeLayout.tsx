import { ReactNode } from "react"


type HomeLayoutProps= {
  children:ReactNode

}
export default function HomeLayout({children}:HomeLayoutProps) {
  return (
    <main className="flex min-h-screen min-w-full">
     <aside>
      sidebar
     </aside>
     <div>
     {children}
     </div>
    </main>
  )
}
