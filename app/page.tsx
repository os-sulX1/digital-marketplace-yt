import NewestProduct from "@/components/NewestProduct";
import {ProductRow} from "@/components/ProductRow";
import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <div className="max-w-3xl mx-auto text-2xl sm:text-5xl lg:text-6xl font-semibold text-center">
        <h1 >Find the best Tailwind</h1>
        <h1 className="text-primary">Template & Icons</h1>
        <p className="lg:text-lg text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, tempora ad repellendus exercitationem voluptate veritatis molestias. Quidem doloribus officiis sapiente .
        </p>
      </div>
      <ProductRow category={'newest'} />
      <ProductRow category={'templates'} />
      <ProductRow category={'icons'} />
      <ProductRow category={'uikits'} />
    </section>
   
  );
}
