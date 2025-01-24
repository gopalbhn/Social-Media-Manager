import { Pen, ImagePlus,Ellipsis, Heart,Forward,MessageCircle,Globe } from "lucide-react";
import { useState } from "react";
export default function CreatePost() {
  return (
    <div class="h-[100vh] w-[90%] mx-auto p-5 border-1 border-slate-800 flex gap-[100px]">
      <div>
      <div class="h-14 w-40 dark:bg-[#433bff] bg-[#9797cf] shadow-3xl rounded-xl hover:scale-105 duration-150 p-1 flex gap-7">
        <button class="w-full h-full ">
          {" "}
          <span></span> Create Posts
        </button>

      </div>
      <PostModal />
      </div>
      <InstagramLayout />
      <FacebookLayout />
    </div>
  );
}

function PostModal() {
  const [text, setText] = useState("");
  const [image,setImage] =useState();
  const handleTextChange = (event) => {
    setText(event.target.value);
    autoResizeTextArea(event);
  };
  function handlechange(e){
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend =()=>{
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  const autoResizeTextArea = (event) => {
    event.target.style.height = "auto"; 
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <div className="min-h-[270px] w-[300px] mt-4 pb-2 border-2 border-slate-800 resize-y dark:border-white">
      <div className="text-center text-2xl font-semibold">Create Post</div>
      <div className="min-h-[130px] w-[90%] mx-auto mt-3">
        <textarea
          className=" w-full px-2 text-2xl bg-transparent  overflow-hidden focus:outline-none "
          placeholder="Type Your Text Here..."
          value={text}
          onChange={handleTextChange}
          autoFocus
        />
      </div>
      {image && (<img src={image} class='h-120 w-[90%] mx-auto' alt="No Image"/>)}
      <div className="h-8 w-8 ml-7 mt-2 bg-[#0f0] text-white flex items-center justify-center relative cursor-pointer">
      
        <ImagePlus />
        <input type="file" onChange={handlechange}  className="  absolute opacity-0 h-full w-full "/>
      </div>
  
      <div className="h-8 w-[90%] mx-auto mt-2">
        {text.length >= 1 ? (
          <button
            className="h-full w-full shadow-3xl font-semibold bg-[#2f27ce] text-white"
            onClick={() => alert(`${text}`)}
          >
            {console.log(text)}
            Post
          </button>
        ) : (
          <button
            disabled
            className="h-full w-full mb-1 shadow-3xl font-semibold bg-[#dedcff]"
          >
            Post
          </button>
        )}
      </div>
    </div>
  );
}

function ViewLayout(){
  return(
    <div className="h-auto w-auto">
      <div >
        <p>Choose Media</p>
        <button onci>Instagram</button>
        <button>Twitter</button>
        <button>Facebook</button>
      </div>
    </div>
  )
}

function InstagramLayout(){
  let sour = 'https://static.vecteezy.com/system/resources/previews/047/462/758/non_2x/positive-man-on-clean-background-photo.jpg'
  return(
    <div class="h-[450px] w-[350px] border shadow-3xl px-5 hidden">
      <div class=' h-[50px] w-full flex justify-between mt-2'>
          <div class="flex gap-x-2 items-center">
            <div class="h-[40px] w-[40px] rounded-full flex justify-center items-center overflow-hidden">
                <img src={sour} alt="" className="h-full w-full " />
            </div>
            <p class="font-semibold text-sm">Gopal Bhandari</p>
          </div>
            <div class=" h-full flex gap-2 align-center items-center text-sm">
                <button class="bg-transparent px-3 border border-slate-900 h-2/4">Follow</button>
                <div class="flex items-center"><Ellipsis /></div>
            </div>
            
      </div>
      <div class="h-[300px] w-full ">
        <img src={sour} alt="" class="h-full w-full "/>
      </div>
      <div class="h-[50px] w-[full] mt-1 px-2 flex justify-between">
        <div className="h-full w-2/4 flex items-center gap-4">
            <div class='hover:cursor-pointer'>
              <Heart class=" hover:scale-110 hover:fill-red-500 dark:hover:text-black hover:text-white"/>
            </div>
            <div class="hover:cursor-pointer">
            <MessageCircle class="hover:scale-110 hover:text-[#444950]"/>
            </div>
            <div>
            <svg class="hover:scale-110 hover:text-[#444950] hover:cursor-pointer"aria-label="Share" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </div>
        </div>
        <div class='h-full flex items-center hover:cursor-pointer'>
            <svg  class="hover:scale-110 hover:text-[#444950] " fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
      </div>
      <div>
        <p>Your Title</p>
      </div>
    </div>
  )
}

const FacebookLayout = ()=>{
  let sour = 'https://static.vecteezy.com/system/resources/previews/047/462/758/non_2x/positive-man-on-clean-background-photo.jpg'

  return(
    <div class="h-[400px] w-[400px] shadow-3xl px-5"> 
         <div class=' h-[50px] w-full flex justify-between mt-2'>
          <div class="flex gap-x-2 items-center">
            <div class="h-[40px] w-[40px] rounded-full flex justify-center items-center overflow-hidden">
                <img src={sour} alt="" className="h-full w-full " />
            </div>
            <div>
            <p class="font-semibold text-sm">Gopal Bhandari</p>
            <p class="text-sm flex">5:50 <Globe class="text-[8px]" /></p>
            </div>
          </div>
            <div class=" h-full flex gap-2 align-center items-center text-sm">
                <button class="bg-transparent px-3 border border-slate-900 h-2/4">Follow</button>
                <div class="flex items-center"><Ellipsis  /></div>
            </div>
            
      </div>
    </div>
    
  )
}