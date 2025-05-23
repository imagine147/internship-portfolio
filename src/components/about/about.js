import Image from "next/image"
import Pic from "../../images/image 25.png"
import Link from "next/link"
export default function About() {
  return (
    <div>
      <div className="container w-full md:w-10/12 mx-auto px-4 pt-16 pb-[12rem] flex flex-col md:flex-row gap-8 justify-between">
        <div className="hidden md:flex w-full text-3xl text-white font-bold">ABOUT ME</div>
        <div className="w-full flex flex-col gap-4">
          <h3 className="hidden md:flex text-white text-lg font-normal">I am a front-end developer based in Lagos. Has Social Science background. </h3>
          <p className="text-[#C7C7C7] text-sm">I am a front-end developer based in Lagos looking for exciting opportunities. Has Social Science background. Likes to focus on accessibility when developing. <span className="hidden md:flex">Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</span></p>

          <div>
            <Link href="/about" className="hover:brightness-115">
              <button className="text-[#D3E97A] border-b border-b-[#D3E97A] mt-1 cursor-pointer">MORE ABOUT ME</button>
            </Link>
          </div>
        </div>

        <Image className="block md:hidden mt-4 w-[390px]" src={Pic} alt="profile-image"/>
      </div>
    </div>
  )
}