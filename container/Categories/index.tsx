import { useRouter } from 'next/router'

const Categories = () => {
  const router = useRouter()
  const { category } = router.query

  return <div>category: {category}</div>
}

export default Categories
