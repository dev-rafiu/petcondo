import Image from 'next/image';
import gridImageOne from '/public/images/welfare/img-1.jpg';
import gridImageTwo from '/public/images/welfare/img-2.jpg';
import gridImageThree from '/public/images/welfare/img-3.jpg';
import gridImageFour from '/public/images/welfare/img-4.jpg';
import { MdArrowOutward } from 'react-icons/md';

import { plusJakartaSans } from '../font';

function Welfare() {
  return (
    <section
      className={`${plusJakartaSans.className} container bg-white py-16`}
    >
      <div className="container grid gap-7 lg:grid-cols-2">
        {/* image grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[12.75rem] w-full">
            <Image
              src={gridImageOne}
              alt=""
              fill
              sizes="100vw"
              placeholder="blur"
              className="rounded-md object-cover"
            />
          </div>

          <div className="relative h-[12.75rem] w-full">
            <Image
              src={gridImageTwo}
              alt=""
              fill
              sizes="100vw"
              placeholder="blur"
              className="rounded-md object-cover"
            />
          </div>

          <div className="relative h-[12.75rem] w-full">
            <Image
              src={gridImageThree}
              alt=""
              fill
              sizes="100vw"
              placeholder="blur"
              className="rounded-md object-cover"
            />
          </div>

          <div className="relative h-[12.75rem] w-full">
            <Image
              src={gridImageFour}
              alt=""
              fill
              sizes="100vw"
              placeholder="blur"
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* text content */}
        <div className="space-y-4 lg:self-center">
          <h2 className="max-w-xs capitalize leading-10">
            Pet Welfare Through Quality and Sustainability
          </h2>

          <p className="leading-6 text-[#737373]">
            Driven by our dedication to animal welfare, we meticulously
            hand-select each product and service for quality and sustainability.
            From nutritious food and expert grooming to comprehensive healthcare
            and community connections, every offering is curated to meet the
            unique needs of our beloved furry friends.
          </p>

          <a
            href="#"
            className="flex h-[2.8rem] w-[9rem] items-center justify-center gap-4 rounded-md bg-black text-white"
          >
            <span>Learn more</span>
            <MdArrowOutward />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Welfare;
