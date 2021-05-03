import React, { useRef } from 'react'

interface IProps {
  name: string
  optionsObj?: Array<{ label: string; value: string }>
  optionsStr?: Array<string>
  col?: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['select'] & IProps

const Select: React.FC<InputProps> = ({
  label,
  col,
  optionsObj,
  optionsStr,
  ...rest
}) => {
  const inputRef = useRef<HTMLSelectElement>(null)

  return (
    <div className={col}>
      <div className="input-group">
        <div className="input-group-prepend">
          {label && (
            <span className="input-group-text" id="basic-addon1">
              {label}
            </span>
          )}
        </div>
        <select className="form-control" ref={inputRef} {...rest}>
          {!optionsStr &&
            optionsObj &&
            optionsObj.map(o => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          {optionsStr &&
            optionsStr.map(o => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Select
