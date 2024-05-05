import BrandLogo from "../ui/brand/logo";
import { fetchBrands } from "../lib/brands/brands";

interface Brand {
  name: string;
  imageName: string;
}

export default async function Page() {
  const brands: Brand[] = await fetchBrands();
  return (
    <div className="p-10">
      <div className="grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-2">
        {brands.map((brand: Brand, index: number) => (
          <BrandLogo key={index} name={brand.name} imageName={brand.imageName}/>
        ))}
      </div>
    </div>
  );
}
