import { BreadcrumbSection } from "../../_sections/beard-crumb"
import { CatelogueDetail } from "../../_sections/catelogue-detail"
import { TypeProducts } from "../../_sections/type-products"

const breadcrumb = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Thực phẩm chức năng', href: '/thuc-pham-chuc-nang' },
]

export default function FunctionalFoods() {
  return (
    <div>
        <BreadcrumbSection breadcrumb={breadcrumb}/>
        <CatelogueDetail title='Thực phẩm chức năng' />
        <TypeProducts />
    </div>
  )
}