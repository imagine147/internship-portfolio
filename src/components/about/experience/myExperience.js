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
            <p className="text-[#C7C7C7] text-sm">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="text-lg">Front-End Intern</h4>
            <p>Sep 2023-Nov 2023</p>
          </div>
          <div className="text-[#D3E97A] text-base">Tech-Studio</div>
            <p className="text-[#C7C7C7] text-sm">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
    </div>
  )
}