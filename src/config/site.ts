const DEPLOYED_URL = process.env.NEXT_PUBLIC_URL;

export const siteConfig = {
  name: 'Insured By STK',
  description:
    'Protect what matters most with Insured By STK. From comprehensive car insurance and flexible car rentals to speeding ticket assistance and temporary cover, we’ve got you covered. Get affordable, reliable solutions tailored to your needs.',
  URL: DEPLOYED_URL
    ? `https://${DEPLOYED_URL}`
    : `http://localhost:${process.env.PORT || 3000}`,
  author: {
    name: 'Rafiw Idrissu',
  },
} as const;
