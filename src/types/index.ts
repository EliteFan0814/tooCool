export enum ImageType {
  NaturalScenery = '自然风景',
  HumanScenery = '人文风景',
  AnimateScenery = '动画',
  DrawingScenery = '绘画'
}

export interface ImageTypeItemSub {
  logo: string
  name: string
  id: number
  isActive: boolean
}
export interface ImageTypeItem {
  type: ImageType
  id: number
  list: ImageTypeItemSub[]
}
