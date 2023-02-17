/* eslint-disable react/react-in-jsx-scope */
import type { ReactElement } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import HomeLayout from '../components/lauout/home'
import { EntryItem } from '../components/home-list'
import type { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('https://sos.staraway.love/api/layouts/1?populate=*')
      console.log(data.data.data.header_navs)
    }
    fetchData()
    console.log('Home')
  }, [])
  return (
    <div>
      <h2>推荐  最新  热榜</h2>
      <EntryItem />
      <EntryItem />
      <EntryItem />
      <EntryItem />
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <HomeLayout>{page}</HomeLayout>
    </>
  )
}

Home.displayName = 'Home'
export default Home
