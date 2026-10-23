import { ServicePage } from "@/components/ServicePage";
import { websiteMaintenance as data } from "@/content/services/websiteMaintenance";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...data.meta, path: data.path });

export default function Page() {
  return <ServicePage data={data} />;
}
