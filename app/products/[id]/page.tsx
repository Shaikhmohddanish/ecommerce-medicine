import { redirect } from "next/navigation"

export default function ProductDetailPage() {
  // Redirect to home page since product details are shown in quick view
  redirect("/")
}
