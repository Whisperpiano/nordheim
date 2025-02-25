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
import { Accordion, AccordionItem } from "@heroui/accordion";
import { formatNumber } from "../../../utils/formatNumber";
import { RiLogoutBoxLine } from "react-icons/ri";

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
        className="pt-[100px] max-w-[1440px] mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-6 md:py-20 mb-10 border border-gray-300 mt-6 text-center md:text-left">
          <div className=" font-condensed uppercase flex flex-col gap-3 md:gap-1.5">
            <h1 className="text-neutral-950 text-2xl font-semibold ">
              Hi there, {userProfile.userProfile.first_name}!
            </h1>
            <p className="text-neutral-500 font-medium">
              Welcome to your Nordheim account page
            </p>
          </div>
          <Button
            variant="secondary"
            size="md"
            font="primary"
            shape="square"
            onClick={handleLogout}
            className="bg-neutral-200/50 flex items-center gap-2 justify-center mt-6 w-full md:w-fit"
          >
            <RiLogoutBoxLine size={15} className="text-neutral-800" />
            Log out
          </Button>
        </div>

        <div className="border border-gray-300 rounded-none p-6 ">
          <h2 className="flex flex-col uppercase font-condensed font-semibold">
            <span className="text-base text-neutral-600">My</span>
            <span className="text-xl text-neutral-950">orders</span>
          </h2>
          {userProfile.userOrders.length > 0 ? (
            <Accordion
              selectionMode="multiple"
              defaultSelectedKeys={["0"]}
              variant="splitted"
              itemClasses={{
                base: "border border-gray-300 rounded-none px-0 shadow-none",
                content: "p-6 bg-neutral-50",
                trigger: "bg-neutral-200/50 p-6",
              }}
              className="px-0 mt-6 flex flex-col gap-3 "
            >
              {userProfile.userOrders.map((order, i) => {
                console.log(order);
                return (
                  <AccordionItem
                    key={i}
                    indicator={<span className="hidden"></span>}
                    aria-label={`Order ${order.id.split("-").pop()} details`}
                    title={
                      <>
                        <div className="flex flex-col md:flex-row justify-between w-full gap-3 md:gap-0">
                          <div className="flex flex-col md:flex-row gap-3 md:gap-16 items-start md:items-center">
                            <div className="flex flex-row items-center gap-2 md:gap-0 md:flex-col uppercase font-condensed font-semibold">
                              <span className="text-xs text-neutral-600">
                                Order number
                              </span>
                              <span className="text-sm text-neutral-950">
                                #{order.id.split("-").pop()}
                              </span>
                            </div>
                            <div className="flex flex-row items-center  gap-2 md:gap-0 md:flex-col uppercase font-condensed font-semibold">
                              <span className="text-xs text-neutral-600">
                                Date
                              </span>
                              <span className="text-sm text-neutral-950">
                                {order.created_at.split("T")[0]}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-start md:justify-end items-center">
                            <span className="uppercase font-condensed font-medium bg-green-100 text-green-800 text-xs px-2.5 py-0.5 translate-x-0 md:translate-x-3 ">
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </>
                    }
                  >
                    <div className="flex flex-col gap-6">
                      {order.order_items.map((item: OrderItem) => {
                        return (
                          <article className="flex gap-4 items-center">
                            <div className="relative inline-flex">
                              <img
                                src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${item.products.category}-images//${item.products.slug}-xs.webp`}
                                alt="City"
                                className="aspect-square w-[64px] object-cover"
                              />
                              <span className="absolute -top-3 -right-3 bg-gray-500 text-neutral-50  rounded-full text-xs font-medium font-condensed uppercase aspect-square w-6 grid place-content-center z-20">
                                {item.quantity}
                              </span>
                            </div>
                            <section className="flex-1">
                              <div className="flex justify-between items-center">
                                <span className="text-neutral-950 text-sm font-medium font-condensed">
                                  {item.products.title}
                                </span>
                                <span className="text-neutral-500 text-sm font-medium font-condensed">
                                  {formatNumber(item.products.price)} kr
                                </span>
                              </div>
                              <span className="text-neutral-500 text-xs font-normal font-condensed uppercase">
                                {item.variants.volume}L / {item.variants.color}
                              </span>
                            </section>
                          </article>
                        );
                      })}
                      <div className="flex border-t border-neutral-300/50 pt-6">
                        <span className="ml-auto text-sm text-neutral-950 ont-condensed font-semibold ">
                          kr {formatNumber(order.total_price)}
                        </span>
                      </div>
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ) : (
            <div className="mt-6 md:pb-52">
              <p className="text-neutral-700 font-sans text-sm font-light">
                You haven't placed any orders yet.
              </p>
            </div>
          )}
        </div>
        <section className="mb-10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10 6">
          <article className="border border-gray-300 p-6 flex flex-col gap-5">
            <h3 className="flex flex-col uppercase font-condensed font-semibold">
              <span className="text-base text-neutral-600">My</span>
              <span className="text-xl text-neutral-950">profile</span>
            </h3>

            <div className="text-neutral-950 font-sans text-sm font-light flex flex-col gap-1.5 mb-3 ">
              <p>
                {userProfile.userProfile.first_name}{" "}
                {userProfile.userProfile.last_name}
              </p>
              <p>{userProfile.userEmail}</p>
              <p>+47{userProfile.userProfile.phone}</p>
            </div>

            <Button variant={"secondary"} className="mt-auto bg-neutral-200/50">
              Edit
            </Button>
          </article>

          <article className="border border-gray-300 p-6 flex flex-col gap-5">
            <h3 className="flex flex-col uppercase font-condensed font-semibold">
              <span className="text-base text-neutral-600">My</span>
              <span className="text-xl text-neutral-950">addresses</span>
            </h3>

            <div className="text-neutral-950 font-sans text-sm font-light flex flex-col gap-1.5 ">
              {!userProfile.userProfile.address &&
              userProfile.userOrders.length > 0 ? (
                <>
                  <p>{userProfile.userOrders[0].shipping_address.address}</p>
                  <p>
                    {userProfile.userOrders[0].shipping_address.postal_code}{" "}
                    {userProfile.userOrders[0].shipping_address.city}
                  </p>
                  <p>{userProfile.userOrders[0].shipping_address.country}</p>
                </>
              ) : (
                <p>No address added yet</p>
              )}
            </div>
            <Button variant={"secondary"} className="mt-auto bg-neutral-200/50">
              Edit
            </Button>
          </article>
          <article className="border border-gray-300 p-6 flex flex-col gap-5">
            <h3 className="flex flex-col uppercase font-condensed font-semibold">
              <span className="text-base text-neutral-600">My</span>
              <span className="text-xl text-neutral-950">notifications</span>
            </h3>

            <div className="text-neutral-950 font-sans text-sm font-light flex flex-col gap-1.5 ">
              <p>This feature is not available yet.</p>
            </div>
            <Button
              variant={"secondary"}
              className="bg-neutral-200 mt-auto disabled:opacity-30 disabled:cursor-not-allowed"
              disabled
            >
              Edit
            </Button>
          </article>
        </section>
      </motion.section>
    </>
  );
}

// {userProfile.userOrders.length > 0 ? (
//   userProfile.userOrders.map((order) => {
//     return (
//       <div key={order.id}>
//         <h3 className="text-neutral-950 font-sans text-xl font-semibold mb-3 pt-10">
//           Order: #{order.id.split("-").pop()}
//         </h3>
//         <p className="text-neutral-700 font-sans text-sm font-light">
//           {order.total_price} NORD
//         </p>
//         <p className="text-neutral-700 font-sans text-sm font-light">
//           {order.status}
//         </p>
//         <div>
//           {order.order_items.map((item: OrderItem) => {
//             return (
//               <div key={item.id}>
//                 <p className="text-neutral-700 font-sans text-sm font-light">
//                   {item.quantity} x {item.products.title}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   })
// ) : (
//   <div>No orders yet</div>
// )}
