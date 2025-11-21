import React from 'react'
import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useDatabase } from '@/context/Context';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";


const DatabaseMenu = () => {

    const { value, setValue, open, setOpen } = useDatabase() as any;
    const databases = [
    {
      value: "PostgreSQL",
      label: "PostgreSQL",
    },
    {
      value: "MySQL",
      label: "MySQl",
    },
    {
      value: "MongoDB",
      label: "MongoDB",
    },
  ];

  return (
    <div className="flex items-center space-x-2">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? databases.find((database) => database.value === value)
                        ?.label
                    : "Select database..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search database..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No database found.</CommandEmpty>
                    <CommandGroup>
                      {databases.map((database) => (
                        <CommandItem
                          key={database.value}
                          value={database.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {database.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === database.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
  )
}

export default DatabaseMenu