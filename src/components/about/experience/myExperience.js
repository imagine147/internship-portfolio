export default function MyExperience() {
  return (
    <div className="container w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-6 justify-between p-4 py-16">
      <div className="w-full text-3xl font-bold text-white">MY EXPERIENCE</div>

      <div className="flex flex-col gap-8 text-sm text-white">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="text-lg">Freelance Developer</h4>
            <p>Nov 2023-Present</p>
          </div>
            <p className="text-[#C7C7C7] text-sm">Designed and developed responsive, user-focused websites for diverse clients, including an employment platform and an event management site.</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="text-lg">Front-End Intern</h4>
            <p>Sep 2023-Nov 2023</p>
          </div>
          <div className="text-[#D3E97A] text-base">Tech-Studio</div>
            <p className="text-[#C7C7C7] text-sm">Contributed to real-world frontend projects in a collaborative development environment. Gained hands-on experience with version control (Git), code reviews, and agile workflows.</p>
        </div>
      </div>
    </div>
  )
}