import { TChildren } from "@/shared/types"
import { DeckProvider } from "@/features/deck/context/deck"

const Provider = ({ children }: TChildren) => (
	<DeckProvider>
		{children}
	</DeckProvider>
)

export default Provider