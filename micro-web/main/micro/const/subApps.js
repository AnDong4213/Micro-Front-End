let list = []

export const getList = () => list

export const setList = (appList) => (list = JSON.parse(JSON.stringify(appList)))
