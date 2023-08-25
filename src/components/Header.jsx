import React, {useEffect, useState} from 'react'

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false); 

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    useEffect( () => { 
        document.documentElement.classList.toggle('dark')
    }, [darkMode] )

  return (
    <header className='bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] cmd:mb-[480px] cxl:mb-[200px]'>
        <div className='cmd:flex cmd:place-content-between'>
            <div>
                <h1 className='text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1'>Social Media Dashboard</h1>
                <p className='text-Dark-Grayish-Blue dark:text-Desaturatedated-Blue font-bold mb-6'>Total Followers: 23,004</p>
                <hr className='bg-black mb-[19px] cmd:hidden' />
            </div>
            <div className='flex place-content-between cmd:gap-2'>
                <p className='text-Dark-Grayish-Blue dark:text-Desaturatedated-Blue font-bold'>Dark Mode</p>
                <label htmlFor="darkMode" className='relative border bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[2px]'>
                    <input onClick={handleClick} id='darkMode' type="checkbox" className='peer sr-only' />
                    <div className='w-full h-full rounded-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0'></div>
                    <div className='w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all'></div>
                </label>
            </div>
        </div>
    </header>
  )
}