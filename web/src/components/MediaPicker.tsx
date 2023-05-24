/* eslint-disable prettier/prettier */
'use client'
export default function MediaPicker() {
    return (
        <input
            onChange={(value) => console.log(value)}
            type="file"
            id="media"
            className="invisible h-0 w-0"
        />
    )
}
