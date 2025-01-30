import { useRouter } from 'next/router'

import ProductCard from '@/components/ProductCard'
import { MENU_CONFIG } from '@/constants/menu'
import { PRODUCTS } from '@/constants/products'

const Categories = () => {
  const router = useRouter()
  const { category } = router.query
  const currentCategory = MENU_CONFIG.find((menu) => menu.path === category)?.label
  const products = PRODUCTS.filter((product) => product.type === category)

  return (
    <>
      <h1 className="pb-4xl text-center text-4xl text-teal-900 font-bold tracking-widest">{currentCategory}</h1>
      <div className="grid grid-cols-2 gap-sm lg:grid-cols-4 md:grid-cols-3 md:gap-lg">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Categories
