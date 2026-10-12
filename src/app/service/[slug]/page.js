import { notFound } from "next/navigation";
import ServiceDetail from "../../components/Reusable_Components/ServiceDetail";
import { services, sidebarLinks, getService } from "../servicesData";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service ? `${service.heading} | Software Flux Solutions` : "Service" };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <ServiceDetail service={service} sidebarLinks={sidebarLinks} />;
}