import Features from "./features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Infonoble",
  description: "Infonoble's features are the best in the industry. We use the latest technology to ensure that your calls are crystal clear.",
};  

export default function FeaturesPage() {
  return <Features />;
}