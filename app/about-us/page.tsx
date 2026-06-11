import Image from "next/image";
import { PageHero, SiteFooter } from "../components/ostro-shared";

const stats = [
  { value: "2M+", label: "Happy Customers" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "20+", label: "Our Branches" },
  { value: "100+", label: "Total Employees" },
];

const gallery = [
  "/ostro/about-gallery-1.jpg",
  "/ostro/about-gallery-2.jpg",
  "/ostro/about-gallery-5.jpg",
  "/ostro/about-gallery-7.jpg",
  "/ostro/about-gallery-4.jpg",
  "/ostro/about-gallery-6.jpg",
  "/ostro/about-gallery-3.jpg",
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3eee7]">
      <PageHero
        title="About Us"
        image="/ostro/about-hero.jpg"
        active="about"
        objectPosition="center 54%"
      />

      <section className="mx-auto w-[calc(100vw-48px)] max-w-[1170px] py-20 md:w-full md:px-6 md:py-[100px]">
        <h2 className="ostro-serif text-[42px] font-medium leading-tight tracking-[0.04em] text-black md:text-[50px]">
          Our Story
        </h2>

        <div className="relative mt-10 h-[260px] overflow-hidden rounded md:h-[320px]">
          <Image
            src="/ostro/about-hero.jpg"
            alt="Ostro Italian waterfront at sunset"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 45%" }}
          />
        </div>

        <div className="ostro-serif mt-12 min-w-0 text-black">
          <p className="text-[60px] font-medium leading-none">&ldquo;</p>
          <p className="w-full max-w-[330px] break-words text-[22px] font-medium leading-normal sm:max-w-none md:text-[32px]">
            Our carefully curated selection features a diverse range of Italian
            wines from renowned regions across the country.
          </p>
        </div>

        <p className="ostro-serif mt-10 w-full max-w-[330px] break-words text-[20px] leading-[30px] tracking-[0.03em] text-black sm:max-w-none">
          It is a long established fact that a reader will be distracted layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using English. Many desktop
          publishing packages and web page editors now use.
        </p>

        <div className="mt-20 grid min-w-0 gap-12 lg:grid-cols-[499px_minmax(0,606px)] lg:gap-[65px]">
          <div className="relative h-[374px] overflow-hidden rounded">
            <Image
              src="/ostro/about-hero.jpg"
              alt="Ostro Italian terrace view"
              fill
              className="object-cover"
              style={{ objectPosition: "center 45%" }}
            />
          </div>
          <div className="ostro-serif min-w-0 max-w-[330px] space-y-[30px] break-words text-[20px] leading-[30px] tracking-[0.03em] text-black sm:max-w-none">
            <p>
              It is a long established fact that a reader will be distracted
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              English. Many desktop publishing packages and web page editors now
              use.
            </p>
            <p>
              Lorem Ipsum as their default model text, and a search for
              &apos;lorem ipsum&apos; will uncover many web packages and web
              page editors search for &apos;lorem ipsum&apos; will uncover many
              web sites still in humour and the like.
            </p>
            <p>
              It is a long established fact that a reader will be distracted
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[calc(100vw-48px)] max-w-[1240px] pb-20 text-center md:w-full md:px-6 md:pb-[100px]">
        <h2 className="ostro-serif text-[34px] font-medium leading-[60px] text-black md:text-[44px]">
          We believe in making quality food
        </h2>
        <div className="mt-[50px] grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="ostro-serif text-black">
              <p className="text-[50px] font-medium leading-[66px] md:text-[56px]">
                {stat.value}
              </p>
              <p className="text-[20px] leading-[30px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[calc(100vw-48px)] max-w-[1206px] pb-[102px] md:w-full md:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-[139px_139px_139px_263px_139px_138px_139px] lg:gap-[15px]">
          {gallery.map((src, index) => (
            <div
              key={src}
              className={`relative h-[260px] overflow-hidden ${
                index === 3 ? "sm:col-span-2 lg:col-span-1 lg:h-[397px]" : "lg:h-[395px]"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 263px, 50vw"
              />
              {index === 3 ? null : (
                <div className="absolute inset-0 bg-black/45" />
              )}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
