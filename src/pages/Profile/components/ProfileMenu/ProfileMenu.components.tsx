import Button from "../../../../components/Button/Button.component";
import { ProfileMenuProps } from "./ProfileMenu.types";

export default function ProfileMenu({
  userProfile,
  userEmail,
  userOrders,
}: ProfileMenuProps) {
  return (
    <section className="mb-10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10 6">
      {/* Profile details */}
      <article className="border border-gray-300 p-6 flex flex-col gap-5">
        <h3 className="flex flex-col uppercase font-condensed font-semibold">
          <span className="text-base text-neutral-600">My</span>
          <span className="text-xl text-neutral-950">profile</span>
        </h3>

        <div className="text-neutral-950 font-sans text-sm font-light flex flex-col gap-1.5 mb-3 ">
          <p>
            {userProfile.first_name} {userProfile.last_name}
          </p>
          <p>{userEmail}</p>
          <p>+47{userProfile.phone}</p>
        </div>

        <Button variant={"secondary"} className="mt-auto bg-neutral-200/50">
          Edit
        </Button>
      </article>

      {/* Addresses */}
      <article className="border border-gray-300 p-6 flex flex-col gap-5">
        <h3 className="flex flex-col uppercase font-condensed font-semibold">
          <span className="text-base text-neutral-600">My</span>
          <span className="text-xl text-neutral-950">addresses</span>
        </h3>

        <div className="text-neutral-950 font-sans text-sm font-light flex flex-col gap-1.5 ">
          {!userProfile.address && userOrders && userOrders.length > 0 ? (
            <>
              <p>{userOrders[0].shipping_address.address}</p>
              <p>
                {userOrders[0].shipping_address.postal_code}{" "}
                {userOrders[0].shipping_address.city}
              </p>
              <p>{userOrders[0].shipping_address.country}</p>
            </>
          ) : (
            <p>No address added yet</p>
          )}
        </div>
        <Button variant={"secondary"} className="mt-auto bg-neutral-200/50">
          Edit
        </Button>
      </article>

      {/* Notifications */}
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
  );
}
