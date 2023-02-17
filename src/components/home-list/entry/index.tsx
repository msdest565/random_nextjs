import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import BaseItem from '../base'

export interface IProps {
  children?: ReactElement
}

const EntryItem: FC<IProps> = memo(() => {
  // const { children } = props
  const actionList = (
    <>时间</>
  )

  return (
    <div className=''>
      <BaseItem actionList={actionList} />
    </div>
  )
})

EntryItem.displayName = 'EntryItem'
export default EntryItem
