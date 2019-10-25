import {fetch} from '@/config/axios'
import {getStore} from '../config/mUtils'
// 获取首页默认地址
export const cityGuess = (json) => fetch('/v1/cities',{
  type: 'guess'
})
// 获取首页热门城市
export const hotCity = () => fetch('/v1/cities', {
  type: 'hot'
});
// 获取首页所有城市
export const groupCity = () => fetch('/v1/cities', {
  type: 'group'
});
// 获取当前所在城市
export const currentcity = number => fetch('/v1/cities/' + number);
// 获取用户信息
export const getUser = () => fetch('/v1/user', {
  /* eslint-disable camelcase */
  user_id: getStore('user_id')
  /* eslint-disable camelcase */
});