import { Sun,Moon } from "lucide-react";
import {useNavigate,Link} from 'react-router-dom'
import Cookies from 'js-cookie';
import { useRecoilValue } from "recoil";
import { userEmail } from "../store/selectors/user.selector";
function NavBar({onclick,dark,}) {
  const email = useRecoilValue(userEmail);
  
  return(
    
    email ? <LogOutBar onclickfn={onclick} dark={dark} /> :  <LogedInBar onclick={onclick} dark={dark} />
    
    )
  
  
  // email ? (<LogedInBar onclick={onclick} dark={dark} />) : (<LogedInBar  onclick={onclick} dark={dark} />)

}

const LogOutBar = ({onclickfn,dark})=>{
  

  
  return (
    <div className="h-15 w-full flex px-10 bg-[#fbfbfe] dark:bg-[#050315] dark:text-[#fbfbfe]  justify-between items-center text-poppins">
      <div className="p-5">
        <Link to="/">Media</Link>
       </div>
      <div className="hidden align-center gap-5 sm:flex ">
        <ul className="flex items-center gap-5">
            {console.log('classes',document.body.classList)}
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <a href="#Home">About</a>
          </li>
          <li>
            <a href="#Home">Explore</a>
          </li>
        </ul>
        <div className="h-10 w-10 flex justify-center items-center hover:border hover:border-1 hover:border-slate-800 hover:rounded-full dark:border-slate-100">
          <button onClick={onclickfn}>
            {console.log('dark',dark)}
            {!dark ?(<Moon />):(<Sun />)}
          </button>
        </div>

        <div className="flex items-center">
          <button className="h-8 w-20 text-[#fbfbfe]  bg-[#2f27ce] dark:bg-[#433bff] rounded" onClick={()=>{
                Cookies.remove('token');
                setTimeout(()=>{
                  window.location.reload()
                },1000)
          }}>
            Log Out
          </button>
        </div>
      </div>

      <div className="sm:hidden block">
        <div><button className='bg-red-800 p-2 rounded-s-full'>test</button></div>
      </div>
    </div>
  );
} 


const LogedInBar = ({onclick,dark}) =>{
  const navigate = useNavigate();
  return (
    <div className="h-15 w-full flex px-10 bg-[#fbfbfe] dark:bg-[#050315] dark:text-[#fbfbfe]  justify-between items-center text-poppins">
      <div className="p-5">
        <Link to="/">Media</Link>
       </div>
      <div className="hidden align-center gap-5 sm:flex ">
        <ul className="flex items-center gap-5">
            {console.log('classes',document.body.classList)}
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <a href="#Home">About</a>
          </li>
          <li>
            <a href="#Home">Explore</a>
          </li>
        </ul>
        <div className="h-10 w-10 flex justify-center items-center hover:border hover:border-1 hover:border-slate-800 hover:rounded-full dark:border-slate-100">
          <button onClick={onclick}>
            {console.log('dark',dark)}
            {!dark ?(<Moon />):(<Sun />)}
          </button>
        </div>

        <div className="flex items-center">
          <button className="h-8 w-20 text-[#fbfbfe]  bg-[#2f27ce] dark:bg-[#433bff] rounded" onClick={()=>navigate('/login')}>
            Login
          </button>
        </div>
      </div>

      <div className="sm:hidden block">
        <div><button className='bg-red-800 p-2 rounded-s-full'>test</button></div>
      </div>
    </div>
  );
}
export default NavBar;
