import { IoWallet } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import img2 from './Img/unsplash_E8Ufcyxz514.jpg'
import img3 from './Img/cover image.jpg'
import img4 from './Img/Rectangle 203.jpg'
import img5 from './Img/Profile pic.png'

function App() {


  return (
    <div className="overflow-x-hidden">
      {/* Start */}
      
        {/* Absolute Square */}
        <div className="relative mt-8 sm:flex sm:absolute border-2 sm:mt-96 ml-0 border-black sm:ml-16 ">
          
          {/* Img */}
          <div className=" ">
            <img className="w-full h-[36vh] sm:w-[34vh] sm:h-full" src={img4} alt='2'/>
          </div>
          {/* Img */}

          {/* Info */}
          <div className="bg-white">

              <div className="flex my-3 mx-6 ">
              <p className="text-2xl font-semibold">DAN MACE</p>
              <p className="text-center ml-6 mt-1">/Johny_Films/</p>
              </div>

              <div className="mx-6">
                  Bio
              </div>

              <div className="mx-6 text-sm">
              Simply a film fan creating original <br/> content for YouTube. Let’s Collaborate.
              </div>

              <div className="flex mx-6 my-6">
                <div className="w-1/2">
                  <p className="flex justify-center items-center border-2  border-gray-800">
                  Creator</p>
                </div>
                <div className="w-1/2 border-2 border-gray-800 border-l-none bg-zinc-600"></div>
              </div>

          </div>
          {/* Info */}

        </div>
        {/*Absolute  Square */}

        <div className="overflow-x-hidden">

        {/* Navbar */}
        <div className="flex flex-col md:flex-row m-0">

          {/* Navbar 1*/}
          <div className="w-1/5">
            <div className="text-center ml-6">
              <p className="text-gray-700 mt-5 text-2xl flex items-center ml-32 my-4 font-semibold sm:ml-20 ">
                aBit
              </p>
            </div>
          </div>
          {/* Navbar 1 */}

          {/* Navbar part-2 */}
          <div className=' flex justify-start mx-8 md:space-x-4  sm:w-4/5 sm:justify-end'>
          {/* Button */}
          <div>
            <button className="p-2 font-semibold rounded-2xl border-2 border-purple-500 text-purple-800 mx-2 md:mx-0 my-4">Share New Video</button>
          </div>
          {/* Button */}

          {/* Navbar Icons */}
          <div className="flex text-2xl space-y-6 space-x-1 md:space-x-6">
            <div className="flex mt-6">
            <IoWallet/>
            </div>
            <div>
            <CiBellOn/>
            </div>
            <div>
            <img src={img5} alt="5" className="h-7 w-7 rounded-full "/>
           </div>
           <div>
            <IoIosArrowDown/>
            </div>
          </div>
          {/* Navbar Icons */}

          </div>
          {/* Navbar part2*/}

        </div>
        {/* Navbar */}

        {/* Main Img */}
        <div className=''>
            <img className='h-[28vw] w-full' src={img3} alt='img'/>
        </div>
        {/*  Main Img */}
        
        {/* John Info */}
        <div className=" w-full flex items-center space-y-4 bg-zinc-800 text-white ">
          <p className=" my-7 mx-4 text-2xl italic yext-center text-gray-300 " style={{fontFamily:'Gloria Hallelujah', }}>
           n Bill / Creator / Moved to NYC / 27.11.22 / Live Now / John Bill /  Creator  /  Moved to NYC  /  27.11.22  /  Live Now  /  John Bill  
            </p>
        </div>
        {/* John Info */}

      {/* Releases */}
      <div className="flex flex-col overflow-x-hidden mx-12  sm:flex-row sm:mt-10">
        
        <div className="w-2/3 flex flex-col mt-24 ml-3">
          <p className="text-xl my-4">Releases</p>
          <p className="text-gray-400 font-sans">Videos that you upload in collaboration with aBit appear here.</p>
        </div>

        <div className="w-1/3 flex flex-col md:flex-row mt-20">
         
          <div className="grid p-2 space-y-8 my-2 grid-4 sm:grid-cols-4">
            <div className="flex flex-col  border-l-2 border-gray-100">
              <p className="font-bold ml-3 mt-8">1 </p>
               <p className="text-gray-400 ml-3 "> Shared <br/> Videos
               </p>
              </div>
            <div className="flex flex-col  border-l-2 border-gray-100">
              <p className="font-bold ml-3">$9510 </p> 
              <p className="text-gray-400 ml-3">Funds <br/> Raised</p>
            </div>
            <div className="flex flex-col border-l-2 border-gray-100">
              <p className="font-bold ml-3">317</p> 
              <p className="text-gray-400 ml-3">Co-Owner Community</p>
            </div>
            <div className="flex flex-col  border-l-2 border-gray-100">
              <p className="font-bold ml-3">$3804 </p> 
              <p className="text-gray-400 ml-3">Co-Owner Earnings</p>
            </div>
          </div>
        
        </div>
        
      </div>
      {/* Releases */}
      
      {/* Add Squares */}
      <div className=" mx-3 w-1/2 my-6 flex flex-col gap-4 space-y-6 md:flex-row md:mx-12">
      
      {/* First Square */}
      <div className=" bg-gray-200 flex flex-col items-center mt-7 mb-2 mx-1 justify-center rounded-3xl h-[52vh] w-[50vh] min-h-12">
        <div className="flex flex-col text-center mt-28 text-3xl justify-center mx-4 text-gray-400 ">
        <FaPlus/>
        </div>
        <div className="flex justify-center text-center mt-12 mx-4 mb-4">
          <p><p className="font-thin text-gray-700 mx-4"> You haven’t uploaded any <br/> videos with aBit yet. Add now!</p></p>
        </div>
      </div>
      {/* First Square */}
      
      {/* Second Square */}
      <div className=" bg-gray-200 mx-0 flex align-middle md:h-[54vh] w-[52vh] ">
        <p className="font-semibold text-lg absolute ml-8 mt-4 text-white">The Sound of Silence</p>
        
        {/* Shares,Offered,Raised */}
        <div className=" absolute rounded-lg mx-10 w-[17vw] h-[4vw] flex mt-60 justify-end text-center flex-col " style={{backgroundColor:'rgba(255, 255, 255, 0.2)',}}>
          <div className=" absolute  flex md:grid grid-cols-3 mx-1 text-white gap-6 ">
            <div className="flex flex-col "><p>Shares</p><p className="font-semibold">317</p></div>
            <div className="flex flex-col "><p>Offered</p><p className="font-semibold">75%</p></div>
            <div className="flex flex-col "><p>Raised</p><p className="font-semibold">$9510</p></div>
          </div>
        </div>
        {/* Shares,Offered,Raised */}

        <img className='w-full h-full' src={img2} alt='2'/>

      </div>

      </div>

      <div className="w-1/2">
      </div>
      {/* Add Squares */}    

      <div className="h-1 w-full bg-gray-100 mt-40"></div>
      {/* About Page */}
      <div className="mx-20 mt-120 flex flex-col mb-20 gap-y-4 md:flex-row md:gap-y-0 sm:mt-20">

      <div className="w-4/5 mt-10">
        <div className="flex flex-col">
          <p className="text-3xl font-semibold ">aBit</p>
          <p className="mt-6">  Changing the way in which <br/> creators and fans interact.</p>
        </div>
      </div>
      <div className="w-1/5 border-l-2 flex flex-col border-gray-300 md:flex-row ">
        <div className="flex flex-col space-y-2 ml-4 font-semibold md:my-4  md:ml-10">
        <p>Home</p>
        <p className="inline-flex">Are you a Creator?</p>
        <p>Support</p> 
        </div>
      </div>

      </div>
      {/* About Page */}

      </div>
      {/* End */}

    </div>
  )
}

export default App
