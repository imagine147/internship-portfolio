import Image from "next/image"
import Linkdin from "../images/bxl-linkedin.svg (1).svg"
import Github from "../images/bxl-github.svg.svg"
import Twitter from "../images/bxl-linkedin.svg.svg"
import Instagram from "../images/bxl-instagram.svg.svg"
import ContactForm from "@/components/contact/form"
import Link from "next/link"
export default function Footer() {
  return (
    <footer>
      <div className="container w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-8 px-4 py-16">
        <div className="relative w-full md:w-1/2 text-[#C7C7C7] text-sm flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-3xl ">LET'S CONNECT</h1>
            <div>
                <p>Say hello at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akinsolaolajide150@gmail.com" target="_blank" rel="noopener noreferrer"><span className="border-b border-b-[#D3E97A] hover:text-[#D3E97A] cursor-pointer">akinsolaolajide150@gmail.com</span></a></p>
              <p>For more info, here's my <Link href="/Akinsola_Olajide_Akintunde_CV (3).pdf" target="_blank" rel="noopener noreferrer"><span className="border-b border-b-[#D3E97A] hover:text-[#D3E97A] ">resume</span></Link></p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/oluwatomiwa-deji-415159107/" target="_blank" rel="noopener noreferrer" className="hover:brightness-150 hover:border hover:border-[#D3E97A] rounded-full hover:p-1">
              <Image className="w-7 h-7" src={Linkdin} alt="linkdin-icon"/>
            </Link>
            <Link href="https://github.com/imagine147" target="_blank" rel="noopener noreferrer" className="hover:brightness-150 hover:border hover:border-[#D3E97A] rounded-full hover:p-1">
              <Image className="w-7 h-7" src={Github} alt="github-icon"/>
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:brightness-150 hover:border hover:border-[#D3E97A] rounded-full hover:p-1">
              <Image className="w-7 h-7" src={Twitter} alt="twitter-icon"/>
            </Link>
            <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:brightness-150 hover:border hover:border-[#D3E97A] rounded-full hover:p-1">
              <Image className="w-7 h-7 cursor-pointer" src={Instagram} alt="instagram-icon"/>
            </Link>
          </div>

          <div className="hidden md:flex text-sm absolute bottom-0">© 2023 Olajide Akinsola</div>
        </div>
        <span className="w-full md:w-1/2 mt-8 md:mt-0"><ContactForm/></span>
        <div className="block md:hidden text-sm text-[#C7C7C7] mt-4">© 2023 Olajide Akinsola</div>
      </div>
    </footer>
  )
}