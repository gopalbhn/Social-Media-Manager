import {ImagePlus} from "lucide-react";
import { useEffect, useState } from "react";
import FacebookLayout from '../components/posts/FacebookLayout'
import InstagramLayout from '../components/posts/InstagramLayout'
import TwitterLayout from '../components/posts/TwitterLayout'
export default function CreatePost() {

  return (
    <div class="h-[100vh] w-[90%] mx-auto p-5 border-1 border-slate-800 flex gap-[80px]">
      <div class="h-full w-[500px]">
        <div class="h-14 w-40 dark:bg-[#433bff] bg-[#9797cf] shadow-3xl rounded-xl hover:scale-105 duration-150 p-1 flex gap-7">
          <button class="w-full h-full ">
           Create Posts
          </button>
        </div>
        <PostModal />
      </div>
      <div class="h-full w-[400px]  shadow-xl">
        <ChooseLayoutBar />
        <InstagramLayout />
        <FacebookLayout />
        <TwitterLayout />
      </div>
      <div class="h-full w-[400px]">
        <SelectPlatform />
      </div>
    </div>
  );
}

function PostModal() {
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const handleTextChange = (event) => {
    setText(event.target.value);
    autoResizeTextArea(event);
  };
  function handlechange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
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
      {image && (
        <img src={image} class="h-120 w-[90%] mx-auto" alt="No Image" />
      )}
      <div className="h-8 w-8 ml-7 mt-2 bg-[#0f0] text-white flex items-center justify-center relative cursor-pointer">
        <ImagePlus />
        <input
          type="file"
          onChange={handlechange}
          className="  absolute opacity-0 h-full w-full "
        />
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

function ViewLayout() {
  return (
    <div className="h-auto w-auto">
      <div>
        <p>Choose Media</p>
        <button>Instagram</button>
        <button>Twitter</button>
        <button>Facebook</button>
      </div>
    </div>
  );
}

function SelectPlatform() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const handlePlatformClick = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const isPlatformSelected = (platform) => selectedPlatforms.includes(platform);

  return (
    <div className="h-2/4 w-full shadow-lg rounded-lg overflow-hidden bg-white dark:bg-black dark:shadow-3xl dark:shadow-[#00f]">
      <div className="h-[50px] w-full bg-[#433bff] text-white text-xl text-center leading-[50px] font-semibold">
        Choose Platform To Post
      </div>
      <div className="p-4 space-y-3">
        {/* Facebook */}
        <div
          onClick={() => handlePlatformClick("Facebook")}
          className={`h-[50px] w-full flex items-center justify-between px-4 rounded-md cursor-pointer transition-colors ${
            isPlatformSelected("Facebook")
              ? "bg-[#4CAF50] text-white"
              : "bg-[#e8e9f5] text-[#2E7D32] hover:bg-[#C8E6C9]"
          }`}
        >
          <span className="font-medium">Facebook</span>
        </div>

        {/* Twitter */}
        <div
          onClick={() => handlePlatformClick("Twitter")}
          className={`h-[50px] w-full flex items-center justify-between px-4 rounded-md cursor-pointer transition-colors ${
            isPlatformSelected("Twitter")
              ? "bg-[#2196F3] text-white"
              : "bg-[#E3F2FD] text-[#1976D2] hover:bg-[#BBDEFB]"
          }`}
        >
          <span className="font-medium">Twitter</span>
        </div>

        {/* Instagram */}
        <div
          onClick={() => handlePlatformClick("Instagram")}
          className={`h-[50px] w-full flex items-center justify-between px-4 rounded-md cursor-pointer transition-colors ${
            isPlatformSelected("Instagram")
              ? "bg-[#9C27B0] text-white"
              : "bg-[#F3E5F5] text-[#8E24AA] hover:bg-[#E1BEE7]"
          }`}
        >
          <span className="font-medium">Instagram</span>
        </div>
      </div>
    </div>
  );
}

function ChooseLayoutBar() {
  return (
    <div className="h-[50px] my-2 bg-[#42b846] w-full">
      <select name="" id="" className="w-full h-full bg-[#433bff]  text-white text-xl font-semibold text-center  ">
        <option value="Facebook" className="bg-[#433bff] hover:bg-black  text-white hover">Facebook</option>
        <option value="Instagram" className="bg-[#433bff] text-white">Instagram</option>
        <option value="Twitter" className="bg-[#433bff] text-white">Twitter</option>
      </select>
    </div>
  );
}


