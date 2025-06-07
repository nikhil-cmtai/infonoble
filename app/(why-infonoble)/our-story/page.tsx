import OurStory from "./our-story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Infonoble",
  description: "Infonoble's story is the best in the industry. We use the latest technology to ensure that your calls are crystal clear.",
};

export default function OurStoryPage() {
  return <OurStory />;
}
