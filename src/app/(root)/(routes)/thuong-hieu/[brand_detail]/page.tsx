import { BreadcrumbSection } from "@/app/(root)/_sections/beard-crumb"
import { DetailBrand } from "@/app/(root)/_sections/detail-brand"

export default function BrandDetail({ params }: { params: {brand_detail: string} }) {
    const { brand_detail } = params
    const breadcrumb = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Thương hiệu', href: '/thuong-hieu' },
        { label: 'Chi tiết thương hiệu', href: `/thuong-hieu/${brand_detail}` },
    ]

    return (
        <div>
            <BreadcrumbSection breadcrumb={breadcrumb} />
            <DetailBrand title={brand_detail}/>
        </div>
    )
}