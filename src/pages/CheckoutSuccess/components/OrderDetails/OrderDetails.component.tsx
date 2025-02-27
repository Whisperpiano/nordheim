import { Link } from "react-router";
import { UserOrder } from "../../../../lib/schemas/profileSchema";

import SuccessMessage from "./components/SuccessMessage/SuccessMessage.component";
import ConfirmedMessage from "./components/ConfirmedMessage/ConfirmedMessage.component";
import UpdatesMessage from "./components/UpdatesMessage/UpdatesMessage.component";
import CustomerInformation from "./components/CustomerInformation/CustomerInformation.component";

export default function OrderDetails({ order }: { order: UserOrder }) {
  return (
    <>
      <section className="flex flex-col gap-8 mt-8">
        <div className="max-w-[660px] flex flex-col justify-between">
          <div>
            <SuccessMessage name={order?.shipping_address.first_name} />

            <section className="flex flex-col gap-6">
              <ConfirmedMessage />
              <UpdatesMessage />
              <CustomerInformation order={order} />

              <Link
                to="/"
                className="flex justify-center items-center w-full bg-neutral-950 text-neutral-50 font-condensed tracking-widest uppercase text-sm font-lighter py-3 cursor-pointer mt-4"
              >
                Continue shopping
              </Link>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
