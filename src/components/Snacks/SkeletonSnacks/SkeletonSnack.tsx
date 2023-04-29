import { Skeleton } from '../../Skeleton/Skeleton'
import { Container } from './styles'

export const SkeletonSnack = () => {
  return (
    <div className='skeletonWrapper'>
      <Container>
        <Skeleton type='title' />
        <Skeleton type='thumbnail' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <div>
          <Skeleton type='title' />
          <Skeleton type='image' />
        </div>
      </Container>
    </div>
  )
}
