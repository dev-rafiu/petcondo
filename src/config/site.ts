const DEPLOYED_URL = process.env.NEXT_PUBLIC_URL;

export const siteConfig = {
  name: 'PetCondo',
  description: 'Everything you need to care for your pet, all in one app',
  URL: DEPLOYED_URL
    ? `https://${DEPLOYED_URL}`
    : `http://localhost:${process.env.PORT || 3000}`,
  author: {
    name: 'Rafiw Idrissu',
  },
} as const;
