import s from './Technologies.module.css'
import { techImages, next, prev } from '../../utils/utils'
import { useEffect, useState } from 'react'

export default function Technologies() {
  const [value, setValue] = useState({
    action: "next",
    values: 1
  });

  const right = () => {
    if (value.values < 5) {
      console.log(value);
      setValue({action: "next", values: value.values + 1})
    } else {
      setValue({action: "next", values: 1})
    }
  }

  useEffect(() => {
    if (value.action = next) {
      next(value.values)
    } else {
      prev(value.values)
    }
  }, [value])



  console.log(value);

  const left = () => {
    if (value.values <= 1) {
      setValue({action: "prev", values: 5})
    } else {
      console.log(value);
      setValue({action: "prev", values: value.values - 1})
    }
    
  }


  return (
    <div className={s.container}>
      <h1>Technologies</h1>
      <main className={s.main}>
        <span className={s.left} onClick={() => left()} >{"<"}</span>
        <div className={s.containerMain} id="containerMain">
          {techImages.map((e, i) => {
            return (
              <a href={e.link} target="_blank" rel="noopener noreferrer"><img id={`item-${i}`} src={e.img} alt="images" /></a>
            )
          })}
        </div>
        <span className={s.rigth} onClick={() => right()}>{">"}</span>
      </main>
    </div>
  )
}
