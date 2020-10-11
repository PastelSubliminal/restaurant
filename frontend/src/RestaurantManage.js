import React, { Suspense, useEffect, useState } from 'react'
import { Switch, Link, Route, withRouter, useHistory } from 'react-router-dom'
import OrderManage from './OrderManage'
import FoodManage from './FoodManage'
import DeskManage from './DeskManage'
import AddFood from './AddFood'
import api from './api'
import createFetcher from './create-fetcher'
import history from './history'

const userInfoFetcher = createFetcher(async () => {
  return api.get('/userinfo').catch(() => {
    // window.history.hash = '/'
    history.push('/')
  })
})


function RestaurantInfo() {
  // var history = useHistory()
  // var [info, setInfo] = useState(null)

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let response = await api.get('/userinfo')
  //       console.log(response)
  //       setInfo(response.data)
  //     } catch(e) {
  //       history.push('/')
  //     }
  //   })()
  // }, [history])

  var info = userInfoFetcher.read().data
  
  return (
    <div>
      {info &&
        '欢迎：' + info.title
      }
    </div>
  )
}

export default withRouter(function(props) {

  console.log('==============', history == props.history)

  async function logout() {
    await api.get('/logout')
    userInfoFetcher.clearCache()
    props.history.push('/')
  }

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <RestaurantInfo />
      </Suspense>
      <nav>
        <ul>
          <li>
            <Link to="order">订单管理</Link>
          </li>
          <li>
            <Link to="food">菜品管理</Link>
          </li>
          <li>
            <Link to="desk">桌面管理</Link>
          </li>
          <li>
            <button onClick={logout}>退出</button>
          </li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route path="/restaurant/:rid/manage/order" component={OrderManage}/>
          <Route path="/restaurant/:rid/manage/food" component={FoodManage}/>
          <Route path="/restaurant/:rid/manage/desk" component={DeskManage}/>
          <Route path="/restaurant/:rid/manage/add-food" component={AddFood}/>
        </Switch>
      </main>
    </div>
  )
})
