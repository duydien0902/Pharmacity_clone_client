import { BreadcrumbSection } from "../../_sections/beard-crumb"
import { AllBrands } from "../../_sections/all-brands"

const breadcrumb = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Thương hiệu', href: '/thuong-hieu' },
]

export default function Trademark() {
  return (
    <div>
        <BreadcrumbSection breadcrumb={breadcrumb}/>
        <AllBrands title="Tất cả thương hiệu" />
    </div>
  )
}