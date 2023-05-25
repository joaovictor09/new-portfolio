export const checkEnvironment = () => {
  const baseUrl =
    // eslint-disable-next-line
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:3000'
      : 'https://joaovictor09.dev'

  return baseUrl
}
