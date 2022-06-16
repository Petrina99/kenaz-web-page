import { Header, CategoriesBar, Banner } from "../components"

export const Home = () => {
  return (
    <>
      <Header />
      <CategoriesBar />
      <Banner bannerWidth={940} bannerHeight={120} />
    </>
  )
}
