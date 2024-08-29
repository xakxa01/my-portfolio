import { useContext } from "react"
import deckContext from "../context/deck"

export const useDeckContext = () => {
	const context = useContext(deckContext)

	if (!context) throw new Error("Context must be used within an AppProvider");

	return context;
}