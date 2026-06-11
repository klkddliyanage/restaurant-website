import Image from "next/image";
import { ActionButton, PageHero, SiteFooter } from "../components/ostro-shared";

const fields = [
  { label: "Name", placeholder: "Your name here", type: "text" },
  { label: "Email", placeholder: "Your email here", type: "email" },
  { label: "Message", placeholder: "Type your message here", type: "text" },
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f5f0]">
      <PageHero
        title="Contact Us"
        image="/ostro/about-hero.jpg"
        active="contact"
        objectPosition="center 58%"
      />

      <section className="mx-auto w-[calc(100vw-48px)] max-w-[1170px] py-20 md:w-full md:px-6 md:py-[100px]">
        <h2 className="ostro-serif text-[42px] font-medium leading-tight tracking-[0.04em] text-black md:text-[50px]">
          Get In Touch
        </h2>

        <div className="mt-20 grid min-w-0 gap-16 lg:grid-cols-[545px_minmax(0,495px)] lg:gap-[105px]">
          <form className="min-w-0 max-w-[330px] space-y-10 sm:max-w-none">
            {fields.map((field) => (
              <label key={field.label} className="block min-w-0">
                <span className="ostro-serif block text-[24px] leading-[31px] tracking-[0.04em] text-black">
                  {field.label}
                </span>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="ostro-serif mt-4 h-10 w-full min-w-0 border-0 border-b border-black/70 bg-transparent px-0 text-[20px] leading-[31px] tracking-[0.04em] text-black outline-none placeholder:text-black/40 focus:border-[#cd0f16]"
                />
              </label>
            ))}
            <ActionButton className="w-full">Send Message</ActionButton>
          </form>

          <div className="min-w-0 max-w-[330px] sm:max-w-none">
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="min-w-0 break-words">
                <PinIcon />
                <h3 className="ostro-serif text-[20px] font-medium leading-6 tracking-[0.06em] text-black">
                  Our Address
                </h3>
                <address className="ostro-serif mt-5 not-italic text-[20px] leading-6 tracking-[0.06em] text-black">
                  <p>2/47 Mews Rd</p>
                  <p>Fremantle WA 6160</p>
                  <p>Australia</p>
                </address>
              </div>
              <div className="min-w-0 break-words">
                <MessageIcon />
                <h3 className="ostro-serif text-[20px] font-medium leading-6 tracking-[0.06em] text-black">
                  Our Contact Info
                </h3>
                <div className="ostro-serif mt-5 space-y-2 text-[20px] leading-6 tracking-[0.06em] text-black">
                  <p>+61 8 9336 1504</p>
                  <p>eat@ostroitalian.com.au</p>
                </div>
              </div>
            </div>

            <div className="relative mt-14 h-[274px] overflow-hidden rounded border border-[#bcb5ac]">
              <Image
                src="/ostro/contact-map.jpg"
                alt="Map showing the Ostro Italian area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mb-5 size-[26px] text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mb-5 size-[26px] text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 6.5h16v10H8.4L4 20V6.5Z" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </svg>
  );
}
