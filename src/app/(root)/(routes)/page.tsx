import { Promotion } from "../_sections/promotion";
import { Services } from "../_sections/services";
import { FlashSale } from "../_sections/flash-sale";
import { BestSeller } from "../_sections/best-seller";
import { HomeMedicine } from "../_sections/home-medicine";
import { Brand } from "../_sections/brand";
import { Selection } from "../_sections/selection";
import { TakecareMom } from "../_sections/takecare-mom";
import { HightBrand } from "../_sections/hight-brand";
import { BestBrand } from "../_sections/best-brand";
import { BestProducts } from "../_sections/best-products";
import { Health } from "../_sections/health";
import { Testimonial } from "../_sections/testimonial";
import { IntroParagraph } from "../_sections/intro-paragraph";


export default function Home() {
  return (
    <div>
      <Promotion />
      <Services />
      <FlashSale />
      <BestSeller />
      <HomeMedicine />
      <Brand />
      <Selection />
      <TakecareMom />
      <HightBrand />
      <BestBrand />
      <BestProducts />
      <Health />
      <IntroParagraph />
      <Testimonial />
    </div>
  );
}
