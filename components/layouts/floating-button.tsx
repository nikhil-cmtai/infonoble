import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingButton() {
  return (
    <Button className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg">
      <Plus className="h-6 w-6" />
    </Button>
  );
}

