import { caps } from "@/db";

export default function MyCapabilities() {
  return (
    <div>
      <div className="container w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-6 justify-between p-4 py-16">
        <div className="w-full text-3xl font-bold text-white">
          MY CAPABILITIES
        </div>
        <div className="text-[#C7C7C7] w-full">
          <p className="text-sm mb-4">
            I am always looking to add more skills. Morbi egestas neque eu
            blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
            purus faucibus tristique ut et dolor.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-2 w-full">
            {caps.map((cap) => (
              <div className="list-none border border-[#484848] rounded-3xl py-2  text-center text-xs md:text-[7px] lg:text-xs text-white mb-2 "
                key={cap.id}>
                {cap.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
