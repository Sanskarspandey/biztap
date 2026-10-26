import { COMPANY } from '../data/company';

/**
 * Builds a valid WhatsApp click-to-chat URL with prefilled URL-encoded message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || "Hi BizTap, I would like to discuss a website for my business.";
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getIndustryWhatsAppUrl(industryName: string): string {
  const message = `Hi BizTap, I am interested in a website package for ${industryName}. Can you share more details and a quote?`;
  return getWhatsAppUrl(message);
}

export function getServiceWhatsAppUrl(serviceName: string): string {
  const message = `Hi BizTap, I would like to enquire about your ${serviceName} service for my business.`;
  return getWhatsAppUrl(message);
}

export function getPackageWhatsAppUrl(packageName: string, price: string, context?: string): string {
  const ctx = context ? ` (${context})` : '';
  const message = `Hi BizTap, I want to get started with the ${packageName} package${ctx} priced at ${price}. Please share next steps.`;
  return getWhatsAppUrl(message);
}
