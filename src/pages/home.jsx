import { Instagram,SquarePen,Clipboard,MessageSquare } from "lucide-react"
import {Link} from 'react-router-dom'
import { useEffect } from "react";
export default function HomePage(){
    let user = true;

    

    return(
        <div className="h-[100vh] w-[90%] grid grid-cols-[22vw_70vw] gap-4 mx-auto">
            <SidBar user={user}/>
            <MainMenu />
        </div>
    )
}
function SidBar({user}){
       return( <>
        {user?(
            <div className='h-[100%] w-[22vw] shadow-lg dark:shadow-3xl dark:shadow-[#2f27ce] p-2 '>
            
            <div className='h-12 w-full mb-2 font-bold text-md text-center flex items-center gap-3 px-2 group hover:bg-[#433bff]  hover:text-white'>
               <div className="h-9 w-9 rounded-full border border-slate-800 group-hover:bg-[#f23459] group-hover:text-white flex items-center justify-center"><Instagram /></div>
               <div>Connect to Instagram</div>
            </div>
            <div className='h-12 w-full my-3 font-bold text-md text-center flex items-center gap-3 px-2 hover:bg-[#433bff] group hover:fill-white dark:fill-white hover:text-white '>
               <div className="h-9 w-9 rounded-full border border-slate-800 group-hover:bg-[#1292ee] group-hover:text-white flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70%" height="70%" viewBox="0 0 50 50">
                 <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg></div>
               <div>Connect to Facebook</div>
            </div>
            <div className='h-12 w-full mt-3 mb-2  font-bold text-md text-center flex items-center gap-3 p-2 group hover:bg-[#433bff] hover:fill-white dark:fill-white hover:text-white'>
               <div className="h-9 w-9 rounded-full border border-slate-800 group-hover:bg-[#000] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50%" height="50%" viewBox="0 0 30 30">
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg></div>
               <div>Connect to Twitter</div>
            </div>
            </div>
        ):(
            <div className='h-[100%] w-[22vw] shadow-lg dark:shadow-3xl dark:shadow-[#2f27ce] p-2 '>
            
            <div className='h-12 w-full mb-2 font-bold text-md text-center flex items-center gap-3 px-2 group hover:bg-[#433bff]  hover:text-white'>
               <div className="h-9 w-9 rounded-full border border-slate-800 group-hover:bg-[#f23459] group-hover:text-white flex items-center justify-center"><Instagram /></div>
               <div>Disconncet to Instagram</div>
            </div>
            <div className='h-12 w-full my-3 font-bold text-md text-center flex items-center gap-3 px-2 hover:bg-[#433bff] group hover:fill-white hover:text-white dark:fill-white'>
               <div className="h-9 w-9 rounded-full border border-slate-800 group-hover:bg-[#1292ee] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70%" height="70%" viewBox="0 0 50 50">
                 <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg></div>
               <div>Disconnect to Facebook</div>
            </div>
            <div className='h-12 w-full mt-3 mb-2  font-bold text-md text-center flex items-center gap-3 p-2 group hover:bg-[#433bff] hover:fill-white hover:text-white dark:fill-white'>
               <div className="h-9 w-9 rounded-full border border-slate-800 group-hover:bg-[#000] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50%" height="50%" viewBox="0 0 30 30">
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg></div>
               <div>Disconnect to Twitter</div>
            </div>
            </div>
        )}
      
 </>
)}

function MainMenu(){
    return(
        <div className="h-[100%] w-[100%] px-5 border-1 border-slate-950 flex gap-5">
            <Link to='/create'>
               <div className="h-[150px] w-[150px] bg-red-200 dark:bg-[#433bff] shadow-xl shadow-red hover:scale-75 duration-1000 flex flex-col  items-center justify-center gap-4 cursor-pointer">
                    <span><SquarePen /></span>
                    <span className="text-xl">Create Post</span>
                </div> 
                </Link>
                <div className="h-[150px] w-[150px] bg-red-200 dark:bg-[#433bff] shadow-xl shadow-red hover:scale-75 duration-700 flex flex-col  items-center justify-center gap-4 cursor-pointer">
                    <span><Clipboard /></span>
                    <span className="text-xl text-center">View All Post </span>
                </div> 
                <div className="h-[150px] w-[150px] bg-red-200 dark:bg-[#433bff] shadow-xl shadow-red hover:scale-75 duration-700 flex flex-col  items-center justify-center gap-4 cursor-pointer">
                    <span><MessageSquare /></span>
                    <span className="text-xl text-center">View All Messages </span>
                </div> 
        </div>
    )
}
