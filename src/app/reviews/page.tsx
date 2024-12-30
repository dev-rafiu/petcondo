import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/common/icons';

import { plusJakartaSans } from '../font';

function Reviews() {
  return (
    <section className={`${plusJakartaSans.className} bg-black py-8`}>
      <div className="container space-y-6">
        <header className="flex items-center justify-between text-white">
          <h2 className="max-w-xs leading-9">
            Honest Reviews From Our Customers
          </h2>

          <div className="flex items-center gap-2">
            <Button className="bg-[#FFFFFF4D]">
              <span className="rotate-180 transform">
                <Icons.arrowCircle />
              </span>
            </Button>

            <Button className="bg-white text-black">
              <Icons.arrowCircle />
            </Button>
          </div>
        </header>

        <ul className="grid gap-4 lg:grid-cols-3">
          <li className="space-y-2 rounded-md bg-[#FFFFFF] p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/reviews/sarah.jpg"
                alt=""
                width={40}
                height={40}
              />
              <p className="font-bold text-black">Sarah Miriam</p>
            </div>

            <p className="text-sm leading-5">
              The app&apos;s interface is user-friendly, and the community
              feature is a great way to connect with other pet lovers. Highly
              recommend!
            </p>
          </li>

          <li className="space-y-2 rounded-md bg-[#FFFFFF] p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/reviews/jason.jpg"
                alt=""
                width={40}
                height={40}
              />
              <p className="font-bold text-black">Jason Clifford</p>
            </div>

            <p className="text-sm leading-5">
              From booking vet appointments to tracking my cat’s daily
              activities, PetCondo has everything I need in one place.{' '}
            </p>
          </li>

          <li className="space-y-2 rounded-md bg-[#FFFFFF] p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/reviews/david.jpg"
                alt=""
                width={40}
                height={40}
              />
              <p className="font-bold text-black">David Harlord</p>
            </div>

            <p className="text-sm leading-5">
              This app is fantastic! The product recommendations are spot-on,
              and I appreciate the emphasis on quality and sustainability.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Reviews;
