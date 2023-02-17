import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import style from './index.module.less'

import { HomeFooter } from './cpns'
import BaseLayout from '@/src/components/lauout'

export interface IProps {
  children?: ReactElement
}

const HomeLayout: FC<IProps> = memo((props) => {
  const { children } = props

  return (
    <BaseLayout>
      <div className='wrapper'>

        <div className={style.main}>
          <div className={style.left}>{ children }</div>

          <div className={style.right}>
            广告 <br />

            <HomeFooter/>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
})

HomeLayout.displayName = 'HomeLayout'
export default HomeLayout
