import React from "react";
import { X } from "lucide-react";

export default function MobileMenu() {
  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 opacity-100 pointer-events-auto`}>
      <div className="absolute inset-0 bg-white p-4">
        <button className="text-gray-600 hover:text-gray-800">
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}   
