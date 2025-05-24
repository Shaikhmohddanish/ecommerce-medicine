import { redirect } from "next/navigation"

export default function ProductsPage() {
  // Redirect to home page since all products are shown there
  redirect("/")
}
