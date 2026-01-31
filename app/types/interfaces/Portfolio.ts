interface FeatureItem {
  name: string
  description: string
  icon: string
}

export interface Portfolio {
  title: string
  description: string
  id?: string
  orientation?: 'horizontal' | 'vertical'
  reverse?: boolean
  features: FeatureItem[]
  image?: string
}
