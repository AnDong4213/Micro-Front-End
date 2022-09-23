// 快照沙箱  给当前的全局变量实现一个快照的方式，记录沙箱的内容，子应用切换之后将沙箱的变量置为初始值

export class SnapShotSandbox {
  constructor() {
    // 1. 代理对象
    this.proxy = window

    this.active()
  }

  // 沙箱激活
  active() {
    // 创建一个沙箱
    this.snapshot = new Map()

    // 遍历全局环境
    for (const key in window) {
      this.snapshot[key] = window[key]
    }
  }

  // 沙箱销毁
  inactive() {
    for (const key in window) {
      if (window[key] !== this.snapshot[key]) {
        // 还原操作
        window[key] = this.snapshot[key]
      }
    }
  }
}
