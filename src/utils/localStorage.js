export function getItem(itemName) {
    try {
        const stateStringify = localStorage.getItem(itemName);
        if (stateStringify === null) {
            return undefined;
        }
        return JSON.parse(stateStringify);
    } catch (e) {
        console.log("Errors loading state data");
        return undefined;
    }
}

export function setItem(itemName, state) {
    try {
        const stateStringify = JSON.stringify(state);
        localStorage.setItem(itemName, stateStringify);
    } catch (e) {
        console.log("Errors saving data to local storage");
    }
}

export function removeItem(itemName) {
    localStorage.removeItem(itemName);
}
