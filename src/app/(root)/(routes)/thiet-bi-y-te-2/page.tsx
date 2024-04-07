import { BreadcrumbSection } from "../../_sections/beard-crumb"
import { CatelogueDetail } from "../../_sections/catelogue-detail"
import { TypeProducts } from "../../_sections/type-products"

const breadcrumb = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Thiết bị y tế', href: '/thiet-bi-y-te-2' },
]

export default function MedicalEquipment() {
  return (
    <div>
        <BreadcrumbSection breadcrumb={breadcrumb}/>
        <CatelogueDetail title='Thiết bị y tế' />
        <TypeProducts />
    </div>
  )
}