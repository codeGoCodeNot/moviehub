import SearchInput from "@/features/search/components/search-input";
import { LucideFilm } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-1 justify-between items-center px-5 min-h-[60px] bg-background/95 animate-fade-from-top fixed top-0 z-20 w-full">
      <div className="flex gap-x-1 items-center animate-fade-from-top">
        <LucideFilm className="w-6 h-6" />
        <span
          style={{
            fontSize: "20px",
            fontWeight: 700,
            background: "linear-gradient(135deg, #4b5563 0%, #2c3e50 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.5px",
          }}
          className="md:block hidden"
        >
          Movie Query
        </span>
      </div>
      <SearchInput />
    </div>
  );
};

export default Navbar;
