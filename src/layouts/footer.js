import Image from "next/image"
import Linkdin from "../images/bxl-linkedin.svg (1).svg"
import Github from "../images/bxl-github.svg.svg"
import Twitter from "../images/bxl-linkedin.svg.svg"
import Instagram from "../images/bxl-instagram.svg.svg"
import ContactForm from "@/components/contact/form"
export default function Footer() {
  return (
    <footer>
      <div className="container w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-8 px-4 py-16">
        <div className="relative w-full md:w-1/2 text-[#C7C7C7] text-sm flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-3xl ">LET'S CONNECT</h1>
            <div>
              <p>Say hello at <span className="border-b border-b-[#D3E97A]">akinsolaolajide150@gmail.com</span></p>
              <p>For more info, here's my <span className="border-b border-b-[#D3E97A]">resume</span></p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image className="w-7 h-7" src={Linkdin} alt="linkdin-icon"/>
            <Image className="w-7 h-7" src={Github} alt="github-icon"/>
            <Image className="w-7 h-7" src={Twitter} alt="twitter-icon"/>
            <Image className="w-7 h-7" src={Instagram} alt="instagram-icon"/>
          </div>

          <div className="hidden md:flex text-sm absolute bottom-0">© 2023 Olajide Akinsola</div>
        </div>
        <span className="w-full md:w-1/2 mt-8 md:mt-0"><ContactForm/></span>
        <div className="block md:hidden text-sm text-[#C7C7C7] mt-4">© 2023 Olajide Akinsola</div>
      </div>
    </footer>
  )
}