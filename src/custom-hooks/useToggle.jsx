import React, { useState, useCallback } from 'react'

function useToggle(initialState = false) {
	if (typeof initialState !== 'boolean') {
		console.warn('Invalid type passed to initialState in useToggle')
	}
	const [value, setValue] = useState(initialState)
	// memoize this function in case it is used for something that requires heavy computation
	const toggleValue = useCallback(() => {
		setValue((currentValue) => !currentValue)
	}, [])

	return [value, toggleValue]
}

export default useToggle
