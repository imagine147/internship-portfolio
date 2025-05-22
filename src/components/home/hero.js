import Image from "next/image"
import Linkdin from "../../images/Frame 3.svg"
import Github from "../../images/Frame 4.svg"
import Pic from "../../images/0d3630f0a8ce367183462cfffe8f59bdd44167c0.png"
import Arrow from "../../images/arrow.svg"
import Link from "next/link"
export default function Hero() {
  return (
    <div>
      <div className="container w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-8 items-center p-4 text-white text-base pt-8 pb-16">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">HI, I AM OLAJIDE AKINSOLA.</h1>
            <p className="text-sm text-[#C7C7C7]">A Lagos based front-end developer passionate about building accessible and user friendly websites.</p>
          </div>

          <div className="flex gap-4 items-center">
            <Link href="#contact" className="bg-[#D3E97A] rounded-3xl text-[#0A0A0A] px-4 py-2 text-sm flex gap-2 items-center hover:brightness-115">
              CONTACT ME <span className="rounded-full bg-[#0A0A0A] md:p-1"><Image className="block md:hidden" src={Arrow} alt="arrow-up"/></span>
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Image className="w-10 h-10 hover:brightness-115" src={Linkdin} alt="linkedin-icon"/>
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Image className="w-10 h-10 hover:brightness-115" src={Github} alt="github-icon"/>
            </Link>
          </div>
        </div>
        <Image src={Pic} alt="profile-pic" className="rounded-lg w-full md:w-1/2"/>
      </div>
    </div>
  )
}