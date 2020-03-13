import request from '@/api/request.js'

export  function UserLogin(userInfo){
    return request({
        url:'/user/login',
        method:'post',
        data:userInfo
    })
}