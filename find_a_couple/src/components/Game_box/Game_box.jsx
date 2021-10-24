import Card from './Card/Card'
import Game_box_style from './Game_box_style/Game_box.module.css'

const Game_box = (props) => {

	let cards = props.cards.map(c => <Card id={c.id} color={c.color} condition={c.condition} dataItems={c.dataItems}></Card>)

	return (
		<div className={Game_box_style.box}>
			<ul className={Game_box_style.fild}>
				{cards}
			</ul>
		</div>
	)
}

export default Game_box