import { Navigate } from "react-router";
import { useCartStore } from "../../../store/cartStore";
import React from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const cart = useCartStore((state) => state.cart);

  return cart.length === 0 ? <Navigate to="/" /> : children;
}
