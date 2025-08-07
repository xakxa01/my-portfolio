import { useContext } from "react";
import deckContext from "@/features/deck/context/deck";

const useDeckContext = () => useContext(deckContext);

export { useDeckContext };