import VoiceQuality from "./voice-quality";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Quality | Infonoble",
  description: "Infonoble's voice quality is the best in the industry. We use the latest technology to ensure that your calls are crystal clear.",
};

export default function VoiceQualityPage() {
  return <VoiceQuality />;
}
