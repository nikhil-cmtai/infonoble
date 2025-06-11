import NobleDialer from "./noble-dialer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NobleDialer | Infonoble",
  description: "The Leading Cloud Contact Center Software in the Middle East.",
};

export default function NobleDialerPage() {
  return <NobleDialer />;
}