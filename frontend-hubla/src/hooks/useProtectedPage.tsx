import { useEffect } from 'react';
import { useRouter } from 'next/router'

export const useProtectedPage = () => {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            router.push('/')
        }
    })
}

export const useUnprotectedPage = () => {
    const router = useRouter()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            router.push('/home')
        }
    })
}

