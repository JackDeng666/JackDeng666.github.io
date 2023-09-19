interface RandomPositionOptions {
  width: number
  height: number
  sideLength: number
  length: number
}

interface Position {
  x: number
  y: number
}

export class RandomPosition {
  private _cachePosition: Position[] = []
  private _x: number = 0
  private _y: number = 0
  private _sideLength: number = 0
  private _length: number = 0
  private _centerArea = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

  constructor(opt: RandomPositionOptions) {
    this._x = opt.width
    this._y = opt.height
    this._sideLength = opt.sideLength
    this._length = opt.length
    this._centerArea = {
      top: this._y / 2 - this._y / 4,
      bottom: this._y / 2 + this._y / 4,
      left: this._x / 2 - this._x / 4,
      right: this._x / 2 + this._x / 4
    }
  }

  private _randNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private _isIntersect(rectA: Position, rectB: Position) {
    let nonIntersect =
      rectB.x + this._sideLength < rectA.x ||
      rectB.x > rectA.x + this._sideLength ||
      rectB.y + this._sideLength < rectA.y ||
      rectB.y > rectA.y + this._sideLength

    return !nonIntersect
  }

  private _isIntersectCenterArea(rectA: Position) {
    let nonIntersect =
      this._centerArea.right < rectA.x ||
      this._centerArea.left > rectA.x + this._sideLength ||
      this._centerArea.bottom < rectA.y ||
      this._centerArea.top > rectA.y + this._sideLength

    return !nonIntersect
  }

  private _canPush(rectA: Position) {
    if (this._isIntersectCenterArea(rectA)) {
      return false
    }

    for (let i = 0; i < this._cachePosition.length; i++) {
      const rectB = this._cachePosition[i]
      if (this._isIntersect(rectA, rectB)) {
        return false
      }
    }

    return true
  }

  private _generatePosition(): Position {
    const x = this._randNum(this._sideLength, this._x - this._sideLength)
    const y = this._randNum(this._sideLength, this._y - this._sideLength)
    if (this._canPush({ x, y })) {
      return {
        x,
        y
      }
    }
    return this._generatePosition()
  }

  generateList() {
    for (let i = 0; i < this._length; i++) {
      this._cachePosition.push(this._generatePosition())
    }

    const cX = this._x / 2
    const cY = this._y / 2

    return this._cachePosition.map((el) => ({
      x: el.x - cX,
      y: el.y - cY
    }))
  }
}
