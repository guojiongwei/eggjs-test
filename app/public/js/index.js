axios.post('/post', { name: '郭炯韦', age: 20, _csrf: csrf }).then(res => {
  console.log(res)
})