import Image from "next/image"
import Linkdin from "../../../images/Frame 3.svg"
import Github from "../../../images/Frame 4.svg"
import Img from "../../../images/WhatsApp Image 2025-07-11 at 12.51.06_bfdc047b.jpg"
import Save from "../../../images/circle.svg"
import MyCapabilities from "@/components/about/capability/myCapabilities";
import MyExperience from "@/components/about/experience/myExperience";
import Link from "next/link"

export default function AboutMe() {
  return (
    <div>
      <div className="container w-full md:w-10/12 mx-auto px-4 pt-16 pb-24 flex flex-col md:flex-row gap-8 justify-between">
        <div className="w-full text-3xl text-white font-bold">ABOUT ME</div>
        <div className="w-full flex flex-col gap-4">
          <h3 className="hidden md:flex text-white text-lg font-normal">
            I am a front-end developer based in Lagos. Has Social Science background.
          </h3>
          <p className="text-[#C7C7C7] text-sm">
            I am a front-end developer based in Lagos looking for exciting opportunities. Has Social Science background. Likes to focus on accessibility when developing. 
            <span className="hidden md:flex">
              Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </span>
          </p>
          <div className="flex gap-6 items-center mt-4">
            <Link href="/Akinsola_Olajide_Akintunde_CV (3).pdf" download className="bg-[#D3E97A] rounded-3xl text-[#0A0A0A] px-4 py-2 text-xs lg:text-sm flex gap-2 items-center hover:brightness-115"><p className="whitespace-nowrap">DOWNLOAD RESUME</p>
              <span className="rounded-full bg-[#0A0A0A] md:p-1 hover:brightness-115">
                <Image className="w-6 block md:hidden " src={Save} alt="download-icon" />
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/oluwatomiwa-deji-415159107/" target="_blank" rel="noopener noreferrer">
              <Image className="w-10 h-10 hover:brightness-115" src={Linkdin} alt="linkedin-icon" />
            </Link>
            <Link href="https://github.com/imagine147" target="_blank" rel="noopener noreferrer">
              <Image className="w-10 h-10 hover:brightness-115" src={Github} alt="github-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="rounded-lg container w-full md:w-10/12  mx-auto  mt-16 mb-8 bg-[#C7C7C7]">
          <Image src={Img} alt="profile-image" className="w-full object shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-700 ease-in-out transform hover:scale-[1.02] animate-fadeIn" />
        </div>
      </div>
      <MyCapabilities />
      <div className="border-b-1 border-b-[#484848]"></div>
      <MyExperience />
      <div className="border-b-1 border-b-[#484848]"></div>
    </div>
  )
}