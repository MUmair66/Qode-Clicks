import { ServicePage } from "@/components/ServicePage";
import { animation2d as data } from "@/content/services/animation2d";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...data.meta, path: data.path });

export default function Page() {
  return <ServicePage data={data} />;
}
