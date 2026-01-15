import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterProps {
  onChange: (region: string | null) => void;
}

export default function Filter({ onChange }: FilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center shadow-md rounded-md overflow-hidden w-50 h-15 justify-between cursor-pointer">
          <span className="px-7 py-5 text-sm select-none">
            Filter by Region
          </span>

          <Button
            variant="ghost"
            className="h-full px-3 rounded-none"
            aria-label="Open filter menu"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-50 border-none px-4 py-3 bg-white font-medium"
      >
        <DropdownMenuItem onClick={() => onChange("Africa")}>
          Africa
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange("Americas")}>
          Americas
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange("Asia")}>
          Asia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange("Europe")}>
          Europe
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange("Oceania")}>
          Oceania
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
