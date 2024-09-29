"use client"
import React, { useState } from 'react'

export default function InputComponent() {
    const [data, setData] = useState("")
    const [btnData, setBtnData] = useState("")
    return (
        <div>
            <h1>OnChange Event Testing</h1>
            <input type="text" value={data} onChange={(e) => setData(e.target.value + "test")} />
            <div>
                <h1>Test Click Event with Button</h1>
                <button onClick={() => setBtnData("Updated Data")}>Update   </button>
                <h1>{btnData}</h1>
            </div>
        </div>
    )
}
