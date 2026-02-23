export type Currency = "NGN" | "USD" | "EUR";

export type PropertyType =
  | "villa"
  | "apartment"
  | "penthouse"
  | "duplex"
  | "land"
  | "commercial";

export type PropertyStatus =
  | "available"
  | "sold"
  | "under-offer"
  | "coming-soon";

export type InvestmentModel = "outright" | "pay-small-small" | "fractional";

export interface PropertyPrice {
  ngn: number;
  usd: number;
  eur: number;
}

export interface PropertyLocation {
  address: string;
  area: string;
  city: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PropertyAmenity {
  icon: string;
  label: string;
}

export interface PaySmallSmallPlan {
  depositPercent: number;
  monthlyPayment: PropertyPrice;
  durationMonths: number;
  interestRate: number;
}

export interface FractionalDetails {
  totalFractions: number;
  availableFractions: number;
  pricePerFraction: PropertyPrice;
  expectedAnnualReturn: number;
  minimumFractions: number;
  currentInvestors: number;
}

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface PropertyDeveloper {
  name: string;
  logo?: string;
}

export interface PropertyAgent {
  id: string;
  name: string;
  phone: string;
  avatar: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  type: PropertyType;
  status: PropertyStatus;
  price: PropertyPrice;
  location: PropertyLocation;
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  yearBuilt: number;
  images: PropertyImage[];
  amenities: PropertyAmenity[];
  investmentModels: InvestmentModel[];
  paySmallSmallPlan?: PaySmallSmallPlan;
  fractionalDetails?: FractionalDetails;
  developer: PropertyDeveloper;
  featured: boolean;
  isNew: boolean;
  estimatedROI: number;
  rentalYield?: number;
  agent: PropertyAgent;
  tags: string[];
  createdAt: string;
}
