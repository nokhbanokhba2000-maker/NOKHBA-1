import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors whatsapp-pulse"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}