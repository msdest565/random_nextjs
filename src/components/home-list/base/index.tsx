/* eslint-disable react/react-in-jsx-scope */
import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Image from 'next/image'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
  actionList?: ReactElement
}

const BaseItem: FC<IProps> = memo((props) => {
  const { actionList } = props

  return (
    <div className={styles.entry}>
      <div className={styles['meta-container']}>
        <a href="">前端</a>
        <a href="">后端</a>
      </div>

      <div className={styles.tag}>广告</div>

      <div className={styles['content-wrapper']}>
        <div className={styles.main}>
          <div className={styles.title}>测试测试
          </div>
          <div className={styles.desc}>
            <a href="">
            javascript
            </a>
          </div>
          {actionList && <ul className={styles['action-list']}>{actionList}</ul>}
        </div>

        <Image
          src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf97f488eb9848f08b75e22385376258~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
          width={120}
          height={80}
          alt=""
        />
      </div>
    </div>
  )
})

BaseItem.displayName = 'BaseItem'
export default BaseItem
