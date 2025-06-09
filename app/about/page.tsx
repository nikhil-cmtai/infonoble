import About from "./about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Infonoble",
  description: "About page",
};

export default function AboutPage() {
  return <About />;
}

