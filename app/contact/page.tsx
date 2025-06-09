import Contact from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Infonoble",
  description: "Contact page",
};

export default function ContactPage() {
  return <Contact />;
}
