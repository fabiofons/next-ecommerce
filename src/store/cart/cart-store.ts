import type { CartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: CartProduct[];
  getTotalItems: () => number;
  getSummaryInformation: () => {
    totalItemsInCart: number;
    subtotal: number;
    taxes: number;
    total: number;
  };
  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProductFromCart: (product: CartProduct) => void;
}

export const useCartState = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((acc, product) => acc + product.quantity, 0);
      },

      getSummaryInformation: () => {
        const { cart } = get();
        const subtotal = cart.reduce((subtotal, item) => subtotal + item.quantity * item.price, 0);
        const taxes = subtotal * 0.15;
        const total = subtotal + taxes;
        const totalItemsInCart = cart.reduce((acc, product) => acc + product.quantity, 0);

        return {
          totalItemsInCart,
          subtotal,
          taxes,
          total,
        };
      },

      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        const isProductInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size,
        );

        if (!isProductInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        const updatedCart = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });

        set({ cart: updatedCart });
      },

      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();
        const updatedCart = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity };
          }
          return item;
        });
        set({ cart: updatedCart });
      },

      removeProductFromCart: (product: CartProduct) => {
        const { cart } = get();
        const updatedCart = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size,
        );
        set({ cart: updatedCart });
      },
    }),
    {
      name: 'shopping-cart',
    },
  ),
);
