const PostCard = () => {
  return (
    <div className='bg-amber-50 p-4 rounded-md cursor-pointer hover:scale-110 duration-300 drop-shadow-md'>
      <h1 className='text-2xl font-bold'>Title</h1>
      <p className='text-xs text-neutral-500'>Date: </p>
      <p className='text-xs text-neutral-500'>Description ....</p>
    </div>
  )
}

export default PostCard
