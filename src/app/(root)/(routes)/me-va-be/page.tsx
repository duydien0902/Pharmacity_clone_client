import { BreadcrumbSection } from "../../_sections/beard-crumb"
import { CatelogueDetail } from "../../_sections/catelogue-detail"
import { TypeProducts } from "../../_sections/type-products"

const breadcrumb = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Mẹ và bé', href: '/me-va-be' },
]

export default function MotherAndBaby() {
  return (
    <div>
        <BreadcrumbSection breadcrumb={breadcrumb}/>
        <CatelogueDetail title='Mẹ và bé' />
        <TypeProducts />
    </div>
  )
}