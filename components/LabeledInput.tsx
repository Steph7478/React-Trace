type LabeledInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const LabeledInput: React.FC<LabeledInputProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div className="flex flex-col items-start gap-1 w-[80%]">
    <label htmlFor={id} className="text-white font-semibold">
      {label}
    </label>
    <input
      type="email"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-2 border border-white/20 rounded bg-[#0B0121] text-white placeholder-white/50 text-center focus:outline-none focus:ring-2 focus:ring-violet-500 caret-white"
    />
  </div>
);
