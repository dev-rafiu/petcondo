import Image from 'next/image';
import sectionImage from '/public/images/how-it-works/image.jpg';

import { plusJakartaSans } from '../font';

function HowItWorks() {
  return (
    <section
      className={`${plusJakartaSans.className} container flex flex-col gap-6 py-6 lg:flex-row-reverse`}
    >
      {/* app image */}
      <div className="relative h-[25rem] w-full max-w-lg sm:h-[30rem] lg:h-[38rem]">
        <Image
          src={sectionImage}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="rounded-md object-cover"
        />
      </div>

      {/* text content */}
      <div className="space-y-4 self-center">
        <header>
          <h2 className="max-w-md leading-8">
            Streamlined Pet Care: How It Works
          </h2>
          <p>
            Discover how easy it is to manage your pet&apos;s needs with our
            app.
          </p>
        </header>

        <ul className="grid gap-4 lg:grid-cols-2">
          <li className="space-y-2 rounded-md border border-[#E0E0E0] px-6 py-12">
            <Image
              src="/images/how-it-works/paws.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="font-bold">Explore App</p>
            <p className="text-sm leading-5 text-[#737373]">
              Sign up and set up your profile in minutes. Explore our app
            </p>
          </li>

          <li className="space-y-2 rounded-md border border-[#E0E0E0] px-6 py-12">
            <Image
              src="/images/how-it-works/date.jpg"
              alt=""
              width={30}
              height={30}
              className=""
            />
            <p className="font-bold">Schedule Appointments</p>
            <p className="text-sm leading-5 text-[#737373]">
              Book vet visits and grooming sessions effortlessly
            </p>
          </li>

          <li className="space-y-2 rounded-md border border-[#E0E0E0] px-6 py-12">
            <Image
              src="/images/how-it-works/cart.jpg"
              alt=""
              width={30}
              height={30}
              className=""
            />
            <p className="font-bold">Shop for Quality Products</p>
            <p className="text-sm leading-5 text-[#737373]">
              Find nutritious food, toys, and accessories easily
            </p>
          </li>

          <li className="space-y-2 rounded-md border border-[#E0E0E0] px-6 py-12">
            <Image
              src="/images/how-it-works/chat.jpg"
              alt=""
              width={30}
              height={30}
              className=""
            />
            <p className="font-bold">Connect with Community</p>
            <p className="text-sm leading-5 text-[#737373]">
              Share tips, advice, and experiences with other pet owners
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HowItWorks;
