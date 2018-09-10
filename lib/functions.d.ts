import _ from 'lodash'

export interface UrlCom {
    path       : string,
    queryString: string,
    query      : object
}

export type standby = (callback : Function, threshold : number) => void
export type setQuery = (url : string, query : object) => string
export type parseUrl = (url : string) => UrlCom
export type httpQueryString = (query : object) => string
export type fastRandom = (length ?: number, pool ?: string) => string
export type rand = (min: number, max: number) => number
export type strLimit = (value: string, limit ?: number, endWith ?: string) => string
export type htmlencode = (value: string) => string
export type flattenNode = (input: Array, nodeKey ?: string) => Array
export type objectGet = (input: object, key : string, $default ?: any) => any
export type simpleClone = (input: any) => any
export type useAsFunction = (input: any) => Function
export type arrayChunk = (input: Array) => Array
export type arrayWrap = (input: any) => Array
export type inArray = (needle : any, haystack : Array) => boolean
export type getMaxZIndex = () => number
export type cover = () => void
export type uncover = () => void
export type dataURItoBlob = (dataURI : string) => Blob
export type getLodash = () => _
export type md5 = (value : any) => string
