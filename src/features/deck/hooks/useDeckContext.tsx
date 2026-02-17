import { useContext } from "react";
import { deckContext } from "@/features/deck/context/deckContext";

const useDeckContext = () => useContext(deckContext);

export { useDeckContext };
