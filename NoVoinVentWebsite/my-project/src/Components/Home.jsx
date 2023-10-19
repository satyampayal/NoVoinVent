import React from 'react'

function Home() {
  return (
    <div className=''>
        <div className='w-[100vw] h-[100vh]'>
            {/* <div className='z-0 w-10px '>
            <video src="/ocean.mp4"  className=' ' autoPlay  loop muted></video>
            </div> */}
            
            <div className='flex justify-around items-center  h-[10vh] top-5 left-4'>
                <img className=' ' src="./logo.png" alt="" />
                <ul className='  flex justify-evenly  list-none gap-6 '>
                    <li>NOVOINVENT</li>
                    <li>HIX PLATFORM</li>
                    <li>HIS PLATFORM</li>
                    <li>PORTFOLIO</li>
                    <li>NEWS AND MEDIA</li>
                    <li>CAREERS</li>
                    <li>CONTACT US</li>
                    <li>STUDIOS</li>
                </ul>
            </div>

            <div className=' relative ml-[10vh] top-[30vh]  '>
                <h1 className=' font-bold text-[36px]'>Bringing Transformation Through <br />
Technology.</h1>
          <div  className=' flex gap-3'>
            <button className='  px-[25px] py-[10px]  rounded-[5px]  border-[1px] border-orange-600 '>Learn more</button>
            <button className='  px-[25px] py-[10px]  rounded-[5px]  border-[1px] border-white bg-orange-600 text-white hover:bg-white hover:text-orange-500 '>Join us</button>

          </div>

            </div>
        </div>
    </div>
  )
}

export default Home