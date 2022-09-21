import { fetchResources } from '../utils/fetchResources'
const cache = {}

// 解析html
export const parseHtml = async (entry, name) => {
  if (cache[name]) {
    // return cache[name]
  }
  const html = await fetchResources(entry)
  // console.log(html)
  const div = document.createElement('div')
  div.innerHTML = html

  let allScript
  const [dom, scriptUrl, script] = await getResources(div, entry)

  const fetchedScripts = await Promise.all(scriptUrl.map(async (item) => fetchResources(item)))
  allScript = script.concat(fetchedScripts)
  cache[name] = [dom, allScript]
  console.log('dom', dom, allScript)
  return [dom, allScript]
}

// 解析 js 内容
export const getResources = (root, entry) => {
  let scriptUrl = [] // js 链接  src  href
  const script = [] // 写在script中的js脚本内容
  const dom = root.outerHTML

  // 深度解析
  function deepParse(element) {
    const children = element.children
    const parent = element.parentNode

    // 处理位于 script 中的内容
    if (element.nodeName.toLowerCase() === 'script') {
      const src = element.getAttribute('src')
      if (!src) {
        script.push(element.outerHTML)
      } else {
        if (src.startsWith('http')) {
          scriptUrl.push(src)
        } else {
          scriptUrl.push(`http:${entry}/${src}`)
        }
      }

      if (parent) {
        parent.replaceChild(document.createComment('此 js 文件已经被微前端替换'), element)
      }
    }

    // link 也会有js的内容
    if (element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href')

      if (href.endsWith('.js')) {
        if (href.startsWith('http')) {
          scriptUrl.push(href)
        } else {
          scriptUrl.push(`http:${entry}/${href}`)
        }
      }
    }
    for (let i = 0; i < children.length; i++) {
      deepParse(children[i])
    }
  }

  deepParse(root)

  // scriptUrl = Array.from(new Set(scriptUrl))
  return [dom, scriptUrl, script]
}

// 加载和渲染html
export const loadHtml = async (app) => {
  // 子应用显示在哪里
  let container = app.container
  // 子应用的入口
  let entry = app.entry

  const ct = document.querySelector(container)
  console.log(ct)
  if (!ct) {
    throw Error(`容器不存在，请查看`)
  }

  const [dom, scripts] = await parseHtml(entry, app.name)
  ct.innerHTML = dom

  return app
}
