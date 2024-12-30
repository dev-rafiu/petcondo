import Image from 'next/image';
import sectionImage from '/public/images/download-app/app.jpg';

import { plusJakartaSans } from '../font';

function DownloadApp() {
  return (
    <section
      className={`${plusJakartaSans.className} container flex flex-col-reverse py-8 sm:flex-row`}
    >
      {/* app image */}
      <div className="relative h-[30rem] w-full max-w-xl sm:h-[30rem] lg:h-[45rem]">
        <Image
          src={sectionImage}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
        />
      </div>

      {/* text content */}
      <div className="space-y-4 lg:self-center">
        <h2>Download Our App</h2>

        {/* process */}
        <ul className="flex flex-col gap-2">
          <li className="space-y-2">
            <p className="flex items-center gap-2 font-bold">
              <Image
                src="/images/download-app/download.png"
                alt=""
                width={30}
                height={30}
              />
              Download the App
            </p>

            <p className="max-w-lg text-sm leading-5 text-black/50">
              Tap the &quot;Download&quot; or &quot;Install&quot; button. Wait
              for the app to download and install on your device.
            </p>
          </li>

          <li className="space-y-2">
            <p className="flex items-center gap-2 font-bold">
              <Image
                src="/images/download-app/account.png"
                alt=""
                width={30}
                height={30}
              />
              Create an Account
            </p>

            <p className="max-w-lg text-sm leading-5 text-black/50">
              Follow the prompts to sign up and create your profile. Personalize
              your account with your pet&apos;s information.
            </p>
          </li>

          <li className="space-y-2">
            <p className="flex items-center gap-2 font-bold">
              <Image
                src="/images/download-app/features.png"
                alt=""
                width={30}
                height={30}
              />
              Explore Features
            </p>

            <p className="max-w-lg text-sm leading-5 text-black/50">
              Start scheduling appointments, tracking your pet&apos;s health,
              connecting with the community, and more.
            </p>
          </li>
        </ul>

        {/* download links */}
        <div className="flex items-center gap-4">
          <a href="#" className="bg-black">
            <Image
              src="/playstore.png"
              className="rounded-md"
              alt="Playstore link"
              width={120}
              height={120}
            />
          </a>

          <a href="#" className="overflow-hidden bg-black">
            <Image
              src="/appstore.png"
              className="rounded-md"
              alt="Appstore link"
              width={120}
              height={100}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
