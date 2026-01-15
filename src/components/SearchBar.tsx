import { useNavigate } from "react-router-dom";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce.ts";
import { useCountries } from "@/hooks/useCountries.ts";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const { data: countries } = useCountries();

  const navigate = useNavigate();
  const debouncedValue = useDebounce(value, 200);
  const filteredCountries = countries?.filter((c) =>
    c.name.common.toLowerCase().includes(debouncedValue.toLowerCase()),
  );

  return (
    <Command className="w-full md:max-w-130 rounded-md px-4 py-3 shadow-md">
      <CommandInput
        placeholder="Search for a country..."
        value={value}
        onValueChange={setValue}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      />

      {open && debouncedValue && (
        <CommandList className={"mt-2 max-h-none overflow-visible"}>
          {filteredCountries?.slice(0, 10).map((c) => (
            <CommandItem
              key={c.name.common}
              value={c.name.common}
              onSelect={() => {
                navigate(`/country/${c.name.common}`);
                setOpen(false);
                setValue("");
              }}
              className={
                "font-medium text-base cursor-pointer hover:bg-gray-100 transition-colors duration-300"
              }
            >
              {c.name.common}
            </CommandItem>
          ))}
        </CommandList>
      )}
    </Command>
  );
}
