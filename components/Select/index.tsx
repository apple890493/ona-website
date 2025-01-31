import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

interface SelectProps {
  options: { label: string; value: string }[]
  value?: string
  className?: string
  onChange: (value: string) => void
}

const Select = ({ options, value, onChange, className }: SelectProps) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full cursor-pointer appearance-none border border-primary rounded-sm bg-zinc-50 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <MdKeyboardArrowDown size={30} className="pointer-events-none absolute right-2 top-0 h-full text-primary" />
    </div>
  )
}

export default Select
