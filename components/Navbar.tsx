import {
  AnchorLinks,
  consonantLinks,
  email,
  LinksType,
} from "@/lib/consonants";
import { Hamburger } from "./Hamburger";
export default function Navbar() {
  return (
    <>
      <Hamburger />
      <nav className=" px-8 py-6 h-screen fixed z-10 -right-full bg-[#303030] grid grid-cols-2 place-items-center">
        {consonantLinks.map((link: AnchorLinks, index: number) => (
          <div key={link.section + index} className="mt-4">
            <h2>{link.section}</h2>
            <ul className="flex flex-col">
              {link.links.map((item: LinksType, index: Number) => (
                <li
                  key={item.url + index}
                  className={`mt-3  relative flex items-center gap-3 group`}
                >
                  {item.color ? (
                    <div
                      className="h-3 w-3 rounded-full  group-hover:scale-200 duration-250"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  ) : (
                    ""
                  )}
                  <a
                    target={`${index === 1 ? "_blank" : "_self"}`}
                    href={item.url}
                  >
                    {item.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="absolute bottom-15">
          <h2>get in touch</h2>
          <a href={`mailto:${email}`} target="_blank">
            {email}
          </a>
        </div>
      </nav>
    </>
  );
}
