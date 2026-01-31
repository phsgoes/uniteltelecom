interface FeatureItem {
  title: string
  description: string
  icon: string
}

export interface Feature {
  title: string
  description: string
  items: FeatureItem[]
}
