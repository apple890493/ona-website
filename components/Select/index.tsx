import React from 'react'

interface SelectProps<T extends string | number> {
  options: { label: string; value: T }[]
  value?: string | number
  className?: string
  onChange: (value: T) => void
}

const Select = <T extends string | number>({ options, value, onChange, className }: SelectProps<T>) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className={`w-full cursor-pointer appearance-none border border-primary rounded-sm bg-zinc-50 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
