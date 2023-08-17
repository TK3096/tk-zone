import { ReactNode, FC } from 'react'

type Props = {
  children: ReactNode
  active?: boolean
}

const NavItem: FC<Props> = (props: Props) => {
  const { children, active = false } = props

  const txtColor = active ? 'text-amber-900' : 'text-white'

  return (
    <div className='group min-w-[100px] text-center'>
      <h1
        className={`text-xl font-bold tracking-wider ${txtColor} group-hover:text-black group-hover:scale-125 ease-in-out duration-500`}
      >
        {children}
      </h1>

      <div className='mt-1 border-b-2 border-black opacity-0 scale-x-0 group-hover:opacity-100 origin-center group-hover:scale-x-100 ease-in-out duration-700'></div>
    </div>
  )
}

export default NavItem
