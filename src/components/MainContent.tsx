import { Play } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Staffecho",
    title: "Builder",
    year: "2025",
    logo: "/staffecho.png",
    url: "https://staffecho.com",
  },
  {
    company: "Synfutures",
    title: "Frontend Developer",
    year: "2024-2025",
    logo: "/synfuture.png",
    url: "https://synfutures.com",
  },
  {
    company: "Wombat Finance",
    title: "Web3 Developer",
    year: "2021-2024",
    logo: "/wombat.png",
    url: "https://wombat.finance",
  },
  {
    company: "oscaryiu.com",
    title: "Wordpress Developer",
    year: "2025",
    logo: "/oscaryiu.png",
    url: "https://oscaryiu.com",
  },
  {
    company: "Oscar Yiu",
    title: "Made in Hong Kong",
    year: "1996-now",
    logo: "/me.jpg",
    url: "https://www.linkedin.com/in/15077693d/",
  },
];

export function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-black text-white p-4 md:p-8 overflow-y-auto">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 md:mb-8">
        <Image
          src="/icon.png"
          width={200}
          height={200}
          alt="Playlist cover"
          className="w-32 h-32 md:w-52 md:h-52 shadow-lg mb-4 md:mb-0"
        />
        <div>
          <p className="text-sm font-semibold">BUILDER</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-2 md:mb-4">
            I&apos;m Oscar!
          </h1>
          <p className="text-xs md:text-sm text-gray-300">
            Web development and building start up
          </p>
        </div>
      </div>
      <div className="mb-6 md:mb-8">
        <a
          href="mailto:Oscaryiu.lapsang@gmail.com"
          className="bg-green-500 text-black font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full hover:bg-green-400 inline-block"
        >
          <Play fill="currentColor" size={20} className="inline mr-2" />
          Email
        </a>
      </div>

      {/* Desktop Table View */}
      <table className="w-full text-left text-sm text-gray-300 hidden md:table">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="pb-3">#</th>
            <th className="pb-3">EXPERIENCE</th>
            <th className="pb-3">TITLE</th>
            <th className="pb-3">YEAR</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience, index) => (
            <tr
              key={index}
              className="hover:bg-white/10 cursor-pointer transition-colors"
              onClick={() => window.open(experience.url, "_blank")}
            >
              <td className="py-3">{index + 1}</td>
              <td className="py-3">
                <div className="flex items-center">
                  <img
                    src={experience.logo}
                    width={40}
                    height={40}
                    alt={`${experience.company} logo`}
                    className="mr-3 w-10 h-10  object-cover"
                  />
                  <div>
                    <p className="text-white">{experience.company}</p>
                  </div>
                </div>
              </td>
              <td className="py-3">{experience.title}</td>
              <td className="py-3">{experience.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile List View */}
      <div className="md:hidden">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex items-center py-3 border-b border-gray-800 hover:bg-white/10 cursor-pointer transition-colors"
            onClick={() => window.open(experience.url, "_blank")}
          >
            <div className="mr-3 text-gray-400">{index + 1}</div>
            <img
              src={experience.logo}
              width={40}
              height={40}
              alt={`${experience.company} logo`}
              className="mr-3 w-10 h-10 object-cover"
            />
            <div className="flex-1">
              <p className="text-white text-sm">{experience.company}</p>
              <p className="text-xs text-gray-400">{experience.title}</p>
            </div>
            <div className="text-xs text-gray-400">{experience.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
