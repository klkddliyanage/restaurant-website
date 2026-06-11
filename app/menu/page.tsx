import Image from "next/image";
import Link from "next/link";
import {
  MenuList,
  PageHero,
  SectionKicker,
  SiteFooter,
} from "../components/ostro-shared";

const tabs = [
  { label: "Food Menu", href: "#food" },
  { label: "Drinks Menu", href: "#drinks" },
  { label: "Functions Menu", href: "#functions" },
];

const sections = [
  {
    id: "food",
    kicker: "Food",
    title: "Food Menu",
    description:
      "Our carefully curated selection features a diverse range of Italian wines from renowned regions across the country.",
  },
  {
    id: "drinks",
    kicker: "Drink",
    title: "Drinks Menu",
    description:
      "Our carefully curated selection features a diverse range of Italian wines from renowned regions across the country.",
  },
  {
    id: "functions",
    kicker: "Function",
    title: "Functions Menu",
    description:
      "Our carefully curated selection features a diverse range of Italian wines from renowned regions across the country.",
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3eee7]">
      <PageHero
        title="Menu"
        image="/ostro/menu-hero-drinks.jpg"
        active="menu"
        objectPosition="center"
      />

      <section className="relative mx-auto w-[calc(100vw-48px)] max-w-[1190px] py-20 md:w-full md:px-6 md:py-[100px]">
        <Image
          src="/ostro/bottle-rendered.png"
          alt=""
          width={299}
          height={719}
          className="pointer-events-none absolute -left-28 top-[780px] hidden rotate-[30deg] opacity-10 lg:block"
        />
        <Image
          src="/ostro/bottle-rendered.png"
          alt=""
          width={299}
          height={719}
          className="pointer-events-none absolute -right-20 top-[250px] hidden rotate-180 opacity-10 lg:block"
        />

        <div className="flex min-w-0 flex-wrap gap-4 sm:gap-5">
          {tabs.map((tab, index) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`ostro-serif rounded px-5 py-3 text-[18px] leading-7 tracking-[0.04em] text-black sm:px-[30px] sm:text-[20px] sm:leading-[31px] ${
                index === 1 ? "bg-[#cec4b6]" : "bg-[#e2dbd1]"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="mt-20 space-y-28">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-12"
            >
              <div className="mb-12">
                <SectionKicker>{section.kicker}</SectionKicker>
              </div>
              <div className="mx-auto min-w-0 max-w-[330px] sm:max-w-[840px]">
                <h2 className="ostro-serif break-words text-[44px] font-medium leading-tight tracking-[0.04em] text-black md:text-[75px]">
                  {section.title}
                </h2>
                <p className="ostro-serif mt-4 break-words text-[19px] leading-7 tracking-[0.04em] text-black md:text-[28px] md:leading-8">
                  {section.description}
                </p>
                <div className="mt-12">
                  <MenuList repeat={index === 0 ? 2 : 1} large />
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
