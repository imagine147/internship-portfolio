import Image from "next/image"
import Github from "../../images/bxl-github.svg.svg"
import Arrow from "../../images/arrow.svg"
import { cards } from "@/db"
import Link from "next/link"
export default function Cards() {
  return (
      <div>
        {cards.map((card) => (
          <div className="flex flex-col md:flex-row gap-8 mt-10" key={card.id}>
            <div className="bg-[#1A1A1A] rounded-lg w-full md:w-1/2">
              <div className="rounded-3xl bg-[#0A0A0A] py-2 w-[30%] mt-2  ml-4 text-center text-white text-[9px] lg:text-[12px] xl:text-sm">{card.type}</div>
              <Image className="rounded-lg w-[280px] md:w-[230px] lg:w-[340px] xl:w-[486px] mb-16 mt-6 md:mt-10 mx-auto" src={card.image} alt="project-image"/>
            </div>

            <div className="w-full md:w-1/2 py-8 flex flex-col gap-4">
              <div className="text-white flex flex-col gap-2">
                <h3 className="text-lg">{card.title}</h3>
                <p className="text-sm text-[#C7C7C7]">{card.description}</p>
              </div>
              <div className="text-white flex flex-col gap-2">
                <h5 className="">PROJECT INFO</h5>
                <div className="border-b-1 border-b-[#484848]"></div>
                <div className="flex justify-between text-sm">Year<span>{card.year}</span></div>
                <div className="border-b-1 border-b-[#484848]"></div>
                <div className="flex justify-between text-sm">Role<span>Front-end Developer</span></div>
                <div className="border-b-1 border-b-[#484848]"></div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <Link href={card.link} target="_blank" rel="noopener noreferrer" className="hover:brightness-130">
                  <button className="text-[#D3E97A] border-b-2 border-b-[#D3E97A] flex items-center py-1 gap-2 cursor-pointer">LIVE DEMO<span><Image className="w-7" src={Arrow} alt="arrow-up"/></span></button>
                </Link>
                <Link href="https://github.com/imagine147" target="_blank" rel="noopener noreferrer" className="hover:brightness-130">
                  <button className="text-[#D3E97A] border-b-2 border-b-[#D3E97A] flex items-center py-1 gap-2 cursor-pointer">SEE ON GITHUB<span><Image className="w-7" src={Github} alt="github-icon"/></span></button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}