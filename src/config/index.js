const env = process.env.NODE_ENV
const cms = (target, query) => `https://cms.marauturismo.com/wp-json/wp/v2/${target}?${query}`
const mail = (env === 'production' ? 'https://mail.marauturismo.com/' : 'http://localhost:8000/') + 'api/contact'

export {
  cms, mail
}
