import { DeckProvider } from "../context/deck"

const Provider = ({ children }) => (
	<DeckProvider>
		{children}
	</DeckProvider>
)

export default Provider