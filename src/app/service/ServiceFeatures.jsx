import { CloudCog, Palette, Code2, Smartphone, TrendingUp } from "lucide-react";
import FeatureCards from "../components/Reusable_Components/FeatureCards";

const items = [
  {
    icon: CloudCog,
    title: "SaaS Development",
    text: "SaaS Development",
    href: "/service/saas-development",
  },
  {
    icon: Palette,
    title: "UIUX & Graphic Design",
    text: "UIUX & Graphic Design",
    href: "/service/ui-ux-graphic-design",
  },
  {
    icon: Code2,
    title: "Website Development",
    text: "Website Development",
    href: "/service/website-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Mobile App Development",
    href: "/service/mobile-app-development",
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    text: "SEO & Digital Marketing",
    href: "/service/seo-digital-marketing",
  },
];

export default function ServiceFeatures() {
  return <FeatureCards items={items} />;
}