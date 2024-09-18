import HeroSection from "@/components/hero-section"

import ComponentsPreview from "@/components/components-preview"

export default async function IndexPage() {
  const getGithubRepoStars = async () => {
    const response = await fetch(
      "https://api.github.com/repos/HarjjotSinghh/zyflo",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        }
      }
    )
    const data = await response.json()
    return data.stargazers_count as number
  }

  const stars = await getGithubRepoStars()

  return (
    <>
      <HeroSection stars={stars} />
      <ComponentsPreview />
    </>
  )
}
