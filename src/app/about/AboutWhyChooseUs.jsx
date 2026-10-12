import { Target, UserCheck, Layers, ShieldCheck, ClipboardList } from "lucide-react";
import FeatureCards from "../components/Reusable_Components/FeatureCards";

const items = [
  {
    icon: Target,
    title: "SaaS-Exclusive Focus",
    text: "We don't do everything. We do SaaS, and we do it exceptionally well.",
  },
  {
    icon: UserCheck,
    title: "Transparent Process",
    text: "You're kept in the loop at every stage. No surprises, no black boxes.",
  },
  {
    icon: Layers,
    title: "Scalable by Design",
    text: "Every product we build is architected to grow with your business from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Secured",
    text: "Every Product Built to Grow Securely From Day One.",
  },
  {
    icon: ClipboardList,
    title: "Proven Track Record",
    text: "300+ SaaS projects delivered across industries and markets worldwide.",
  },
];

export default function AboutWhyChooseUs() {
  return <FeatureCards items={items} />;
}