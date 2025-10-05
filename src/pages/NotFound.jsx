import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";

export default function NotFound() {
  return (
    <div className="bg-[var(--bg)] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>404</h1>
        <p className="text-xl mb-6">We couldn't find the page you're looking for.</p>
        <div className="section-sep mx-auto mb-6" />
        <Link to={createPageUrl("Home")}>
          <Button variant="lux">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
