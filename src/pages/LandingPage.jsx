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
    <div className="min-h-[100vh] w-[90%] mx-auto mt-5  ">
      <div className="h-fit w-[90%] mx-auto sm:flex justify-center ">
        <div className="h-[170px] w-full sm:h-fit sm:w-2/4 shadow-2xl dark:shadow-3xl ">
          <img src={image1} alt="Image Not Loaded" />
        </div>
        <div className=" sm:h-full sm:w-2/4 sm:pl-10 mt-10 sm:mt-3 sm:m-0">
          <span className="text-4xl font-bold text-[#ff41e6] animate-spin">
            SMM
          </span>{" "}
          <span className="font-bold text-[#00f]">(Social Media Management)</span>
          <p className="font-thin text-lg  text-center sm:text-left sm:text-2xl">
            Social media Management(SMM) is a tool devloped to manage different
            platfrom from one place.<br></br>
            "Effortlessly Manage Your Social Presence, All in One Place!"
          </p>
          <div className="h-14 sm:w-[200px] mt-5 mx-auto rounded-full bg-[#00f] flex items-center justify-center text-white">
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <p className="text-3xl text-center mt-20 sm:mt-25">Testimonials</p>
      <div className="sm:h-[300px] w-[100%] mt-10 mb-10 flex  flex-col sm:flex-row justify-center items-center gap-[50px] ">
       {testimonialText.map(test=>
        <TestimonialCard key={test.image} id = {test.image} text={test.testimonial} />
       )}
      </div>
    </div>
  );
}

function TestimonialCard({image,text,id}) {
  return (
    <div className=" h-[300px] sm:h-[200px] w-3/4 sm:w-[250px] shadow-3xl  shadow-[#bfbdeb] ">
      <div className="h-20 w-20 flex justify-center items-center mx-auto -mt-7 rounded-full p-[1px] bg-black">
        <div className="h-full w-full overflow-hidden rounded-full  outline-[1px]">
          <img className="h-full w-full " src={image} alt="" />
        </div>
      </div>
      <p className="mx-5 mt-3 sm:mt-0 text-justify">{text}</p>
    </div>
  );
}
