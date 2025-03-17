export function DiscountBanner() {
  return (
    <div className="w-full bg-black text-white p-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 text-center">
      <div className="flex items-center">
        <span className="font-medium">Super discount for your</span>
        <span className="font-bold ml-1">first purchase</span>
      </div>
      <div className="border border-dashed border-white px-3 py-1">
        <span className="text-sm font-bold">FREE25CAD</span>
      </div>
      <div className="text-red-500">
        <span>Use discount code in the checkout!</span>
      </div>
    </div>
  )
}