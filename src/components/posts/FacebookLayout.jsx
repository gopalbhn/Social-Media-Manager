import {Ellipsis,Forward,Globe,MessageCircle,ThumbsUp,X} from "lucide-react";

const FacebookLayout = () => {
  const date = new Date();
  let sour =
    "https://static.vecteezy.com/system/resources/previews/047/462/758/non_2x/positive-man-on-clean-background-photo.jpg";
  return (
    <div class="h-[400px] w-[400px] shadow-3xl px-5 hidden">
      <div class=" h-[50px] w-full flex justify-between mt-2">
        <div class="flex gap-x-2 items-center">
          <div class="h-[40px] w-[40px] rounded-full  overflow-hidden object-contain">
            <img src={sour} alt="" className="h-full w-full " />
          </div>
          <div>
            <p class="font-semibold text-sm hover:underline hover:cursor-pointer">
              Gopal Bhandari
            </p>
            <p class="text-sm flex items-center">
              {date.toDateString()} <Globe class="h-3 w-3 ml-1" />
            </p>
          </div>
        </div>
        <div class=" h-full flex gap-2 align-center items-center text-sm">
          <div class="flex items-center rounded-full hover:bg-[#ebeaea] p-1 hover:cursor-pointer">
            <Ellipsis />
          </div>
          <div class="flex items-center rounded-full hover:bg-[#ebeaea] p-1 hover:cursor-pointer">
            <X />
          </div>
        </div>
      </div>
      <div class="pl-2 my-1">Write Something</div>
      <div class="h-[250px] w-full">
        <img src={sour} alt="image Not found" />
      </div>
      <div class="h-[50px] w-full p-1 grid grid-cols-3 gap-1  items-center">
        <div class="h-8 hover:bg-[#eaeaea] hover:text-[#7d7f82] hover:cursor-pointer flex gap-2 justify-center items-center">
          <ThumbsUp /> Like
        </div>
        <div class="h-8 hover:bg-[#eaeaea] hover:text-[#7d7f82] hover:cursor-pointer flex gap-2 justify-center items-center">
          <MessageCircle /> Comment
        </div>
        <div class="h-8 hover:bg-[#eaeaea] hover:text-[#7d7f82] hover:cursor-pointer flex gap-2 justify-center items-center">
          <Forward /> Share
        </div>
      </div>
    </div>
  );
};

export default FacebookLayout;