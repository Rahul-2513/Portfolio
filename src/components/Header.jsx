import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import { Button } from './ui/button';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className=" py-6 xl:py-8 text-white ml-4">
      <div className=" container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className=" text-4xl font-semibold">
            Rahul
            <span className=" text-green-400"> .</span>
          </h1>
        </Link>

        <div className=' hidden xl:flex '>
          <Navbar />
          <Link href={"/contact"}>
          <Button className={" cursor-pointer mr-7 ml-66 hover:bg-green-900"}>
            Hire me
          </Button>
          </Link>
        </div>

        <div className=' xl:hidden '>
          <MobileNav/>
          <Button className={" mr-7 ml-9  hidden"}>
            Hire me 
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header