export interface IProduct {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface Rating {
  count: number
  rate: number
}
