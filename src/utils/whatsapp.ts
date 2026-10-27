import { COMPANY } from '../data/company';

export type ContactCity = 'Mumbai' | 'Chennai';

export function getWhatsAppNumber(city: ContactCity = 'Mumbai'): string {
  return city === 'Chennai' ? '919372948245' : '918928051768';
}

/**
 * Builds a valid WhatsApp click-to-chat URL with prefilled URL-encoded message
 */
export function getWhatsAppUrl(customMessage?: string, city: ContactCity = 'Mumbai'): string {
  const message = customMessage || "Hi BizTap, I would like to discuss a website for my business.";
  const number = getWhatsAppNumber(city);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrlMumbai(customMessage?: string): string {
  return getWhatsAppUrl(customMessage, 'Mumbai');
}

export function getWhatsAppUrlChennai(customMessage?: string): string {
  return getWhatsAppUrl(customMessage, 'Chennai');
}

export function getIndustryWhatsAppUrl(industryName: string, city: ContactCity = 'Mumbai'): string {
  const message = `Hi BizTap, I am interested in a website package for ${industryName}. Can you share more details and a quote?`;
  return getWhatsAppUrl(message, city);
}

export function getServiceWhatsAppUrl(serviceName: string, city: ContactCity = 'Mumbai'): string {
  const message = `Hi BizTap, I would like to enquire about your ${serviceName} service for my business.`;
  return getWhatsAppUrl(message, city);
}

export function getPackageWhatsAppUrl(packageName: string, price: string, context?: string, city: ContactCity = 'Mumbai'): string {
  const ctx = context ? ` (${context})` : '';
  const message = `Hi BizTap, I want to get started with the ${packageName} package${ctx} priced at ${price}. Please share next steps.`;
  return getWhatsAppUrl(message, city);
}
