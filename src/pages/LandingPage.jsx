import image_1 from "../assets/testimonial/image_1.jpeg";
import image_2 from "../assets/testimonial/image_2.jpg";
import image_3 from '../assets/testimonial/image_3.jpeg';
import image_4 from '../assets/testimonial/image_4.jpg';
import image1 from '../assets/image1.png'

export default function LandingPage() {
    let testimonialText = [
        {
          'image':image_1,
          "company": "Tech Solutions Inc.",
          "testimonial": "This tool has completely streamlined our social media strategy. It's user-friendly, efficient, and has saved us so much time!"
        },
        {
          'image':image_2,
          "company": "Creative Agency",
          "testimonial": "The analytics features are a game-changer. We can now track performance and adjust our content strategy in real-time."
        },
        {'image':image_3,
          "company": "Global Enterprises",
          "testimonial": "We've been using this platform for months now, and it's helped us grow our social media presence significantly. Highly recommend!"
        },
       {
        "image":image_4,
          "company": "Design Studio",
          "testimonial": "A fantastic tool for anyone managing multiple social media platforms. It saves time and increases efficiency, which is critical for our business."
        },
        
      ]
      
  return (
    <div class="min-h-[100vh] w-[90%] mx-auto mt-5 ">
      <div class="h-fit w-[90%] mx-auto flex justify-center ">
        <div class="h-fit w-2/4 shadow-2xl dark:shadow-3xl">
          <img src={image1} alt="Image Not Loaded" />
        </div>
        <div class="h-full w-2/4 pl-10">
          <span class="text-4xl font-bold text-[#ff41e6] animate-spin">
            SMM
          </span>{" "}
          <span class="font-bold text-[#00f]">(Social Media Management)</span>
          <p class="font-thin text-2xl">
            Social media Management(SMM) is a tool devloped to manage different
            platfrom from one place.<br></br>
            "Effortlessly Manage Your Social Presence, All in One Place!"
          </p>
          <div class="h-14 w-[200px] mt-5 mx-auto rounded-full bg-[#00f] flex items-center justify-center text-white">
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <p class="text-3xl text-center mt-28">Testimonials</p>
      <div class="h-[300px] w-[100%] mt-10 mb-10 flex  items-center gap-[50px]">
       {testimonialText.map(test=>
        <TestimonialCard text={test.testimonial} image={test.image}/>
       )}
      </div>
    </div>
  );
}

function TestimonialCard({image,text}) {
  return (
    <div class="h-[200px] w-[250px] shadow-3xl  shadow-[#bfbdeb] ">
      <div class="h-20 w-20 flex justify-center items-center mx-auto -mt-7 rounded-full p-[1px] bg-black">
        <div class="h-full w-full overflow-hidden rounded-full  outline-[1px]">
          <img class="h-full w-full " src={image} alt="" />
        </div>
      </div>
      <p class="mx-5  text-justify">{text}</p>
    </div>
  );
}
