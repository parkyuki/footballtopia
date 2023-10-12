// next.config.js
const path = require('path')

module.exports = {

  // 이미지 호스트 설정
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['a.espncdn.com'],
  },

};
