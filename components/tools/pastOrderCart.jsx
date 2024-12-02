export default function PastOrderCart() {
  return (
    <div className="mdcard bg-accent w-96 rounded-[24px] pb-4">
      <figure className="px-10 pt-5 h-40 w-150 mx-auto">
        <img
          src="https://media.istockphoto.com/id/1352766113/vector/fast-food-meal-of-hamburger-french-fries-and-soft-drinks-junk-food.jpg?s=612x612&w=0&k=20&c=YPZy3fJR6iq84VsvFlLXj5I8WcMzJj_Adk_em7_F_uk="
          alt="Shoes"
          className="h-full w-full rounded-xl object-cover"
        />
      </figure>
      <div className="mdcard-body items-center text-center">
        <h2 className="mdcard-title text-black my-2">
          Your order Date from Restaurant
        </h2>
        <div className="flex flex-row space-x-2 justify-center mx-10">
          <button className="bg-green-500 rounded-[24px] py-3 px-6 text-white">
            Reorder
          </button>
          <button className="bg-sky-400 rounded-[24px] py-3 px-6 text-white">
            Rate
          </button>
          <button className="bg-red-600 rounded-[24px] py-3 px-6 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
