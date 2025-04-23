import {
  Ellipsis,
  Heart,
  MessageCircle,
  Repeat2,
  Kanban,
  Bookmark,
  Share,
} from "lucide-react";

const TwitterLayout = () => {
  let sour =
   'https://th.bing.com/th/id/OIP.417hL7160FM_SF4dAydN1QHaEo?rs=1&pid=ImgDetMain';
  return (
    <div class="h-[440px] w-[400px] shadow-3xl dark:shadow-[#00f] px-5">
      <div class=" h-[50px] w-full flex justify-between mt-2">
        <div class="flex gap-x-2 items-center">
          <div class="h-[40px] w-[40px] rounded-full flex justify-center items-center overflow-hidden">
            <img src={sour} alt="" className="h-full w-full " />
          </div>
          <p class="font-semibold text-sm flex gap-1">
            <span class="hover:underline hover:cursor-pointer">Gopal Bhandari</span>
            <span class="text-[#5b5a5a] ">
              @username
            </span>{" "}
          </p>
        </div>
        <div class=" h-full flex gap-2 align-center items-center text-sm">
          <div class="flex items-center rounded-full hover:bg-[#ebeaea] dark:hover:bg-[#504e4e] p-1 hover:cursor-pointer">
            <Ellipsis />
          </div>
        </div>
      </div>
      <div class='h-[300px] w-[90%] mx-auto rounded-lg overflow-hidden'>
        <img src={sour}  class='h-full w-full' alt="" />
      </div>
      <div class="h-[50px] w-full p-1 flex  gap-4 items-center">
        <div class='h-full w-[80%] flex justify-around items-center'>
        <div class="h-8 p-2 hover:text-[#1d9cf0] hover:cursor-pointer flex justify-center items-center">
        <MessageCircle />
        </div>
        <div class="h-8 p-2 hover:text-[#00ba7c] hover:cursor-pointer flex justify-center items-center">
        <Repeat2 />
        </div>
        <div class="h-8 p-2  hover:cursor-pointer flex justify-center items-center">
        <Heart class="hover:fill-[#d3176c] dark:hover:text-black hover:text-white"/>
        </div>
        <div class="h-8 p-2 hover:text-[#1d9cf0] hover:cursor-pointer flex justify-center items-center">
        <Kanban />
        </div>
        </div>
        <div class='flex gap-2 text-sm'>
          <div class="h-8 p-2 hover:text-[#1d9cf0] hover:cursor-pointer flex justify-center items-center"><Bookmark class='h-5 w-5' /></div>
          <div class="h-8 p-2 hover:text-[#1d9cf0] hover:cursor-pointer flex justify-center items-center"><Share class='h-5 w-5'/></div>
        </div>
      </div>
    </div>
  );
};

export default TwitterLayout;