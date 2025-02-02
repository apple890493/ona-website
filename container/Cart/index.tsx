import CartItems from '@/container/Cart/components/CartItems'
import { useCart } from '@/context/CarContext'

const Cart = () => {
  const { cartItemCount, cart, totalPrice, removeCartItem, updateCartItem } = useCart()

  return (
    <div className="mx-auto my-0 w-full lg:w-[80%] lg:pt-3xl">
      <CartItems
        itemCount={cartItemCount}
        cart={cart}
        totalPrice={totalPrice}
        onRemove={removeCartItem}
        onUpdate={updateCartItem}
      />
    </div>
  )
}

export default Cart
