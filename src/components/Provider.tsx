import { TChildren } from "../../type"
import { DeckProvider } from "../context/deck"

const Provider = ({ children }: TChildren) => (
	<DeckProvider>
		{children}
	</DeckProvider>
)

export default Provider