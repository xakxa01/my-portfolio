import { TChildren } from "@/shared/types";
import { deckContext } from "./deckContext";
import { useDeckStateMachine } from "./useDeckStateMachine";

export const DeckProvider = ({ children }: TChildren) => {
	const value = useDeckStateMachine();

	return <deckContext.Provider value={value}>{children}</deckContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export default deckContext;
