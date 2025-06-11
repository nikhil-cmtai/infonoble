import OmniChannel from "./omni-channel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NobleOmniChannel | Infonoble",
  description: "Manage all your Voice, WhatsApp conversations seamlessly in one place.",
};

export default function OmniChannelPage() {
  return <OmniChannel />;
}
