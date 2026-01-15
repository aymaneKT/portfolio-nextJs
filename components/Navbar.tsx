import { AnchorLinks, consonantLinks, LinksType } from "@/lib/consonants";
export default function Navbar() {
  return (
    <nav className=" px-8 py-6 h-dvh fixed z-10 right-0 bg-[#303030]">
      {consonantLinks.map((link: AnchorLinks, index: number) => (
        <div key={crypto.randomUUID()} className="mt-4">
          <h2 className={`${index === 1 ? "mt-14" : "mt-0"}`}>
            {link.section}
          </h2>
          <ul className="flex flex-col">
            {link.links.map((item: LinksType) => (
              <li
                key={crypto.randomUUID()}
                className={`mt-3  relative flex items-center gap-3 group`}
              >
                {item?.color ? (
                  <div
                    className="h-3 w-3 rounded-full  group-hover:scale-200 duration-250"
                    style={{ backgroundColor: item.color }}
                  ></div>
                ) : (
                  ""
                )}
                <a href={item.url}>{item.name} </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="absolute bottom-12">
        <h2>get in touch</h2>
        <a href="mailto:aymanekabtitech@gmail.com" target="_blank">
          aymanekabtitech@gmail.com
        </a>
      </div>
    </nav>
  );
}
