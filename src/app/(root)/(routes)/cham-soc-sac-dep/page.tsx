import { BreadcrumbSection } from "../../_sections/beard-crumb"
import { CatelogueDetail } from "../../_sections/catelogue-detail"
import { TypeProducts } from "../../_sections/type-products"

const breadcrumb = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Chăm sóc sắc đẹp', href: '/cham-soc-sac-dep' },
]

export default function BeautyCare() {
  return (
    <div>
        <BreadcrumbSection breadcrumb={breadcrumb}/>
        <CatelogueDetail title='Chăm sóc sắc đẹp' />
        <TypeProducts />
    </div>
  )
}