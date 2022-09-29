export const fetchResources = (url) => fetch(url).then(async (res) => await res.text())
