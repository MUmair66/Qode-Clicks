import { ServicePage } from "@/components/ServicePage";
import { ecommerceWebsite as data } from "@/content/services/ecommerceWebsite";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...data.meta, path: data.path });

export default function Page() {
  return <ServicePage data={data} />;
}
