import { BreadcrumbSection } from "../../_sections/beard-crumb"
import { CatelogueDetail } from "../../_sections/catelogue-detail"
import { TypeProducts } from "../../_sections/type-products"

const breadcrumb = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Chăm sóc cá nhân', href: '/cham-soc-ca-nhan' },
]

export default function PersonalCare() {
  return (
    <div>
        <BreadcrumbSection breadcrumb={breadcrumb}/>
        <CatelogueDetail title='Chăm sóc cá nhân' />
        <TypeProducts />
    </div>
  )
}