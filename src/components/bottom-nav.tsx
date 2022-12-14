import React from 'react'
import { nanoid } from 'nanoid'
import BottomNavItem from './bottom-nav-item'
import cx from 'classnames'
import { BsFillGrid1X2Fill, BsFillPersonFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

const BOTTOM_NAV_LIST = [
  {
    id: nanoid(),
    name: 'List',
    icon: <BsFillGrid1X2Fill size={26} />,
    path: '/list'
  },
  {
    id: nanoid(),
    name: 'Account',
    icon: <BsFillPersonFill size={32} />,
    path: '/account'
  }
]

const BottomNav = () => {
  const router = useRouter()

  return (
    <div className="fixed md:hidden flex items-center justify-center bottom-0 Z-10 px-4 h-24 w-full bg-[#FAFAFA]">
      {BOTTOM_NAV_LIST.map(item => (
        <BottomNavItem
          {...item}
          isActive={item.path === router.pathname}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default BottomNav
