import Image from "next/image";
import type { ReactNode } from "react";

const offers = [
  {
    name: "Barolo",
    description:
      "A bold and full-bodied red with deep flavors of dark cherry, leather, and truffle, aged to perfection.",
    originalPrice: "$1240",
    salePrice: "$1240",
  },
  {
    name: "Barolo",
    description:
      "A bold and full-bodied red with deep flavors of dark cherry, leather, and truffle, aged to perfection.",
    originalPrice: "$1240",
    salePrice: "$1240",
  },
  {
    name: "Barolo",
    description:
      "A bold and full-bodied red with deep flavors of dark cherry, leather, and truffle, aged to perfection.",
    originalPrice: "$1240",
    salePrice: "$1240",
  },
];

const menuItems = [
  {
    name: "Barolo",
    price: "$1240",
    description:
      "A bold and full-bodied red with deep flavors of dark cherry, leather, and truffle, aged to perfection.",
  },
  {
    name: "Barbaresco",
    price: "$137",
    description:
      "Elegant and refined, this Nebbiolo-based wine offers notes of red berries, roses, and spice with a smooth finish.",
  },
  {
    name: "Chianti",
    price: "$98",
    description:
      "A classic Tuscan wine with vibrant acidity and flavors of ripe cherries, earthy herbs, and a hint of oak.",
  },
  {
    name: "Prosecco",
    price: "$1120",
    description:
      "Light, crisp, and refreshing with delicate bubbles and notes of green apple, pear, and citrus.",
  },
  {
    name: "Soave",
    price: "$164",
    description:
      "A dry and aromatic white wine with floral notes, hints of almond, and a crisp mineral finish.",
  },
];

const faqs = [
  {
    question: "Where is Ostro Italian located?",
    answer:
      "Ostro Italian is located in the heart of Fremantle Fishing Boat Harbour in Western Australia, offering beautiful waterfront and ocean views.",
    open: true,
  },
  {
    question: "What type of cuisine does Ostro Italian serve?",
    open: false,
  },
  {
    question: "Do you offer vegetarian options?",
    open: false,
  },
];

function NavLink({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className="ostro-nav relative inline-flex h-9 items-center justify-center text-[12px] leading-6 text-black md:text-[20px]"
    >
      {children}
      {active ? (
        <span className="absolute bottom-0 left-1/2 h-0.5 w-[34px] -translate-x-1/2 rounded-full bg-[#cd0f16] md:w-[69px]" />
      ) : null}
    </a>
  );
}

function SectionHeading({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-4 md:gap-5 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="h-1 w-16 shrink-0 bg-[#cd0f16] md:w-[137px]" />
      <h2 className="ostro-serif text-[20px] uppercase leading-[31px] tracking-[0.28em] text-black md:text-[28px]">
        {children}
      </h2>
      <span className="h-1 w-16 shrink-0 bg-[#147a38] md:w-[137px]" />
    </div>
  );
}

function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src="/ostro/ornament.png"
        alt=""
        width={430}
        height={32}
        className="h-8 w-[260px] object-contain sm:w-[360px] md:w-[430px]"
      />
    </div>
  );
}

function ActionButton({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className="ostro-nav inline-flex h-[57px] min-w-[217px] items-center justify-center gap-4 rounded bg-[#cd0f16] px-9 text-[16px] leading-6 text-white transition-colors hover:bg-[#a90d13] md:text-[20px]"
    >
      {children}
      <span aria-hidden="true" className="text-[18px] leading-none">
        &rarr;
      </span>
    </a>
  );
}

function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  return (
    <article className="flex min-w-0 flex-col">
      <div className="h-40 rounded bg-transparent md:h-[357px]" />
      <div className="ostro-serif mt-5 space-y-[10px] leading-[31px] text-black">
        <h3 className="text-[24px] font-semibold">{offer.name}</h3>
        <p className="text-[20px]">{offer.description}</p>
        <div className="flex gap-5 pt-5 text-[24px] font-medium">
          <span className="text-black line-through">{offer.originalPrice}</span>
          <span className="text-[#cd0f16]">{offer.salePrice}</span>
        </div>
      </div>
    </article>
  );
}

function MenuList() {
  return (
    <div className="ostro-serif space-y-[18px] text-[20px] leading-[31px] text-black">
      {menuItems.map((item) => (
        <article key={item.name}>
          <div className="flex items-baseline gap-2 font-medium">
            <h3 className="shrink-0">{item.name}</h3>
            <span className="mb-1 h-px flex-1 border-b border-dotted border-black/80" />
            <span className="shrink-0">{item.price}</span>
          </div>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="absolute left-1/2 top-8 z-20 w-full max-w-[1140px] -translate-x-1/2 px-6 md:top-[50px]">
      <nav className="grid grid-cols-2 items-start gap-x-6 gap-y-4 text-center sm:grid-cols-5">
        <NavLink active>Home</NavLink>
        <NavLink>About Us</NavLink>
        <a href="#" className="order-first col-span-2 flex justify-center sm:order-none sm:col-span-1">
          <Image
            src="/ostro/top-logo.png"
            alt="Ostro Italian"
            width={115}
            height={54}
            priority
            className="h-[44px] w-[94px] object-contain md:h-[54px] md:w-[115px]"
          />
        </a>
        <NavLink>Menu</NavLink>
        <NavLink>Contact Us</NavLink>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden md:min-h-[940px] lg:min-h-[1080px]">
      <Header />
      <Image
        src="/ostro/hero.png"
        alt="A plate of pasta with basil and Italian table accents"
        width={1370}
        height={913}
        priority
        className="absolute left-1/2 top-3 h-auto w-[calc(100%-24px)] max-w-[1370px] -translate-x-1/2 object-cover md:w-[calc(100%-142px)]"
      />
      <div className="absolute left-1/2 top-[430px] flex w-full -translate-x-1/2 flex-col items-center px-6 text-center md:top-[680px] lg:top-[748px]">
        <h1 className="ostro-script w-full max-w-[350px] text-center text-[52px] leading-[0.92] text-black sm:max-w-[781px] sm:text-[86px] lg:text-[110px]">
          <span className="block">Authentic Italian</span>
          <span className="block">Dining</span>
        </h1>
        <div className="mt-8">
          <ActionButton>Book Now</ActionButton>
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  return (
    <section className="mx-auto w-full max-w-[1140px] px-6 pb-20 md:pb-[120px]">
      <SectionHeading>Offers</SectionHeading>
      <div className="mt-[70px] grid gap-12 md:grid-cols-3 md:gap-[50px]">
        {offers.map((offer, index) => (
          <OfferCard key={`${offer.name}-${index}`} offer={offer} />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1140px] px-6">
      <SectionHeading>About</SectionHeading>
      <div className="mt-[70px] grid items-start gap-12 lg:grid-cols-[minmax(0,571px)_minmax(320px,482px)] lg:gap-[86px]">
        <div className="ostro-serif space-y-[38px] text-[20px] leading-[38px] tracking-[0.03em] text-black">
          <p>
            Ostro Italian is a vibrant restaurant and wine bar located in the
            heart of the Fremantle Fishing Boat Harbour in Western Australia. We
            specialize in traditional, wholesome Italian food, serving
            house-made pasta, wood-fired pizzas, and fresh seafood alongside
            stunning ocean views.
          </p>
          <p>
            With a carefully curated wine selection and a warm, welcoming
            atmosphere, Ostro Italian offers the perfect setting for casual
            dining, family gatherings, and special occasions. Combining
            authentic Italian flavours with a picturesque waterfront location,
            we create memorable dining experiences for both locals and visitors
            alike.
          </p>
        </div>
        <Image
          src="/ostro/about-chef.png"
          alt="Chef preparing fresh pasta"
          width={482}
          height={467}
          className="w-full rounded object-cover lg:h-[467px]"
        />
      </div>
    </section>
  );
}

function FoodMenuSection() {
  return (
    <section id="menu" className="mx-auto w-full max-w-[1140px] px-6">
      <SectionHeading align="center">Food Menu</SectionHeading>
      <div className="mt-14 grid items-start gap-14 lg:grid-cols-[377px_minmax(0,697px)] lg:gap-[99px]">
        <Image
          src="/ostro/menu-photo.png"
          alt="Spaghetti lifted from a black plate"
          width={377}
          height={754}
          className="mx-auto w-full max-w-[377px] object-contain lg:mx-0"
        />
        <div className="pt-4">
          <p className="ostro-serif mb-[58px] text-[20px] leading-[31px] tracking-[0.03em] text-black">
            Our carefully curated selection features a diverse range of Italian
            wines from renowned regions across the country.
          </p>
          <MenuList />
          <div className="mt-[70px] flex justify-center">
            <ActionButton>View More</ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegionalSection() {
  return (
    <section className="mx-auto w-full max-w-[1140px] px-6">
      <SectionHeading>Regional</SectionHeading>
      <div className="mt-[70px] grid items-start gap-12 lg:grid-cols-[minmax(0,690px)_273px] lg:gap-[177px]">
        <div>
          <p className="ostro-serif mb-[58px] text-[20px] leading-[31px] tracking-[0.03em] text-black">
            Our carefully curated selection features a diverse range of Italian
            wines from renowned regions across the country.
          </p>
          <MenuList />
          <div className="mt-[70px] flex justify-center">
            <ActionButton>View More</ActionButton>
          </div>
        </div>
        <Image
          src="/ostro/bottle-rendered.png"
          alt="Bottle of Italian red wine"
          width={273}
          height={703}
          className="mx-auto w-[210px] object-contain drop-shadow-[18px_-4px_8px_rgba(0,0,0,0.1)] md:w-[273px]"
        />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-[1140px] px-6">
      <SectionHeading>Testimonials</SectionHeading>
      <div className="ostro-serif mt-[50px] text-black">
        <p className="text-[60px] font-medium leading-none">&ldquo;</p>
        <blockquote className="max-w-[1140px] text-[26px] font-medium leading-normal md:text-[32px]">
          Our carefully curated selection features a diverse range of Italian
          wines from renowned regions across the country.
        </blockquote>
        <p className="mt-7 text-[20px] leading-[31px]">Nimesh Deepamal</p>
        <div className="mt-9 flex gap-[10px]" aria-hidden="true">
          <span className="size-3.5 rounded-full bg-[#f3b5b3]" />
          <span className="size-3.5 rounded-full bg-[#f3b5b3]" />
          <span className="size-3.5 rounded-full bg-[#cd0f16]" />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-[1140px] px-6">
      <SectionHeading>Faq</SectionHeading>
      <div className="mt-[70px] grid items-center gap-12 lg:grid-cols-[369px_minmax(0,579px)] lg:gap-[192px]">
        <Image
          src="/ostro/faq-chef.png"
          alt="Illustration of a chef thinking"
          width={369}
          height={511}
          className="mx-auto w-full max-w-[369px] object-contain lg:mx-0"
        />
        <div className="ostro-serif space-y-5 text-[20px] leading-[31px] text-black">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className={`rounded px-7 py-4 ${
                faq.open ? "bg-[#cec4b6]" : "bg-[#e2dbd1]"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <h3>{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className={`mt-2 size-2 shrink-0 border-r border-b border-black ${
                    faq.open ? "rotate-[225deg]" : "rotate-45"
                  }`}
                />
              </div>
              {faq.answer ? (
                <p className="mt-4 max-w-[485px] leading-[30px] text-[#6e6e6e]">
                  {faq.answer}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1f2020] text-white">
      <Image
        src="/ostro/footer-pattern.png"
        alt=""
        width={843}
        height={459}
        className="pointer-events-none absolute -bottom-48 -left-16 opacity-5"
      />
      <Image
        src="/ostro/footer-pattern.png"
        alt=""
        width={843}
        height={193}
        className="pointer-events-none absolute -bottom-10 right-[-158px] opacity-5"
      />
      <div className="relative mx-auto grid w-full max-w-[1140px] gap-12 px-6 py-20 md:grid-cols-[255px_1fr_1.55fr] md:py-[100px]">
        <div>
          <Image
            src="/ostro/footer-logo.png"
            alt="Ostro Italian"
            width={255}
            height={139}
            className="h-auto w-[220px] md:w-[255px]"
          />
        </div>
        <div className="ostro-serif">
          <h2 className="mb-9 text-[24px] font-medium uppercase leading-6">
            Quick Links
          </h2>
          <ul className="space-y-4 text-[20px] leading-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#faq">Contact</a>
            </li>
          </ul>
        </div>
        <div className="ostro-serif">
          <h2 className="mb-9 text-[24px] font-medium uppercase leading-6">
            Contact Us
          </h2>
          <address className="not-italic">
            <p className="text-[20px] leading-6">
              2/47 Mews Rd, Fremantle WA 6160, Australia
            </p>
            <p className="mt-4 text-[20px] leading-[31px]">
              eat@ostroitalian.com.au
            </p>
            <p className="mt-4 text-[20px] leading-[31px]">+61 8 9336 1504</p>
          </address>
        </div>
      </div>
      <div className="ostro-serif relative mx-auto flex w-full max-w-[1140px] flex-col gap-6 px-6 pb-16 text-[16px] leading-6 text-[#cccccc] md:flex-row md:items-center md:justify-between md:text-[20px]">
        <p>
          &copy; 2026 Ostro Italian. All rights reserved. Website developed by{" "}
          <a
            href="https://introvera.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Introvera
          </a>
          .
        </p>
        <div className="flex items-center gap-5">
          <Image src="/ostro/facebook.png" alt="Facebook" width={30} height={30} />
          <Image
            src="/ostro/instagram.png"
            alt="Instagram"
            width={20}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3eee7]">
      <Hero />
      <OffersSection />
      <OrnamentDivider className="pb-[110px]" />
      <AboutSection />
      <OrnamentDivider className="py-[110px]" />
      <FoodMenuSection />
      <OrnamentDivider className="py-[110px]" />
      <RegionalSection />
      <OrnamentDivider className="py-[110px]" />
      <TestimonialsSection />
      <OrnamentDivider className="py-[110px]" />
      <FaqSection />
      <div className="h-[120px]" />
      <Footer />
    </main>
  );
}
