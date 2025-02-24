import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { logoutUser } from "../../../api/auth/auth";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../store/authStore";
import { useEffect } from "react";
import { getUserProfile } from "../../../api/profile/profile";
import Button from "../../../components/Button/Button.component";
import { motion } from "framer-motion";
import { OrderItem } from "../../Checkout/CheckoutSuccess.page";

export default function Profile() {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/account/login");
    }
  }, [isLoggedIn, navigate]);

  const { mutate: logoutUserMutation } = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      toast.success("Logged out successfully!");
      navigate("/");
    },
    onError: () => {
      toast.error("Error logging out.");
    },
  });
  const handleLogout = () => {
    logoutUserMutation();
  };

  const { data: userProfile, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserProfile(),
  });

  if (isLoading || !userProfile) {
    return <div className="h-screen grid place-content-center">Loading...</div>;
  }

  console.log(userProfile);
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-[100px] max-w-[1580px] mx-auto"
      >
        <div className="flex items-center justify-between w-full py-10">
          <h1 className="text-neutral-950 font-condensed text-2xl font-semibold uppercase">
            Welcome back, {userProfile.userProfile.first_name}!
          </h1>
          <Button
            variant="primary"
            size="md"
            font="primary"
            shape="square"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>

        <div>
          <h2 className="text-neutral-950 font-sans text-xl font-semibold mb-3 border-t border-neutral-300/50 pt-10">
            My recent orders:
          </h2>
          {userProfile.userOrders.length > 0 ? (
            userProfile.userOrders.map((order) => {
              return (
                <div key={order.id}>
                  <h3 className="text-neutral-950 font-sans text-xl font-semibold mb-3 border-t border-neutral-300/50 pt-10">
                    Order: #{order.id.split("-").pop()}
                  </h3>
                  <p className="text-neutral-700 font-sans text-sm font-light">
                    {order.total_price} NORD
                  </p>
                  <p className="text-neutral-700 font-sans text-sm font-light">
                    {order.status}
                  </p>
                  <div>
                    {order.order_items.map((item: OrderItem) => {
                      console.log("item", item);

                      return (
                        <div key={item.id}>
                          <p className="text-neutral-700 font-sans text-sm font-light">
                            {item.quantity} x {item.products.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No orders yet</div>
          )}
        </div>
      </motion.section>
    </>
  );
}
