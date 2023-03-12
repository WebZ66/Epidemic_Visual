const express = require('express')
const axios = require('axios')
const app = express()

const router = express.Router()
app.use('/api', router)
router.get('/list', async (req, res) => {
  const result = await axios.get('https://r.inews.qq.com/gw/event/hot_ranking_list?ids_hash=&offset=0&page_size=10')
  res.json({
    data: result.data
  })
})

app.listen(3333, () => {
  console.log('localhost:3000')
})
