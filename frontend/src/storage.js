import { atom, selector } from 'recoil';

const loadState = (key) => {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : undefined;
}

const saveState = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state));
}

const persistAtom = (key, defaultValue) => {
    return atom({
        key,
        default: loadState(key) || defaultValue,
        effects_UNSTABLE: [
            ({onSet}) => {
            onSet(newValue => {
                saveState(key, newValue);
            });
            }
        ]
    });
}