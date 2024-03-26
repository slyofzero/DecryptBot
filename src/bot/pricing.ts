type PricingTierNames =
  | "basic"
  | "standard"
  | "premium"
  | "advanced"
  | "ultra"
  | "enterprise";

export const textJoiner =
  "\n\n---------------------------------------------------------------------------------------------------\n\n";

interface PricingData {
  name: PricingTierNames;
  ram: number;
  storage: string;
  cost: number;
  uptime: number;
  support: string;
}

const pricing: PricingData[] = [
  {
    name: "basic",
    ram: 2,
    storage: "50 GB",
    cost: 50,
    uptime: 99,
    support: "Email",
  },
  {
    name: "standard",
    ram: 4,
    storage: "100 GB",
    cost: 100,
    uptime: 99.5,
    support: "Email and Phone",
  },
  {
    name: "premium",
    ram: 8,
    storage: "200 GB",
    cost: 200,
    uptime: 99.9,
    support: "24/7 Email, Phone, and Live Chat",
  },
  {
    name: "advanced",
    ram: 16,
    storage: "500 GB",
    cost: 400,
    uptime: 99.9,
    support: "24/7 Email, Phone, Live Chat, Dedicated Account Manager",
  },
  {
    name: "enterprise",
    ram: 32,
    storage: "1 TB",
    cost: 800,
    uptime: 99.99,
    support:
      "24/7 Email, Phone, Live Chat, Dedicated Account Manager, Priority Support Queue",
  },
  {
    name: "ultra",
    ram: 64,
    storage: "2 TB",
    cost: 1500,
    uptime: 99.999,
    support:
      "24/7 Email, Phone, Live Chat, Dedicated Account Manager, Priority Support Queue, On-site Technician Option",
  },
];

export const pricingList: { [key: string]: PricingData[] } = {
  japan: pricing,
  europe: pricing,
  asia: pricing,
  africa: pricing,
  middleEast: pricing,
  southAmerica: pricing,
  northAmerica: pricing,
};
