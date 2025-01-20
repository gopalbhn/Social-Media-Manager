import { Sun,Moon } from "lucide-react";
import {useNavigate} from 'react-router-dom'
function NavBar({onclick,dark}) {
    const navigate = useNavigate();
  return (
    <div class="h-15 w-full px-10 bg-[#fbfbfe] dark:bg-[#050315] dark:text-[#fbfbfe] flex justify-between items-center text-poppins">
      <div class="p-5">Media</div>
      <div class="flex align-center gap-5">
        <ul class="flex items-center gap-5">
            {console.log('classes',document.body.classList)}
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Home">About</a>
          </li>
          <li>
            <a href="#Home">Explore</a>
          </li>
        </ul>
        <div class="h-10 w-10 flex justify-center items-center hover:border hover:border-1 hover:border-slate-800 hover:rounded-full dark:border-slate-100">
          <button onClick={onclick}>
            {console.log('dark',dark)}
            {!dark ?(<Moon />):(<Sun />)}
          </button>
        </div>

        <div class="flex items-center">
          <button class="h-8 w-20 text-[#fbfbfe]  bg-[#2f27ce] dark:bg-[#433bff] rounded" onClick={()=>navigate('/login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
