'use client'
import React from 'react'

import { useSearchParams } from 'next/navigation'
export default function page() {
    const searchParams = useSearchParams()
  console.log("Data logs"+searchParams)

    return (
        <div>page </div>
    )
}
