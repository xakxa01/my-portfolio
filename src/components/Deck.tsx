import { useDrag } from 'react-use-gesture'
import { useDeckContext } from '../hook/useDeckContext'
import { animated, to as interpolate } from '@react-spring/web'
import '../styles/deck.css'
import { cards } from './cards'

const Deck = () => {
	const { api, gone, to, props, selectedIndex } = useDeckContext()

	const trans = (r: number, s: number) => `perspective(10000px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

	const bind = useDrag(({ args: [index], down, movement: [mx, my], direction: [xDir, yDir], velocity }) => {
		const trigger = velocity > 0.2
		const isVerticalDrag = Math.abs(my) > Math.abs(mx) // Check if the drag is primarily vertical
		const isHorizontalDrag = !isVerticalDrag // Check if the drag is primarily horizontal
		const dirX = xDir < 0 ? -1 : 1
		const dirY = yDir < 0 ? -1 : 1

		if (!down && trigger) gone.add(index)

		api.start((i: number) => {
			if (index !== i) return
			const isGone = gone.has(index)
			const x = isHorizontalDrag ? (isGone ? (200 + window.innerWidth) * dirX : down ? mx : 0) : 0 // Lock y-axis for horizontal drag
			const y = isVerticalDrag ? (isGone ? (200 + window.innerHeight) * dirY : down ? my : 0) : 0 // Lock x-axis for vertical drag
			const rot = isHorizontalDrag ? mx / 100 + (isGone ? dirX * 10 * velocity : 0) : 0 // Rotation for horizontal drag only
			const scale = down ? 1.1 : 1


			return {
				x,
				y,
				rot,
				scale,
				delay: undefined,
				config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
			}
		})

		if (!down && gone.size === cards.length) {
			setTimeout(() => {
				gone.clear()
				api.start((i: number) => to(i, 100))
			}, 600)
		}
	})

	return <div className='deck__container'>
		{props.map(({ x, y, rot, scale }: {x: number, y: number, rot: number, scale: number}, i: number) => (
			<animated.div
				className='deck__stack'
				key={i}
				style={{
					x,
					y,
					zIndex: i <= selectedIndex ? 1 : 0
				}}>
				<animated.div
					{...bind(i)}
					className='deck__card'
					style={{ transform: interpolate([rot, scale], trans) }}>
					{cards[i].component()}
				</animated.div>
			</animated.div >
		))}
	</div>
}

export default Deck
