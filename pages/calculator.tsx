import React, { useState } from 'react'

const Calculator = () => {
  const [instanceValue, setInstanceValue] = useState<number>(1)
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "0")
      setInstanceValue(0)
    if (e.currentTarget.value === "1")
      setInstanceValue(1)
    else (e.currentTarget.value === "2")
    setInstanceValue(2)
  }
  return (
    <>
      <div>

      </div>
      <div className='max-w-2xl justify-center items-center m-auto'>
        <div className="card-body shadow-2xl rounded form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="checkbox checkbox-accent" />
          </label>

          <input type="range" min={1} max={3} value={instanceValue} onChange={(e) => { onValueChange(e) }} className="range range-accent" step={1} />
          <div className="w-full flex justify-between text-base px-2">
            <span>Инстанция 1</span>
            <span>Инстанция 2</span>
            <span>Инстанция 3</span>
          </div>

          <label className="label cursor-pointer">
            <span className="label-text">Red pill</span>
            <input type="radio" name="radio-10" className="radio checked:radio-accent" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Blue pill</span>
            <input type="radio" name="radio-10" className="radio checked:radio-accent" />
          </label>
        </div>

      </div>
    </>
  )
}

export default Calculator