import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components/common/icons';

import { plusJakartaSans } from '../font';

function FeaturedProducts() {
  return (
    <section
      className={`${plusJakartaSans.className} container space-y-4 py-9`}
    >
      <header className="flex items-center justify-between text-black">
        <h2>Featured Products</h2>
        <Link href="" className="lg:flex">
          View More <span className="hidden lg:block">{'>>>'}</span>
        </Link>
      </header>

      <ul className="grid gap-4 lg:grid-cols-3">
        <li className="space-y-2 overflow-hidden rounded-md bg-[#F5F5F580]">
          {/* image */}
          <div className="relative h-[15rem] w-full">
            <Image
              src="/images/featured/img-3.jpg"
              alt="xyz"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* desc */}
          <div className="px-4 py-6">
            <div className="flex items-center justify-between bg-[#F5F5F580]">
              <p className="text-lg font-bold leading-5">Premium Rabbit Food</p>
              <span className="grid place-content-center rounded-full border border-[#E0E0E0] p-1 text-sm">
                <Icons.arrowCircle className="size-4" />
              </span>
            </div>

            <p>14 products</p>
          </div>
        </li>

        <li className="space-y-2 overflow-hidden rounded-md bg-[#F5F5F580]">
          {/* image */}
          <div className="relative h-[15rem] w-full">
            <Image
              src="/images/featured/img-2.jpg"
              alt="xyz"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* desc */}
          <div className="px-4 py-6">
            <div className="flex items-center justify-between bg-[#F5F5F580]">
              <p className="text-lg font-bold leading-5">Premium Dog Food</p>
              <span className="grid place-content-center rounded-full border border-[#E0E0E0] p-1 text-sm">
                <Icons.arrowCircle className="size-4" />
              </span>
            </div>
            <p>20 products</p>
          </div>
        </li>

        <li className="space-y-2 overflow-hidden rounded-md bg-[#F5F5F580]">
          {/* image */}
          <div className="relative h-[15rem] w-full">
            <Image
              src="/images/featured/img-1.jpg"
              alt="xyz"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* desc */}
          <div className="px-4 py-6">
            <div className="flex items-center justify-between bg-[#F5F5F580]">
              <p className="text-lg font-bold leading-5">Pet Accessories</p>
              <span className="grid place-content-center rounded-full border border-[#E0E0E0] p-1 text-sm">
                <Icons.arrowCircle className="size-4" />
              </span>
            </div>
            <p className="leading-5">45 products</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FeaturedProducts;
