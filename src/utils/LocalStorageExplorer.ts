export const addToStorage = (storageName: string, val: any) => {
    localStorage.setItem(storageName, JSON.stringify(val))
}

export const getFromStorage = (storageName: string):JSON => {
    const stored = localStorage.getItem(storageName) || ''
    return JSON.parse(stored)
}
