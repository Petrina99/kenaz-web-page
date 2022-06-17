import { 
  Header,
  CategoriesBar,
  Banner,
  ImageSlider
} from "../components"

export const Home = () => {
  return (
    <>
      <Header />
      <CategoriesBar />
      <Banner bannerWidth={940} bannerHeight={120} />
      <ImageSlider />
    </>
  )
}
