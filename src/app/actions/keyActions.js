export function collectDigit(keyValue) {
	return {
        type: "CAPTURE_KEY",
        payload: keyValue
    };
}

export function clearAllCalc(keyValue) {
	return {
        type: "CLEAR_ALL",
        payload: keyValue
    };
}

export function clearLastDigit(keyValue) {
	return {
        type: "CLEAR_LAST",
        payload: keyValue
    };
}