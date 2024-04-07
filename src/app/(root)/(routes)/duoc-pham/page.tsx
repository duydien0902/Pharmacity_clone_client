import { BreadcrumbSection } from "../../_sections/beard-crumb"
import { CatelogueDetail } from "../../_sections/catelogue-detail"
import { TypeProducts } from "../../_sections/type-products"

const breadcrumb = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Thuốc', href: '/duoc-pham' },
]

export default function Medicine() {
  return (
    <div>
        <BreadcrumbSection breadcrumb={breadcrumb}/>
        <CatelogueDetail title='Thuốc' />
        <TypeProducts />
    </div>
  )
}