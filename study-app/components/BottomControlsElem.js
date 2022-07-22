import React from 'react'

export default function BottomControlsElem({ enabled, onClick, img }) {
    return (
        <div onClick={onClick}
            className={`${enabled ? 'opacity-100' : 'opacity-60 hover:opacity-80'}
            flex justify-center items-center h-12 w-12 p-2 text-3xl 
            rounded-lg hover:cursor-pointer bg-gray-200 ml-2`}>
            <img src={img} className='opacity-100' />
        </div>
    )
}