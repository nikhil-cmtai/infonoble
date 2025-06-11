import NobleChatbot from "./noble-chatbot";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NobleChatBot | Infonoble",
  description: "AI-powered chatbot for automated customer interactions.",
};  

export default function NobleChatbotPage() {
  return <NobleChatbot />;
}   