export const performScriptForEval = (script) => {
  // console.log(script)
  // eval(script)

  new Function(script).call(window, window)
}