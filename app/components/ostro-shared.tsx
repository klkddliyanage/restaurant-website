import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type NavKey = "home" | "about" | "menu" | "contact";

const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about-us" },
  { key: "menu", label: "Menu", href: "/menu" },
  { key: "contact", label: "Contact Us", href: "/contact-us" },
];

export const menuItems = [
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

export function SiteHeader({
  active,
  textColor = "text-white",
}: {
  active: NavKey;
  textColor?: string;
}) {
  return (
    <header className="absolute left-1/2 top-8 z-20 w-full max-w-[1140px] -translate-x-1/2 px-6 md:top-[52px]">
      <nav className="grid grid-cols-2 items-start gap-x-6 gap-y-4 text-center sm:grid-cols-5">
        <NavItem item={navItems[0]} active={active === "home"} textColor={textColor} />
        <NavItem item={navItems[1]} active={active === "about"} textColor={textColor} />
        <Link
          href="/"
          className="order-first col-span-2 flex justify-center sm:order-none sm:col-span-1"
          aria-label="Ostro Italian home"
        >
          <Image
            src={textColor.includes("white") ? "/ostro/footer-logo.png" : "/ostro/top-logo.png"}
            alt="Ostro Italian"
            width={115}
            height={54}
            priority
            className="h-[44px] w-[94px] object-contain md:h-[54px] md:w-[115px]"
          />
        </Link>
        <NavItem item={navItems[2]} active={active === "menu"} textColor={textColor} />
        <NavItem item={navItems[3]} active={active === "contact"} textColor={textColor} />
      </nav>
    </header>
  );
}

function NavItem({
  item,
  active,
  textColor,
}: {
  item: (typeof navItems)[number];
  active: boolean;
  textColor: string;
}) {
  return (
    <Link
      href={item.href}
      className={`ostro-nav relative inline-flex h-9 items-center justify-center text-[12px] leading-6 md:text-[20px] ${textColor}`}
    >
      {item.label}
      {active ? (
        <span className="absolute bottom-0 left-1/2 h-0.5 w-[46px] -translate-x-1/2 rounded-full bg-[#cd0f16] md:w-[92px]" />
      ) : null}
    </Link>
  );
}

export function PageHero({
  title,
  image,
  active,
  objectPosition = "center",
}: {
  title: string;
  image: string;
  active: NavKey;
  objectPosition?: string;
}) {
  return (
    <section className="relative h-[390px] overflow-hidden md:h-[574px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      <SiteHeader active={active} />
      <div className="absolute inset-x-0 top-[215px] flex flex-col items-center px-6 text-center md:top-[292px]">
        <h1 className="ostro-display text-[92px] leading-[0.7] tracking-[-0.02em] text-white md:text-[200px]">
          {title}
        </h1>
        <Image
          src="/ostro/ornament.png"
          alt=""
          width={173}
          height={21}
          className="mt-7 h-[21px] w-[173px] object-cover"
        />
      </div>
    </section>
  );
}

export function ActionButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`ostro-nav inline-flex h-[57px] max-w-full items-center justify-center gap-4 rounded bg-[#cd0f16] px-8 text-[18px] leading-6 text-white transition-colors hover:bg-[#a90d13] sm:px-10 ${className}`}
    >
      {children}
      <span aria-hidden="true" className="text-[18px] leading-none">
        &rarr;
      </span>
    </button>
  );
}

export function MenuList({
  repeat = 1,
  large = false,
}: {
  repeat?: number;
  large?: boolean;
}) {
  const rows = Array.from({ length: repeat }, (_, index) =>
    menuItems.map((item) => ({ ...item, key: `${item.name}-${index}` })),
  ).flat();

  return (
    <div
      className={`ostro-serif min-w-0 text-black ${
        large
          ? "space-y-6 text-[18px] leading-7 md:text-[28px] md:leading-8"
          : "space-y-[18px] text-[20px] leading-[31px]"
      }`}
    >
      {rows.map((item) => (
        <article key={item.key} className="min-w-0">
          <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1 font-medium">
            <h3 className="shrink-0">{item.name}</h3>
            <span className="mb-1 hidden h-px min-w-[48px] flex-1 border-b border-dotted border-black/80 sm:block" />
            <span className="shrink-0">{item.price}</span>
          </div>
          <p className="min-w-0 break-words">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 md:gap-5">
      <span className="h-1 w-16 shrink-0 bg-[#cd0f16] md:w-[137px]" />
      <h2 className="ostro-serif text-[20px] uppercase leading-[31px] tracking-[0.28em] text-black md:text-[28px]">
        {children}
      </h2>
      <span className="h-1 w-16 shrink-0 bg-[#147a38] md:w-[137px]" />
    </div>
  );
}

export function SiteFooter() {
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
      <div className="relative mx-auto grid w-[calc(100vw-48px)] max-w-[1140px] gap-12 py-20 md:w-full md:grid-cols-[255px_1fr_1.55fr] md:px-6 md:py-[100px]">
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
            {navItems.map((item) => (
              <li key={item.key}>
                <Link href={item.href}>{item.key === "about" ? "About" : item.label.replace(" Us", "")}</Link>
              </li>
            ))}
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
      <div className="ostro-serif relative mx-auto flex w-[calc(100vw-48px)] max-w-[1140px] flex-col gap-6 pb-16 text-[16px] leading-6 text-[#cccccc] md:w-full md:flex-row md:items-center md:justify-between md:px-6 md:text-[20px]">
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
        <SocialLinks />
      </div>
    </footer>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      <a href="#" aria-label="Facebook" className="text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-[22px]"
          fill="currentColor"
        >
          <path d="M14.2 8.4V6.9c0-.7.5-.9 1-.9h1.5V3.4l-2.1-.1c-2.3 0-3.6 1.4-3.6 3.9v1.2H8.7v2.9H11V21h3.2v-9.7h2.4l.4-2.9h-2.8Z" />
        </svg>
      </a>
      <a href="#" aria-label="Instagram" className="text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-[20px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}
