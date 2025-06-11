import GetDemo from "./get-demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Demo",
  description: "We'll help you get started with our products and services.",
};

export default function GetDemoPage() {
  return <GetDemo />;
}
