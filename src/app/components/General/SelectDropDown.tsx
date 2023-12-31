import { InputTypes } from "@/types/service";
import { Input, Select, SelectItem, extendVariants } from "@nextui-org/react";
import React from "react";
import { Controller } from "react-hook-form";

const MyInput = extendVariants(Input, {
  variants: {
    // <- modify/add variants
    color: {
      stone: {
        // <- add a new color variant
        inputWrapper: [
          // <- Input wrapper slot
          // "bg-zinc-100",
          "border-2",
          // "shadow",
          "transition-colors",
          "focus-within:bg-primary:100",
          "data-[hover=true]:border-primary:500",
          "data-[hover=true]:bg-zinc-100",
          "group-data-[focus=true]:border-primary-700",
          // dark theme
          // "dark:bg-zinc-900",
          // "dark:border-zinc-800",
          // "dark:data-[hover=true]:bg-zinc-900",
          // "dark:focus-within:bg-zinc-900",
        ],
        input: [
          // <- Input element slot
          "placeholder:text-primary-200",
          // dark theme
          "dark:text-zinc-400",
          "dark:placeholder:text-zinc-600",
        ],
      },
    },
    size: {
      xs: {
        inputWrapper: "h-unit-6 min-h-unit-6 px-1",
        input: "text-tiny",
      },
      md: {
        inputWrapper: "h-unit-10 min-h-unit-10",
        input: "text-small",
      },
      xl: {
        inputWrapper: "h-unit-14 min-h-unit-14",
        input: "text-medium",
      },
    },
    radius: {
      xs: {
        inputWrapper: "rounded",
      },
      sm: {
        inputWrapper: "rounded-[4px]",
      },
    },
    textSize: {
      base: {
        input: "text-base",
      },
    },
    removeLabel: {
      true: {
        label: "block",
      },
      false: {},
    },
  },
  defaultVariants: {
    color: "stone",
    textSize: "base",
    removeLabel: true,
  },
});
const SelectDropDown: React.FC<InputTypes> = (props: InputTypes) => {
  const {
    type,
    placeholder,
    control,
    name,
    required,
    id,
    listItems,
    disabled = false,
    ...others
  } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ?? false }}
        render={({ field, fieldState: { invalid, error } }) => {
          return (
            <div
              className={`${error?.message && "pb-2"}`}
              style={{
                cursor: disabled ? "not-allowed !important" : "auto",
              }}
            >
              {listItems && (
                <Select
                  {...field}
                  {...others}
                  label={placeholder}
                  disabled={disabled}
                  isInvalid={error ? true : false}
                  errorMessage={error?.message}
                  className={`w-full ${
                    disabled && "cursor-not-allowed opacity-40"
                  }`}
                  variant="bordered"
                >
                  {listItems.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      style={{
                        overflow: "unset",
                        textOverflow: "unset",
                        whiteSpace: "unset",
                      }}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            </div>
          );
        }}
      />
    </>
  );
};

export default SelectDropDown;
