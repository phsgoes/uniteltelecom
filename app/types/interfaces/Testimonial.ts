export interface TestimonialUser {
  name: string
  description: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  avatar: {
    src: string
  }
}

export interface TestimonialItem {
  quote: string
  user: TestimonialUser
}

export interface Testimonial {
  title: string
  description: string
  items: TestimonialItem[]
}