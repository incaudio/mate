import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className={cn(
            "text-xl font-bold tracking-tight z-50 transition-opacity duration-300",
            !scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          Mate Nation
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxRvor4d6Z53P-3PQBWBzs5YHwicH9F0qzKenRSUBCAGgsVQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
