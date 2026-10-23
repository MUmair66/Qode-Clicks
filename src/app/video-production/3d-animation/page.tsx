import { ServicePage } from "@/components/ServicePage";
import { animation3d as data } from "@/content/services/animation3d";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...data.meta, path: data.path });

export default function Page() {
  return <ServicePage data={data} />;
}
