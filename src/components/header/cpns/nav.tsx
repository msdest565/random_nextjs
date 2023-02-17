import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Link from 'next/link'
import { Button } from '@arco-design/web-react'

export interface IProps {
  children?: ReactElement
}

const HeaderNav: FC<IProps> = memo(() => {
  return (
    <>
      <Link href={'/'}>
        <Button type="primary">首页</Button>
      </Link>
    </>
  )
})

HeaderNav.displayName = 'HeaderNav'
export default HeaderNav
