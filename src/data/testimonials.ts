export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar?: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Adebayo Johnson",
    location: "Houston, Texas",
    quote:
      "I've been wanting to invest in Nigerian real estate for years but couldn't trust anyone from abroad. Denada changed that completely. I bought a 10% fraction of an Ikoyi property without leaving Houston. The process was smooth, digital, and transparent.",
    rating: 5,
    role: "Diaspora Investor",
  },
  {
    id: "t2",
    name: "Ngozi Eze",
    location: "Lagos, Nigeria",
    quote:
      "As a young professional, I thought owning property in Lagos was a pipe dream. The Pay Small Small plan let me start with what I could afford. Six months in, and I can see my progress on the dashboard. It feels real.",
    rating: 5,
    role: "First-time Buyer",
  },
  {
    id: "t3",
    name: "Emeka Okonkwo",
    location: "London, UK",
    quote:
      "My family and I pooled together to buy a fraction of a Victoria Island apartment through Denada. The trust company partnership and digital documentation gave us the confidence we needed. Already seeing returns from rental income.",
    rating: 5,
    role: "Family Investor",
  },
];
