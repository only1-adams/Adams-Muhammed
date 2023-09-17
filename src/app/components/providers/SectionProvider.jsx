import { createContext, useContext, useReducer } from "react";

const SectionContext = createContext(null);

const initialState = {
	section: null,
};

function reducer(state, action) {
	if (action.type === "changeSection") {
		state = {
			...state,
			section: action.payload,
		};
	}
	return state;
}

export const useSection = function () {
	return useContext(SectionContext);
};

export default function SectionProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<SectionContext.Provider value={[state, dispatch]}>
			{children}
		</SectionContext.Provider>
	);
}
