import React from 'react';
import Logo from '../../src/Assets/Hitmarker.svg';
import Play from '../../src/Assets/Play.svg'
import Man from '../../src/Assets/Man.svg'
import Social from '../../src/Assets/Social.svg'
export const Hero = () => {
    const display = () => {
        const menuElements = document.getElementsByClassName('menuNew');

  // Loop through each element with the 'menuNew' class and toggle its display style
  for (let i = 0; i < menuElements.length; i++) {
    if (menuElements[i].style.display === "block") {
      menuElements[i].style.display = "none";
    } else {
      menuElements[i].style.display = "block";
    }
  }
    }
  return (
    <>
    {/* fluid container */}
    <div className='bg-[#19191B] pt-[0.1px]'>
    {/* background */}
    <div className='max-w-[1120px] mx-auto mt-10 relative fluid_padding'>
     {/* parent nav */}
     <div className='text-[#ffff] flex justify-between items-center bg_padding'>
        {/* img */}
        <div><img src={Logo}/></div>
        {/* mid */}
        <div className='mid nav text-white text-[14px] flex'>
            {/* text */}
            <div className='cursor-pointer'>Find a job</div>
            <div className='ml-[38px] cursor-pointer'>Post a job</div>
            <div className='ml-[38px] cursor-pointer'>Career advice</div>

        </div>
        {/* account */}
        <div className='flex items-center'>
            {/* login */}
            <div className='right nav text-[14px] cursor-pointer'>Login</div>
            {/* create account */}
            <div className='right nav_bold text-[14px] ml-6 cursor-pointer'>
                <button className='bg-[#FF6810] rounded-[6px] px-4 py-2'>Create Account</button>
            </div>
             {/* Hamburger */}
             <div id="menuToggle" onClick={display}>
                                {/* <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      --> */}
                                <input type="checkbox" />

                                {/* <!--
      Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff.
      --> */}
                                <span></span>
                                <span></span>
                                <span></span>

                                {/* <!--
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic.
      --> */}
                                <ul id="menu">
                                    <a href="#"><li>Home</li></a>
                                    <a href="#"><li>About</li></a>
                                    <a href="#"><li>Info</li></a>
                                    <a href="#"><li>Contact</li></a>
                                    <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                                </ul>
                            </div>
                            <div className='nav menuNew bg-[#041123] custom-shadow space-y-5 p-6 rounded absolute top-10 right-11 hidden'>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Find a job</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Post a job</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Career advice</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Login</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Create Account</div>
                            </div>
        </div>
     </div>
     {/* Grid */}
     <div className='grid grid-cols-2 items-center pb-[150px] mt-[59px] grid_resp'>
        {/* left */}
        <div className='text-[#ffff] left_grid'>
            {/* b-text */}
            <div className='nav_bold text-[54px] leading-[64.8px]'>The home of gaming and esports jobs</div>
        {/* s-text */}
        <div className='mt-9 nav text-[16px] leading-[25.6px]'>With over 8,000 active listings from more than 50 countries,<br></br>Hitmarker is the largest gaming and esports jobs platform in the<br></br>world. Find your dream career. Hire top talent. Make your mark.</div>
        {/* buttons */}
        <div className='mt-14 flex items-center left_buttons'>
          {/* b_1 */}
          <div>
            <button className='view_shadow nav_bold text-[16px] px-11 py-[12px] bg-[#FF6810] rounded-[6px]'>View Jobs</button>
          </div>
          {/* b_2 */}
          <div className='button_2 ml-9'>
            <button>
              {/* flex */}
              <div className='flex items-center'>
                {/* img */}
                <div>
                  <img src={Play}></img>
                </div>
                {/* text */}
                <div className='nav text-[16px] ml-2'>Watch our video</div>
              </div>
            </button>
          </div>
        </div>
        </div>
        {/* right */}
       <div className='pt-[1rem]'>
        <div className='mr-[0x] img_resp'>
        <img src={Man}></img>
        </div>
       </div>
     </div>
     {/* absolute-parent */}
     <div className='absolute py-[1.3rem] px-[1.1rem] bottom-[-42px] bg-[#ffff] rounded-[12px]'>
      <img className='left-[50%] right-[50%]' src={Social}></img>
     </div>
    </div>
    </div>
    </>
  )
}
