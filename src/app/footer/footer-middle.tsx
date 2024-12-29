import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    id: 1,
    category: 'Shop',
    links: [
      { id: 1, text: 'Pet Accessories' },
      { id: 2, text: 'Nutrition' },
      { id: 3, text: 'Pet Care' },
      { id: 4, text: 'Pet Food' },
      { id: 5, text: 'Pricing' },
    ],
  },

  {
    id: 2,
    category: 'Company',
    links: [
      { id: 1, text: 'About Us' },
      { id: 2, text: 'Careers' },
      { id: 3, text: 'Press' },
      { id: 4, text: 'News' },
      { id: 5, text: 'Contact' },
    ],
  },

  {
    id: 3,
    category: 'Services',
    links: [
      {
        id: 1,
        text: 'Grooming',
      },
      {
        id: 2,
        text: 'Veterinary',
      },
      {
        id: 3,
        text: 'Community',
      },
      {
        id: 4,
        text: 'Pet Shop',
      },
      {
        id: 5,
        text: 'Support',
      },
    ],
  },

  {
    id: 4,
    category: 'Social',
    links: [
      {
        id: 1,
        text: 'Twitter',
      },
      {
        id: 2,
        text: 'LinkedIn',
      },
      {
        id: 3,
        text: 'Facebook',
      },
      {
        id: 4,
        text: 'AngelList',
      },
      {
        id: 5,
        text: 'Dribbble',
      },
    ],
  },

  {
    id: 5,
    category: 'Legal',
    links: [
      {
        id: 1,
        text: 'Terms',
      },
      {
        id: 2,
        text: 'Privacy',
      },
      {
        id: 3,
        text: 'Cookies',
      },
      {
        id: 4,
        text: 'Licenses',
      },
      {
        id: 5,
        text: 'Settings',
      },
    ],
  },
];

function FooterMiddle() {
  return (
    <div className="container grid gap-4 lg:grid-cols-[2fr,_1fr,_1fr,_1fr,_1fr,_1fr]">
      <div className="space-y-2">
        <Link href={'/'} className="relative block h-[2rem] w-[9rem]">
          <Image src="/footer-logo.png" alt="Logo" fill sizes="100%" />
        </Link>

        <p className="text-[#D6D6D6]">Care Simplified, Love Amplified</p>
      </div>

      {links.map((item) => {
        const { id, category, links } = item;
        return (
          <div key={id} className="space-y-4">
            <h4 className="text-white">{category}</h4>

            <ul className="grid gap-3 text-sm text-[#D6D6D6]">
              {links.map((link) => {
                const { id, text } = link;
                return (
                  <li key={id}>
                    <Link
                      href="#"
                      className="flex w-max items-center gap-3 capitalize"
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default FooterMiddle;
