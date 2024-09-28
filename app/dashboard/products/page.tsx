import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
      </div>
      <div className="border shadow-sm rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4 p-8">
          <h2 className="text-2xl font-bold tracking-tight">No products yet</h2>
          <p className="text-sm text-muted-foreground">
          <div>You don&apos;t have any products yet.</div> Add your first product to get started.
          </p>
          <Button>Add Product</Button>
        </div>
      </div>
    </main>
  )
}
