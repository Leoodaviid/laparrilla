import { SkeletonElement } from './styles'

export interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export const Skeleton = ({ type }: SkeletonProps) => {
  return <SkeletonElement type={type} />
}
