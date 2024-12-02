import FoodDetailPage from "@/components/pages/foodDetail";
import { createClient } from "contentful";


export default async function FoodDetail({ params }) {
  const { foodId } = params; 


  const contentClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    host: "cdn.contentful.com",
  });

  const res = await contentClient.getEntries({
    content_type: "food",
    "sys.id": foodId,
  
  },);

  if (!res.items.length) {
    return (
      <div>
        <h1>Food not found</h1>
      </div>
    );
  }

  const food = res.items[0];
  console.log(food)
  console.log(foodId)
  return (
    <div>
      <FoodDetailPage food={food} />
    </div>
  );
}
