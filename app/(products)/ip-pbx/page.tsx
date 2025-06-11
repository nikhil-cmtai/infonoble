import NobleIPPBX from "./ip-pbx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NobleIP-PBX | Infonoble",
  description: "A scalable business phone system for every company.",
};

export default function IPPBXPage() {
  return <NobleIPPBX />;
}   