import { LucideVideotape } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-1 justify-between items-center px-5 min-h-[60px] bg-background/95 animate-fade-from-top fixed top-0 z-20 w-full">
      <div className="flex gap-x-1 items-center animate-fade-from-top">
        <LucideVideotape />
        <span className="text-2xl font-bold tracking-tight">Movie Query</span>
      </div>
    </div>
  );
};

export default Navbar;
