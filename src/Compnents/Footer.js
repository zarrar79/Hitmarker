import React from 'react'
import Logo from '../../src/Assets/FLogo.svg'
import Play from '../../src/Assets/PlayStore.svg'
import App from '../../src/Assets/App.svg'
import Facebook from '../../src/Assets/Facebook.svg'
import Instagram from '../../src/Assets/Instagram.svg'
import Twitter from '../../src/Assets/Twitter.svg'
export const Footer = () => {
  return (
    <>
    {/* Footer-fluid container */}
    <div className='max-w-[1120px] mx-auto mt-10 relative'>
        {/* grid */}
        <div className='grid_footer grid grid-cols-4 gap-16 mt-[18rem]'>
            {/* left */}
            <div>
             {/* img */}
             <div className='wheel'><img src={Logo}></img></div>
             <div className='mt-7 nav txt_center text-[14px] text-[#2E2E46CC]'>Open an account in minutes, get full Control for much longer.</div>
            </div>
            {/* mid */}
            <div className='col-span-2 '>
                {/* flex */}
                <div className='block_resp flex justify-between'>
                    {/* box 1 */}
                    <div>
                        {/* head */}
                        <div className='nav text-[24px] text-[#2E2E46]'>Company</div>
                        {/* small */}
                        <div className='nav text-[18px] text-[#222831] space-y-3 mt-7'>
                                <div>About</div>
                                <div>Careers</div>
                                <div>Mobile</div>
                        </div>
                    </div>
                    {/* box 2 */}
                    <div className='margin_resp'>
                         {/* head */}
                         <div className='nav text-[24px] text-[#2E2E46]'>Contact</div>
                        {/* small */}
                        <div className='nav text-[18px] text-[#222831] space-y-3 mt-7'>
                                <div> Help/FAQ</div>
                                <div>Press</div>
                                <div>Affiliates</div>
                                </div>
                    </div>
                    {/* box 3 */}
                    <div className='margin_resp'>
                         {/* head */}
                         <div className='nav text-[24px] text-[#2E2E46]'>More</div>
                        {/* small */}
                        <div className='nav text-[18px] text-[#222831] space-y-3 mt-7'>
                                <div>Airline fees</div>
                                <div>Airlines</div>
                                <div>Low fare tips</div>
                                </div>
                    </div>
                </div>
            </div>
            {/* right */}
            <div>
                {/* head */}
                <div className='discover nav text-[24px] text-[#2E2E46]'>Discover Our App</div>
                        {/* small */}
                        <div className='nav text-[18px] text-[#222831] space-y-3 mt-[16px]'>
                                <div className='flex items-center'>
                                    {/* img 1 */}
                                    <div><button className='bg-[#2E2E46] px-4 py-2 rounded-[24px] '>
                                        <img src={Play}></img>
                                        </button></div>
                                    <div className='ml-3'><button className='bg-[#2E2E46] px-4 py-2 rounded-[24px] '>
                                        <img src={App}></img>
                                        </button></div>
                                </div>
                                </div>
                                {/* img 2 */}
                                <div className='social_footer flex items-center justify-start mt-[30px]'>
                                    {/* m-1 */}
                                    <div className='cursor-pointer'><img src={Facebook}></img></div>
                                    {/* m-2 */}
                                    <div className='cursor-pointer rounded-[50%] ml-5 p-4 bg-[#FF6810]'><img src={Instagram}></img></div>
                                    {/* m-3 */}
                                    <div className='cursor-pointer ml-5'><img src={Twitter}></img></div>
                                </div>
            </div>
        </div>
        {/* horizontal */}
        <hr className='border-b-[1px] border-b-solid border-b-[#69788366] mt-[5.1rem]'></hr>
        {/* text */}
        <div className='mt-6 pb-6 flex justify-center nav text-[16px] text-[#2E2E46CC]'>All rights reserved Hitmarker</div>
    </div>
    </>
  )
}