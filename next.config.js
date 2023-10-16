// next.config.js
const path = require('path')

module.exports = {

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // 이미지 호스트 설정
  images: {
    domains: ['a.espncdn.com'],
  },

};
