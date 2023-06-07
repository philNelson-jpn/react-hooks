import React from 'react'
import range from 'lodash.range'

import styles from './PrideFlag.module.css'
import { COLORS } from './constants'

function Waves({
	variant = 'rainbow', // rainbow | rainbow-original | trans | pan
	width = 400,
	numOfColumns = 20,
	staggeredDelay = 100,
	// billow = 0.2,
}) {
	const colors = COLORS[variant]

	const friendlyWidth = Math.round(width / numOfColumns) * numOfColumns

	// const firstColumnDelay = numOfColumns * staggeredDelay * -1;

	return (
		<div className={styles.wrapper}>
			<div className={styles.flag} style={{ width: friendlyWidth }}>
				{range(numOfColumns).map((columnIndex) => (
					<div
						key={columnIndex}
						className={styles.column}
						style={{
							// '--billow': columnIndex * billow + 'px',
							background: generateGradientString(colors),
							animationDelay: columnIndex * 80 + 'ms',
						}}
					/>
				))}
			</div>
			<div className={styles.box}></div>
		</div>
	)
}

function generateGradientString(colors) {
	const numOfColors = colors.length
	const segmentHeight = 100 / numOfColors

	const gradientStops = colors.map((color, index) => {
		const from = index * segmentHeight
		const to = (index + 1) * segmentHeight

		return `${color} ${from}%, ${color} ${to}%`
	})

	return `linear-gradient(to bottom, ${gradientStops.join(', ')})`
}

export default Waves
