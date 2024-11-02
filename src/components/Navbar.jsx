import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [open,setOpen] = useState(false);
    const [theme,setTheme] = useState(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark';
        }

        return 'light';
    });

    useEffect(()=>{
        if(theme=='dark'){
            document.querySelector("html").classList.add('dark')
        }else{
            document.querySelector("html").classList.remove('dark')
        }
    },[theme])

    const handleChangeTheme = ()=>{
        setTheme(prevTheme=>prevTheme=='light' ? 'dark' : 'light')
    }

  return (
    <>
        {/* NAVBAR DESKTOP */}
        <div className="hidden lg:flex p-5 text-blue-400 mx-0 dark:text-blanco dark:bg-negro">
            <nav className="flex justify-between items-center w-full">
                <div className="flex gap-5 text-lg">
                    <Link to="/" className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-400 dark:after:bg-blanco after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Inicio</Link>
                    <Link to="/Dietas" className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-400 dark:after:bg-blanco after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Dietas</Link>
                    <Link to="/Rutinas" className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-400 dark:after:bg-blanco after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Rutinas</Link>
                </div>
                <button onClick={handleChangeTheme} className="text-lg">
                    {theme === 'dark' ? <span className="material-symbols-outlined">dark_mode</span> : <span className="material-symbols-outlined">light_mode</span>}
                </button>
            </nav>     
        </div>


        {/* NAVBAR MOBILE */}
        <div className='lg:hidden flex flex-col p-5 text-blue-400 dark:text-blanco dark:bg-negro'>
            <div className='flex justify-between items-center'>
                <Link to="/"><h2 className="text-2xl hidden">.Geraldine</h2></Link>
                <button onClick={()=>{setOpen(!open)}}>{open ? <span className="text-4xl material-symbols-outlined">close</span> : <span className="text-4xl material-symbols-outlined">menu</span>}</button>
            </div>
            <nav className={`flex flex-col gap-5 text-lg mx-0 justify-center ${open ? '' : 'hidden'}`}>
                <Link to="/" className="">Inicio</Link>
                <Link to="/Dietas" className="">Dietas</Link>
                <Link to="/Rutinas" className="">Rutinas</Link>
                <button onClick={handleChangeTheme}>{theme=='dark' ? <span className="material-symbols-outlined">dark_mode</span> : <span className="material-symbols-outlined">light_mode</span>}</button>
            </nav>
        </div>
    </>
  )
}

export default Navbar
