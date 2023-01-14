export interface PostRoot {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    author: Author
    body: Body[]
    categories: Category[]
    mainImage: MainImage
    slug: Slug
    title: string
  }
  
  export interface Author {
    _ref: string
    _type: string
  }
  
  export interface Body {
    _key: string
    _type: string
    children?: Children[]
    markDefs?: any[]
    style?: string
    asset?: Asset
    crop?: Crop
    hotspot?: Hotspot
  }
  
  export interface Children {
    _key: string
    _type: string
    marks: string[]
    text: string
  }
  
  export interface Asset {
    _ref: string
    _type: string
  }
  
  export interface Crop {
    _type: string
    bottom: number
    left: number
    right: number
    top: number
  }
  
  export interface Hotspot {
    _type: string
    height: number
    width: number
    x: number
    y: number
  }
  
  export interface Category {
    _key: string
    _ref: string
    _type: string
  }
  
  export interface MainImage {
    _type: string
    asset: Asset2
  }
  
  export interface Asset2 {
    _ref: string
    _type: string
  }
  
  export interface Slug {
    _type: string
    current: string
  }
  