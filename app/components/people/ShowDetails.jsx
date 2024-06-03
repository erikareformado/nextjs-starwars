'use client'

import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import Overview from "@/app/components/People/Overview";

const ShowDetails = ({activeCharacter}) =>{
    return (
        <main>
             <ProtectedRoute>
                <main className="p-8">
                    <Overview activeCharacter={activeCharacter}/>
                </main>
            </ProtectedRoute>
        </main>
    )
}

export default ShowDetails