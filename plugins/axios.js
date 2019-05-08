export default app =>{
    // 拦截器
    let axios = app.$axios;
    axios.defaults.timeout = 10000;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' 

    axios.onRequest(conf=>{

    })

    axios.onResponse(res=>{

    })

    axios.onError(err=>{

    })
}
