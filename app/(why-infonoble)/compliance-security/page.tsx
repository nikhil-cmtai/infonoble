import ComplianceSecurity from "./compliance-security";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance and Security | Infonoble",
  description: "Compliance and Security is a service that helps you manage your compliance and security needs.",
};

export default function ComplianceSecurityPage() {
  return <ComplianceSecurity />;
}
