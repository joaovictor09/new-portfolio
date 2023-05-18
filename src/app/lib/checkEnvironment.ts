export const checkEnvironment = () => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://joaovictor09.dev'

  return baseUrl
}
