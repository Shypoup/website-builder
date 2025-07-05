import { Metadata } from 'next';
import WebsiteBuilder from './WebsiteBuilder';

export const metadata: Metadata = {
    title: "Rekaz - Create Your Own Website",
    description: "Create Your Own Website by Rekaz",
    icons: {
      icon: "/favicon.ico",
    },
  };

export default function CreateNewWebsitePage() {
    return <WebsiteBuilder />;
}