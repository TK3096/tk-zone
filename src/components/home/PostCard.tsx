import { FC } from 'react'

type Props = {
  title: string
  date: string
  description: string
}

const PostCard: FC<Props> = (props: Props) => {
  const { title, date, description } = props

  return (
    <div className='bg-amber-50 p-4 rounded-md cursor-pointer hover:scale-110 duration-300 drop-shadow-md'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='text-xs text-neutral-500'>Date: {date}</p>
      <p className='text-xs text-neutral-500'>{description}</p>
    </div>
  )
}

export default PostCard
