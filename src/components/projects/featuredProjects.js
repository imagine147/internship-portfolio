import Cards from "../reuseable/projectCards";

export default function Projects() {
  return (
    <div>
      <div className="container w-full md:w-10/12 mx-auto p-4 py-8">
        <div className="w-full md:w-[40%]">
          <h2 className="w-full  text-2xl font-bold text-white">FEATURED PROJECTS</h2>
          <p className="text-[#C7C7C7] mt-2 text-sm">Here are some of the selected projects that showcase my passion for front-end development.</p>
        </div>
        <Cards/>
      </div>
    </div>
  )
}