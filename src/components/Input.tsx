import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

import Tooltip from './Tooltip/index'

interface IProps {
  name: string
  col?: string
  label?: string
  square?: string
  icon?: React.ComponentType<IconBaseProps>
  iconEnd?: any
}

type InputProps = JSX.IntrinsicElements['input'] & IProps

const Input: React.FC<InputProps> = ({
  name,
  label,
  col,
  square,
  icon: Icon,
  iconEnd,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
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
      <div id={fieldName} className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text p-0">
            ={label}({Icon && <Icon size={15} color="#fff" />}
            &nbsp;;"&nbsp;
          </span>
        </div>

        <input
          name={fieldName}
          className="form-control mb-2"
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />

        <div className="input-group-append">
          <span className="input-group-text">
            {iconEnd}"
            {error && (
              <Tooltip title={error}>
                <FiAlertCircle color="#c53030" size={15} />
                &nbsp;
              </Tooltip>
            )}
            )
          </span>
        </div>
      </div>
      <div id={square} className="square" />
    </div>
  )
}

export default Input
