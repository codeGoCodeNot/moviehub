import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type EndpointSelectorProps<T extends string> = {
  value: T;
  onValueChange: (value: T) => void;
  titles: Record<T, string>;
};

const EndpointSelector = <T extends string>({
  value,
  onValueChange,
  titles,
}: EndpointSelectorProps<T>) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[150px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(titles).map(([key, label]) => (
            <SelectItem value={key} key={key}>
              {label as string}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EndpointSelector;
