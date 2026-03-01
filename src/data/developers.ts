import { properties } from "./properties";
import { PropertyPrice, Property } from "@/types/property";
import { slugify } from "@/lib/format";

export interface Developer {
  name: string;
  slug: string;
  logo?: string;
  propertyCount: number;
  startingPrice: PropertyPrice;
}

export function getAllDevelopers(): Developer[] {
  const developerMap = new Map<
    string,
    { name: string; logo?: string; properties: Property[] }
  >();

  for (const property of properties) {
    const key = property.developer.name;
    const existing = developerMap.get(key);
    if (existing) {
      existing.properties.push(property);
    } else {
      developerMap.set(key, {
        name: property.developer.name,
        logo: property.developer.logo,
        properties: [property],
      });
    }
  }

  return Array.from(developerMap.values()).map((dev) => {
    const minPrice = dev.properties.reduce(
      (min, p) => (p.price.ngn < min.ngn ? p.price : min),
      dev.properties[0].price
    );

    return {
      name: dev.name,
      slug: slugify(dev.name),
      logo: dev.logo,
      propertyCount: dev.properties.length,
      startingPrice: minPrice,
    };
  });
}

export function getDeveloperBySlug(slug: string): Developer | undefined {
  return getAllDevelopers().find((d) => d.slug === slug);
}

export function getPropertiesByDeveloper(slug: string): Property[] {
  const developer = getDeveloperBySlug(slug);
  if (!developer) return [];
  return properties.filter((p) => slugify(p.developer.name) === slug);
}
