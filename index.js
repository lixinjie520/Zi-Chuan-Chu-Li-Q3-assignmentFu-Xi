function getResult() {
  // 解題思路：字符串拼接
  
  let email = 'bernard@example.com'
  
  // 1.把 @ 之後的字串提取出來
  let end = email.slice(email.indexOf('@'))
  // console.log(end) //@example.com

  // 2.把 @ 之前的字串提出出來
  let begin = email.slice(0, email.indexOf('@'))
  // console.log(begin) // bernard

  // 3.加工字串
  let beginSliced = begin.slice(0, Math.floor(begin.length / 2))
  //console.log(beginSliced) // ber
  beginSliced += '...'

  // 4.拼接字串
  email = beginSliced + end

  // 輸出
  console.log(email)
}
getResult()

module.exports = {
  getResult
}