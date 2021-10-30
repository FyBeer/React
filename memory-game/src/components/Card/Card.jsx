import { useState, useEffect } from "react"
import { useSpring, animated as a } from "react-spring";


const Card = (props) => {
	const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  useEffect(() => {
    if (props.flippedIndexes[2] === true && props.flippedIndexes.indexOf(props.id) > -1) {
      setTimeout(() => {
        set(state => !state)
        props.setFlippedCount(props.flippedCount + 1)
        props.setFlippedIndexes([])
      }, 1000)
    } else if (props.flippedIndexes[2] === false && props.id === 0) {
      props.setFlippedCount(props.flippedCount + 1)
      props.setFlippedIndexes([])
    }
  }, [props.flippedIndexes])

  const onCardClick = () => {
    if (!props.game[props.id].flipped && props.flippedCount % 3 === 0) {
      set(state => !state)
      props.setFlippedCount(props.flippedCount + 1)
      const newIndexes = [...props.flippedIndexes]
      newIndexes.push(props.id)
      props.setFlippedIndexes(newIndexes)
    } else if (
      props.flippedCount % 3 === 1 &&
      !props.game[props.id].flipped &&
      props.flippedIndexes.indexOf(props.id) < 0
    ) {
      set(state => !state)
      props.setFlippedCount(props.flippedCount + 1)
      const newIndexes = [...props.flippedIndexes]
      newIndexes.push(props.id)
      props.setFlippedIndexes(newIndexes)
    }
  }



  return (
    <div onClick={onCardClick}>
      <a.div
        className="c back"
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      />
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          background: props.color,
        }}
      />
    </div>
  )
}

export default Card