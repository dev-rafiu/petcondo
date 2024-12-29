import Image from 'next/image';
import sectionImage from '/public/images/hero/hero-img.png';

import { plusJakartaSans } from '../font';

function Hero() {
  return (
    <section className="bg-black py-8 lg:py-0">
      <div
        className={`${plusJakartaSans.className} container grid min-h-[30rem] items-center justify-between gap-8 lg:grid-cols-2 lg:gap-5 xl:min-h-[45.875rem]`}
      >
        {/* section content */}
        <div className="space-y-4 text-white">
          <h1 className="max-w-lg font-semibold leading-[3rem] tracking-normal lg:leading-[4rem]">
            Everything You Need To Care For Your Pet, All In One App
          </h1>

          <p className="max-w-md leading-7">
            Welcome to PetCondo, the ultimate destination for pet lovers! Get
            all your pet's needs, from grooming to medical records, to
            interacting with fellow pet lovers in one place
          </p>

          {/* download links */}
          <div className="flex items-center gap-4">
            <a href="#" className="">
              <Image
                src="/images/hero/playstore.jpg"
                className="rounded-md"
                alt="Playstore link"
                width={120}
                height={120}
              />
            </a>

            <a href="#" className="">
              <Image
                src="/images/hero/appstore.jpg"
                className="rounded-md"
                alt="Appstore link"
                width={120}
                height={100}
              />
            </a>
          </div>
        </div>

        {/* section image */}
        <div className="relative h-[22rem] max-w-lg sm:h-[33.5rem] lg:w-full lg:max-w-none">
          <Image
            src={sectionImage}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="lg:object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
