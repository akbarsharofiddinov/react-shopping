import React from 'react'
import { TbFaceIdError } from "react-icons/tb"

const ErrorProducts: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <TbFaceIdError className='text-[400px] text-[#868686]' />
      <h1 className='text-[30px] font-bold my-4'>Server No Working</h1>
    </div>
  )
}

export default ErrorProducts