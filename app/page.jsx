'use client'
import { useApplication } from "@/app/context/ApplicationContext"

import ProtectedRoute from "./hooks/ProtectedRoute"
export default function Home() {
  const {userInfo} = useApplication()
  
  return (
    <ProtectedRoute>
        <main className="bg-transparent">
            <div className="text-white">
            Welcome
            </div>
        </main>
    </ProtectedRoute>

  );
}
