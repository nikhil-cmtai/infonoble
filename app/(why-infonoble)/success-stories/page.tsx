import SuccessStories from "./success-stories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | Infonoble",
  description: "Success Stories",
};

export default function SuccessStoriesPage() {
  return <SuccessStories />;
}

    