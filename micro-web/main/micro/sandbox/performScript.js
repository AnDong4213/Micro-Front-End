// 执行js脚本
export const performScriptForEval = (appName, script, global) => {
  // window['${appName}']，${appName}两边的分号必须带着

  const scriptText = `
    () => {
      ${script}
      return window['${appName}']
    }
  `
  return eval(scriptText).call(global, global)

  /* window.proxy = global
  const scriptText = `
    return ((window) => {
      ${script}
      return window['${appName}']
    })(window.proxy)
  `
  return new Function(scriptText) */
}

export const performScriptForFunction = (appName, script, global) => {
  // window.proxy = global

  const scriptText = `
    ${script}
    return window['${appName}']
  `

  return new Function(scriptText).call(global, global)

  /* const scriptText = `
    ((window) => {
      ${script}
      return window['${appName}']
    })(window.proxy)
  `
  return eval(scriptText) */
}
