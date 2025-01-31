import { IoMdTrophy } from 'react-icons/io'
import { MdOutlineStar } from 'react-icons/md'

import ProductCard from '@/components/ProductCard'
import { TOP_PRODUCTS } from '@/constants/products'

const Home = () => {
  return (
    <>
      <div className="text-center text-rose-300 font-bold tracking-widest lg:text-4xl">
        產品全面１件９折 / ２件以上８.5折（除了 Rica & 京喚羽）
      </div>
      <h1 className="py-4xl text-center text-4xl text-teal-900 font-bold tracking-widest">熱門商品</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-3xl">
        {TOP_PRODUCTS.map((product, index) => (
          <div key={product.id}>
            <div className="mb-4 flex items-center justify-center text-4xl text-red-500 font-bold">
              <>
                <span className="ml-2">{index + 1}</span>
                {index === 0 ? <IoMdTrophy size={30} /> : <MdOutlineStar size={30} />}
              </>
            </div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
