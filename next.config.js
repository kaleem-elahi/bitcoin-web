module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/'},
      '/about': {
        page: '/about'
      },
      '/p/hello-nextjs': {
        page: '/post',
        query: {
          title: 'Hello Next.js'
        }
      },
    }
  }
}