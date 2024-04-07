import { BreadcrumbSection } from "@/app/(root)/_sections/beard-crumb"
import { BoxPharmacity } from "./_sections/box-pharmacity"

const breadcrumb = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Thương hiệu', href: '/thuong-hieu' },
  { label: 'Pharmacity', href: '/shop/pharmacity' }
]

export default function Trademark() {
  return (
    <div>
        <BreadcrumbSection breadcrumb={breadcrumb}/>
        <BoxPharmacity />
    </div>
  )
}