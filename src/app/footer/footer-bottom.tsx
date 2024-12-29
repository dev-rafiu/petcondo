import Image from 'next/image';
import Link from 'next/link';

function FooterBottom() {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-between gap-6 border-t-[1px] border-[#CECECE4D] pb-0 pt-6 lg:flex-row">
        {/* copyright info */}
        <p className="text-[#E0E0E0]">
          &copy; {new Date().getFullYear()} PetCondo. All rights reserved.
        </p>

        {/* socials */}
        <ul className="flex items-center gap-6">
          <li className="">
            <Link href="">
              <Image
                src="/images/socials/twitter.png"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </li>

          <li className="">
            <Link href="">
              <Image
                src="/images/socials/linkedin.png"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </li>

          <li className="">
            <Link href="">
              <Image
                src="/images/socials/fb.png"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </li>

          <li className="">
            <Link href="">
              <Image
                src="/images/socials/github.png"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </li>

          <li className="">
            <Link href="">
              <Image
                src="/images/socials/globe.png"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </li>

          <li className="">
            <Link href="">
              <Image
                src="/images/socials/peace.png"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterBottom;
