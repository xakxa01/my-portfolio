import { useContext } from "react"
import deckContext from "../context/deck.tsx"

export const useDeckContext = () => {
	const context = useContext(deckContext)

	if (!context) throw new Error("Context must be used within an AppProvider");

	return context;
}