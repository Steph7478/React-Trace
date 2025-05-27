"use client";

import * as Select from "@radix-ui/react-select";
import { FiChevronDown, FiCheck } from "react-icons/fi";

export type Option = { value: string; label: string };

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export const LabeledSelect: React.FC<Props> = ({
  id,
  label,
  value,
  onChange,
  options,
}) => (
  <div className="flex flex-col gap-1 w-[80%] text-white">
    <label htmlFor={id}>{label}</label>

    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        id={id}
        className="flex items-center justify-between bg-[#0B0121] px-3 py-2 border border-white/30 rounded cursor-pointer text-white focus:outline-none w-full"
      >
        <Select.Value placeholder="Select..." />
        <Select.Icon>
          <FiChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={4}
          className="bg-[#0B0121] rounded shadow-lg z-50 max-h-[250px] min-w-[var(--radix-select-trigger-width)]"
          style={{ minWidth: "var(--radix-select-trigger-width)" }}
        >
          <Select.Viewport>
            {options.map(({ value, label }) => (
              <Select.Item
                key={value}
                value={value}
                className="text-white px-4 gap-x-5 w-full py-2 rounded hover:bg-violet-600 focus:bg-violet-700 cursor-pointer flex items-center justify-between"
              >
                <Select.ItemText>{label}</Select.ItemText>
                <Select.ItemIndicator>
                  <FiCheck className="text-green-400" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);
