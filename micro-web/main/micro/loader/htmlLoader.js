import { fetchResources } from '../utils/fetchResources'
const cache = {}

// 解析html
export const parseHtml = async (entry, name) => {
  const html = await fetchResources(entry)
  console.log(html)
  return html
}

// 加载和渲染html
export const loadHtml = async (app) => {
  // 子应用显示在哪里
  let container = app.container
  // 子应用的入口
  let entry = app.entry

  const ct = document.querySelector(container)
  console.log(ct)

  const html = await parseHtml(entry)
  ct.innerHTML = html

  return app
}
