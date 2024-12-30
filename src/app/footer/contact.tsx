import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function ContactForm() {
  return (
    <div className="border-b-[1px] border-[#CECECE4D] pb-6">
      <div className="container space-y-[19px]">
        <h2 className="flex items-center gap-[15px] text-white">
          <Image src="/paws.png" alt="" width={30} height={30} />
          Get In Touch
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <form className="space-y-4 rounded-md bg-white p-6">
            <div className="">
              <Label htmlFor="email">First name</Label>
              <Input placeholder="first name" />
            </div>

            <div className="">
              <Label htmlFor="email">Last name</Label>
              <Input placeholder="last name" />
            </div>

            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="you@company.com" />
            </div>

            <div className="">
              <Label htmlFor="email">Message</Label>
              <Textarea className="resize-none" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-black/50">
                You agree to our friendly
                <Link href="" className="text-black underline">
                  privacy policy
                </Link>
                .
              </Label>
            </div>

            <Button className="w-full p-6">Send Message</Button>
          </form>

          <ul className="grid gap-8 self-center text-white lg:grid-cols-2">
            <li className="space-y-2">
              <Image
                src="/images/contact/mail.png"
                alt=""
                width={27}
                height={27}
              />
              <h4>Email</h4>
              <p className="leading-5 text-[#CECECE]">
                Our friendly team is here to help.
              </p>
              <h5>hello@petcondo.com</h5>
            </li>

            <li className="space-y-2">
              <Image
                src="/images/contact/chat.png"
                alt=""
                width={27}
                height={27}
              />
              <h4>Live Chat</h4>
              <p className="leading-5 text-[#CECECE]">
                Our friendly team is here to help.
              </p>
              <h5>Start new chat</h5>
            </li>

            <li className="space-y-2">
              <Image
                src="/images/contact/location.png"
                alt=""
                width={27}
                height={27}
              />
              <h4>Office</h4>
              <p className="leading-5 text-[#CECECE]">
                Come say hello at our office HQ.
              </p>
              <h5>191 Thornridge Cir. Shiloh, Hawaii </h5>
            </li>

            <li className="space-y-2">
              <Image
                src="/images/contact/phone.png"
                alt=""
                width={27}
                height={27}
              />
              <h4>Phone</h4>
              <p className="leading-5 text-[#CECECE]">
                Mon-Fri from 8am to 5pm.
              </p>
              <h5>(480) 555-0103</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
