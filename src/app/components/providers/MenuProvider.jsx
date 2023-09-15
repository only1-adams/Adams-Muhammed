import { useContext, createContext, useReducer } from "react";

const MenuContext = createContext(null);

const initialState = {
	isOpen: false,
};

const reducer = function (state, action) {
	if (action.type === "isOpen") {
		state = { ...state, isOpen: action.payload };
	}

	return state;
};

export const useMenu = function () {
	return useContext(MenuContext);
};

export default function MenuProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<MenuContext.Provider value={[state, dispatch]}>
			{children}
		</MenuContext.Provider>
	);
}
