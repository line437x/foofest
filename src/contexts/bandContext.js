import { createContext, useState } from "react";

export const BandsContext = createContext();

export const BandsProvider = ({ children }) => {
	const [bands, setBands] = useState([]);
	const value = {
		bands,
		setBands,
	};
	return <BandsContext.Provider value={value}>{children}</BandsContext.Provider>;
};
