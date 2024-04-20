type callFuc = (num: number) => void

export interface TransformKey {
  x?: any
  y?: any
  z?: any
  scale?: any
}

export interface EffectItem {
  element: HTMLElement
  opacityAnimMap?: Map<number, number>
  transformAnimMap?: Map<number, TransformKey>
}

export class ScollEffect {
  private scollEvents: callFuc[] = []
  private effectItems: EffectItem[] = []
  constructor() {
    const handleScroll = () => {
      const ele = document.documentElement
      const scrollPos = Number(
        (ele.scrollTop / (ele.scrollHeight - ele.clientHeight)).toFixed(3)
      )
      // console.log(scrollPos)
      this._handleEffectItem(scrollPos)
      this.scollEvents.forEach(fuc => fuc(scrollPos))
    }

    document.addEventListener('scroll', handleScroll)
  }

  // 返回根据滚动改变的状态值
  private _getStateValue(
    scrollPos: number,
    beginPos: number,
    endPos: number,
    beginValue: number,
    endValue: number
  ) {
    if (beginValue === endValue) {
      return beginValue
    }

    const value =
      ((endValue - beginValue) * (scrollPos - beginPos)) / (endPos - beginPos) +
      beginValue

    return Number(value.toFixed(3))
  }

  _changeOpacity(
    scrollPos: number,
    element: HTMLElement,
    beginPos: number,
    endPos: number,
    beginValue: number,
    endValue: number
  ) {
    const opacity = this._getStateValue(
      scrollPos,
      beginPos,
      endPos,
      beginValue,
      endValue
    )
    element.style.opacity = opacity + ''
  }

  _changeTransform(
    scrollPos: number,
    element: HTMLElement,
    beginPos: number,
    endPos: number,
    beginValue: TransformKey,
    endValue: TransformKey
  ) {
    let transform: TransformKey = {
      x: 0,
      y: 0,
      z: 0,
      scale: 1
    }

    if (beginValue.x !== undefined) {
      transform.x = this._getStateValue(
        scrollPos,
        beginPos,
        endPos,
        beginValue.x,
        endValue.x
      )
    }

    if (beginValue.y !== undefined) {
      transform.y = this._getStateValue(
        scrollPos,
        beginPos,
        endPos,
        beginValue.y,
        endValue.y
      )
    }

    if (beginValue.z !== undefined) {
      transform.z = this._getStateValue(
        scrollPos,
        beginPos,
        endPos,
        beginValue.z,
        endValue.z
      )
    }

    if (beginValue.scale !== undefined) {
      transform.scale = this._getStateValue(
        scrollPos,
        beginPos,
        endPos,
        beginValue.scale,
        endValue.scale
      )
    }

    let transformStr = ''
    transformStr = `translate3d(${transform.x}rem, ${transform.y}rem, ${transform.z}rem)`

    if (transform.scale !== undefined) {
      transformStr += `scale(${transform.scale})`
    }

    element.style.transform = transformStr
  }

  _calcPosition(scrollPos: number, map: Map<number, TransformKey | number>) {
    const keyArr = [...map.keys()].sort((a, b) => a - b)

    const beginPos = keyArr.findLast(item => item <= scrollPos)
    let beginValue = map.get(beginPos)
    const endPos = keyArr.find(item => item >= scrollPos)
    let endValue = map.get(endPos)

    if (beginValue === undefined && endValue !== undefined) {
      beginValue = endValue
    } else if (beginValue !== undefined && endValue === undefined) {
      endValue = beginValue
    } else if (beginValue === undefined && endValue === undefined) {
      return null
    }

    return {
      beginPos,
      endPos,
      beginValue,
      endValue
    }
  }

  private _handleEffectItem(scrollPos: number) {
    this.effectItems.forEach(item => {
      if (item.opacityAnimMap?.size) {
        const calcPosition1 = this._calcPosition(scrollPos, item.opacityAnimMap)

        if (calcPosition1) {
          this._changeOpacity(
            scrollPos,
            item.element,
            calcPosition1.beginPos,
            calcPosition1.endPos,
            calcPosition1.beginValue as number,
            calcPosition1.endValue as number
          )
        }
      }

      if (item.transformAnimMap?.size) {
        const calcPosition2 = this._calcPosition(
          scrollPos,
          item.transformAnimMap
        )
        if (calcPosition2) {
          this._changeTransform(
            scrollPos,
            item.element,
            calcPosition2.beginPos,
            calcPosition2.endPos,
            calcPosition2.beginValue as TransformKey,
            calcPosition2.endValue as TransformKey
          )
        }
      }
    })
  }

  addScollEvents(fuc: callFuc) {
    this.scollEvents.push(fuc)
  }

  addEffectItem(val: EffectItem): void
  addEffectItem(val: EffectItem[]): void

  addEffectItem(val: EffectItem[] | EffectItem) {
    if (Array.isArray(val)) {
      this.effectItems.push(...val)
    } else {
      this.effectItems.push(val)
    }
  }

  removeEffectItem(val: EffectItem): void
  removeEffectItem(val: EffectItem[]): void
  removeEffectItem(val: EffectItem[] | EffectItem) {
    if (Array.isArray(val)) {
      this.effectItems = this.effectItems.filter(ei => !val.includes(ei))
    } else {
      this.effectItems = this.effectItems.filter(ei => ei !== val)
    }
  }
}

let scollEffect = null

export function getScollEffect(): ScollEffect {
  if (!scollEffect) {
    scollEffect = new ScollEffect()
  }
  return scollEffect
}
