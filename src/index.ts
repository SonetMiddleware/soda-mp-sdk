const _marketPlaces = {}

const getMarketPlaces = (mps: string[]) => {
  if (!mps || mps.length === 0) return _marketPlaces

  const ret = {}
  for (const key of mps) {
    ret[key] = _marketPlaces[key] || null
  }
  return ret
}

export type MarketPlaceType = {
    name: string
    meta: any
}
const registerMarketPlace = (mp: MarketPlaceType) => {
  _marketPlaces[mp.name] = mp.meta
}

export { getMarketPlaces, registerMarketPlace }
export default _marketPlaces
