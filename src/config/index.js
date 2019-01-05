const env = process.env.NODE_ENV
const dev = 'http://68.183.137.83/wordpress/wp-json/wp/v2'
const prod = 'http://68.183.137.83/wordpress/wp-json/wp/v2'

const cms = (target, query) => {
  if (env === 'production') return `${prod}/${target}?${query}`
  return `${dev}/${target}?${query}`
}

export {
  cms
}
