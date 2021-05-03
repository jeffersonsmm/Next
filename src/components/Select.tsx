import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'
import Tooltip from './Tooltip/index'

interface IProps {
  name: string
  optionsObj?: Array<{ label: string; value: string }>
  optionsStr?: Array<string>
  col?: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['select'] & IProps

const Select: React.FC<InputProps> = ({
  name,
  label,
  col,
  optionsObj,
  optionsStr,
  ...rest
}) => {
  const inputRef = useRef<HTMLSelectElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    })
  }, [fieldName, registerField])

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
        <select
          name={fieldName}
          className="form-control"
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        >
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
        {error && (
          <Tooltip title={error}>
            <FiAlertCircle color="#c53030" size={15} />
            &nbsp;
          </Tooltip>
        )}
      </div>
    </div>
  )
}

export default Select
