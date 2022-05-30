const _marketPlaces = {}

export const Function = {
  getItemPage: 'getItemPage',
  getHost: 'getHost'
}

export const getMarketPlaces = (mps?: string[]) => {
  if (!mps || mps.length === 0) return _marketPlaces

  const ret = {}
  for (const key of mps) {
    ret[key] = _marketPlaces[key] || null
  }
  return ret
}

export const getMarketPlace = (mp: string) => {
  return _marketPlaces[mp]
}

export type MarketPlaceType = {
  name: string
  meta: any
}
export const registerMarketPlace = (mp: MarketPlaceType) => {
  _marketPlaces[mp.name] = mp.meta
}

export const invoke = async (mp: string, func: string, meta?: any) => {
  if (!_marketPlaces[mp]) {
    throw new Error('Marketplace not found.')
  }
  if (!_marketPlaces[mp][func]) {
    throw new Error('Function not found.')
  }
  try {
    const res = await _marketPlaces[mp][func](meta)
    return res
  } catch (e) {
    throw e
  }
}

export default _marketPlaces
