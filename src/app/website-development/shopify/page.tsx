import { ServicePage } from "@/components/ServicePage";
import { shopify as data } from "@/content/services/shopify";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...data.meta, path: data.path });

export default function Page() {
  return <ServicePage data={data} />;
}
