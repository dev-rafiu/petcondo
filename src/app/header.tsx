'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '@/config/nav';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Icons } from '@/components/common/icons';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <div className="container flex items-center justify-between py-[1rem]">
        {/*logo */}
        <Link href={'/'} className="relative block h-[2rem] w-[10rem]">
          <Image
            src="/header-logo.png"
            alt="Logo"
            fill
            sizes="100%"
            className=""
          />
        </Link>

        {/* nav links */}
        <ul className="flex items-center gap-x-10 max-md:hidden">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  'text-base font-normal text-[#737373]',
                  pathname == route.href && 'font-bold text-black',
                )}
              >
                {route.title}
              </Link>
            </li>
          ))}

          <div className="flex items-center gap-x-[1.2rem]">
            <li>
              <Link
                href="#contact"
                className={cn(
                  'text-base font-normal text-[#737373]',
                  pathname == '/contact' && 'font-bold',
                )}
              >
                Contact
              </Link>
            </li>

            <Button className="h-[2.4375rem] w-32" asChild>
              <a href="https://app.shaqapp.com/">Get a Quote</a>
            </Button>
          </div>
        </ul>

        {/* mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="size-9 rounded-full bg-[#ffffff] text-[#000000] md:hidden">
              <Icons.menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetOverlay className="bg-white md:hidden" />

          <SheetContent side={'left'} className="bg-white p-0 pb-6 md:hidden">
            <SheetHeader className="sr-only bg-white">
              <SheetTitle>Nav menu</SheetTitle>
              <SheetDescription>Mobile navigation menu</SheetDescription>
            </SheetHeader>

            <div className="space-y-12">
              {/* logo and close button */}
              <div className="bg-white shadow-[0_2px_10px_rgb(0_0_0_/_.1)]">
                <div className="container flex items-center justify-between py-[1.375rem]">
                  {/* logo */}
                  <SheetClose asChild>
                    {/* <Button asChild className="bg-white"> */}
                    <Link
                      href={'/'}
                      className="relative block h-[2rem] w-[10rem]"
                    >
                      <Image
                        src="/header-logo.png"
                        alt="Logo"
                        fill
                        sizes="100%"
                      />
                    </Link>
                    {/* </Button> */}
                  </SheetClose>

                  {/* close button */}
                  <SheetClose asChild>
                    <Button type="button" className="size-9 rounded-full">
                      <Icons.close className="size-5" />
                    </Button>
                  </SheetClose>
                </div>
              </div>

              {/* nav links */}
              <ul className="container flex flex-col gap-y-6">
                {routes.map((route) => (
                  <li key={route.href}>
                    <Link
                      href={route.href}
                      className={cn(
                        'text-base font-normal text-[#737373]',
                        pathname == route.href && 'font-bold text-black',
                      )}
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}

                <div className="flex flex-col gap-y-[1.2rem]">
                  <li>
                    <Link
                      href="#contact"
                      className={cn(
                        'text-base font-normal text-[#737373]',
                        pathname == '/contact' && 'font-bold text-black',
                      )}
                    >
                      Contact
                    </Link>
                  </li>

                  <Button className="h-[2.4375rem] w-32" asChild>
                    <a href="https://app.shaqapp.com/">Get a Quote</a>
                  </Button>
                </div>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
