let lifecycle = {}

export const getMainLifecycle = () => lifecycle

// export const setMainLifecycle = (data) => (lifecycle = JSON.parse(JSON.stringify(data)))
export const setMainLifecycle = (data) => (lifecycle = data)
