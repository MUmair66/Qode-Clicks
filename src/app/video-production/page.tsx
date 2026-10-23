import { ServicePage } from "@/components/ServicePage";
import { videoProduction as data } from "@/content/services/videoProduction";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...data.meta, path: data.path });

export default function Page() {
  return <ServicePage data={data} />;
}
