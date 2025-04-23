import {
  Ellipsis,
  Heart,
  MessageCircle,
} from "lucide-react";

function InstagramLayout() {
    let sour =
      "https://static.vecteezy.com/system/resources/previews/047/462/758/non_2x/positive-man-on-clean-background-photo.jpg";
    return (
      <div class="h-[450px] w-[350px] border shadow-3xl px-5 hidden">
        <div class=" h-[50px] w-full flex justify-between mt-2">
          <div class="flex gap-x-2 items-center">
            <div class="h-[40px] w-[40px] rounded-full flex justify-center items-center overflow-hidden">
              <img src={sour} alt="" className="h-full w-full " />
            </div>
            <p class="font-semibold text-sm">Gopal Bhandari</p>
          </div>
          <div class=" h-full flex gap-2 align-center items-center text-sm">
            <button class="bg-transparent px-3 border border-slate-900 h-2/4">
              Follow
            </button>
            <div class="flex items-center">
              <Ellipsis />
            </div>
          </div>
        </div>
        <div class="h-[300px] w-full ">
          <img src={sour} alt="" class="h-full w-full " />
        </div>
        <div class="h-[50px] w-[full] mt-1 px-2 flex justify-between">
          <div className="h-full w-2/4 flex items-center gap-4">
            <div class="hover:cursor-pointer">
              <Heart class=" hover:scale-110 hover:fill-red-500 dark:hover:text-black hover:text-white" />
            </div>
            <div class="hover:cursor-pointer">
              <MessageCircle class="hover:scale-110 hover:text-[#444950]" />
            </div>
            <div>
              <svg
                class="hover:scale-110 hover:text-[#444950] hover:cursor-pointer"
                aria-label="Share"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Share</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
          </div>
          <div class="h-full flex items-center hover:cursor-pointer">
            <svg
              class="hover:scale-110 hover:text-[#444950] "
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Save</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>
        <div>
          <p>Your Title</p>
        </div>
      </div>
    );
  }

  export default InstagramLayout;