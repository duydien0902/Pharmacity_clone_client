import Link from "next/link"
import Image from "next/image"
import React, { Fragment } from "react"

import { Container } from "@/components/ui/container"
import { Box } from "@/components/ui/box"

const DATA = {
    about: {
        title: 'Về Pharmacity',
        list_info: [
            {
                lable: 'Giới thiệu',
                href:'/',
            },
            {
                lable: 'Hệ thống cửa hàng',
                href:'/',
            },
            {
                lable: 'Giấy phép kinh doanh',
                href:'/',
            },
            {
                lable: 'Quy chế hoạt động',
                href:'/',
            },
            {
                lable: 'Chính sách đổi trả',
                href:'/',
            },
            {
                lable: 'Chính sách giao hàng',
                href:'/',
            },
            {
                lable: 'Chính sách bảo mật',
                href:'/',
            },
            {
                lable: 'Chính sách thanh toán',
                href:'/',
            },
            {
                lable: 'Thể lệ chương trình thẻ thành viên',
                href:'/',
            },
        ]
    },
    catalogue: {
        title: 'Danh mục',
        list_info: [
            {
                lable: 'Thuốc',
                href:'/',
            },
            {
                lable: 'Thực phẩm chức năng',
                href:'/',
            },
            {
                lable: 'Chăm sóc cá nhân',
                href:'/',
            },
            {
                lable: 'Mẹ và Bé',
                href:'/',
            },
            {
                lable: 'Chăm sóc sắc đẹp',
                href:'/',
            },
            {
                lable: 'Thiết bị y tế',
                href:'/',
            },
            {
                lable: 'Sản phẩm tiện lợi',
                href:'/',
            },
            {
                lable: 'Chăm sóc sức khỏe',
                href:'/',
            },
            {
                lable: 'Nhãn hàng Pharmacity',
                href:'/',
            },
            {
                lable: 'Khuyến mãi HOT',
                href:'/',
            },
        ],
    },
    hotline: {
        title: 'Tổng đài CSKH',
        list_info: [
            {
                phone: '1800 6821',
                href: '/'
            }
        ]
    },
    follow_us: {
        title: 'Theo dõi chúng tôi trên',
        list_info: [
            {
                icon: '/icons/facebook.svg',
                lable: 'Facebook',
                href: '/'
            },
            {
                icon: '/icons/youtube.svg',
                lable: 'Youtobe',
                href: '/'
            },
            {
                icon: '/icons/zalo.svg',
                lable: 'Zalo',
                href: '/'
            },
        ],
    },
    install_app: {
        title: 'Tải ứng dụng Pharmacity ngay thôi',
        qr_code: '/images/footer/qr-code.png',
        list_info: [
            {
                href: '/',
                icon: '/images/footer/app-store.png'
            },
            {
                href: '/',
                icon: '/images/footer/google-play.png'
            }
        ]

    },
    sp_checkout: {
        title: 'Hỗ trợ thanh toán',
        list_info: [
            '/images/footer/checkout/COD.png',
            '/images/footer/checkout/JCB.png',
            '/images/footer/checkout/MasterCard.png',
            '/images/footer/checkout/Momo.png',
            '/images/footer/checkout/Visa.png',
            '/images/footer/checkout/ZaloPay.png',
        ],
        certify: [
            '/images/footer/BCT.png',
            '/images/footer/DMCA.png',
        ]
    },
    introduce: {
        title: 'Công Ty Cổ Phần Dược Phẩm Pharmacity',
        address: 'Trụ sở: 248A Nơ Trang Long, P.12, Q.Bình Thạnh, TP.Hồ Chí Minh',
        contact: 'Điện thoại: 1800 6821 - Email: cskh@pharmacity.vn',
        license: [
            'GCNDKDN: 0311770883 do sở KH & ĐT TP.HCM cấp lần đầu ngày 05/05/2012.',
            'GCNDDKKDD: 6782/DDKKDDD-ĐNai ngày cấp 26/4/2022 Sở Y Tế Tỉnh Đồng Nai.',
        ]
    }
}

export const Footer = () => {
    return (
        <footer className="bg-[#0072bc] pt-4">
            <div className="bg-[#ebebeb]">
                <Container className="bg-[#ebebeb] pb-2">
                    <Box className="border-b border-[#dedede] bg-[#ebebeb]">
                        <div className="grid grid-cols-10 gap-x-4">
                            <div className="col-span-6 grid grid-cols-10">
                                <div className="col-span-4 text-sm">
                                    <h4 className="font-bold mb-4">{DATA?.about?.title}</h4>
                                    <ul>
                                        {DATA?.about?.list_info.map((item, index) => (
                                            <li className="grid grid-flow-col pb-2 gap-1" key={index}>
                                                <Link href={item.href}>{item.lable}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-span-6 grid grid-cols-12">
                                    <div className="col-span-6 text-sm">
                                        <h4 className="font-bold mb-4">{DATA?.catalogue?.title}</h4>
                                        <ul>
                                            {DATA?.catalogue?.list_info.map((item, index) => (
                                                <li className="grid grid-flow-col pb-2 gap-1" key={index}>
                                                    <Link href={item.href}>{item.lable}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-span-6 text-sm">
                                        <h4 className="font-bold mb-4">{DATA?.hotline?.title}</h4>
                                        <ul>
                                            <li className="grid grid-flow-col gap-1">Hỗ trợ đặt hàng</li>
                                            {DATA?.hotline?.list_info.map((item, index) => (
                                                <li className="grid grid-flow-col pb-2 gap-1 text-[#0072bc] font-bold" key={index}>
                                                    <Link href={item.href}>{item.phone}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 place-content-between grid gap-4">
                                <div className="flex pb-4">
                                    <div className="w-[50%] sm:w-[40%] lg:flex-1 text-sm">
                                        <h4 className="font-bold mb-4">{DATA?.follow_us?.title}</h4>
                                        <ul>
                                            {DATA?.follow_us?.list_info.map((item, index) => (
                                                <li className="grid grid-flow-col pb-4 gap-1" key={index}>
                                                    <div className="flex items-center gap-x-2">
                                                        <Image src={item.icon} alt="" width={24} height={24} />
                                                        <Link href={item.href}>{item.lable}</Link>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="w-[50%] sm:w-[250px] text-sm">
                                        <h4 className="font-bold mb-4">{DATA?.install_app?.title}</h4>
                                        <div className="flex">
                                            <div className=" w-[85px]">
                                                <Image src={DATA?.install_app?.qr_code} alt="QR code" width={85} height={85} />
                                                <p className="py-2">Quét mã để tại ứng dụng</p>
                                            </div>
                                            <p className="px-5 py-2 sm:py-[15px]">Hoặc</p>
                                            <div className="flex flex-col gap-y-2">
                                                {DATA?.install_app?.list_info.map((item, index) => (
                                                    <Fragment key={index}>
                                                        <Link href={item.href}>
                                                            <Image src={item.icon} alt="install app" width={85} height={25} />
                                                        </Link>
                                                    </Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2 flex gap-x-6 text-sm">
                                    <div className="flex-1">
                                        <h4 className="font-bold mb-4">{DATA?.sp_checkout?.title}</h4>
                                        <div className="grid grid-cols-6 gap-x-4">
                                            {DATA?.sp_checkout?.list_info.map((item, index) => (
                                                <Fragment key={index}>
                                                    <Image src={item} alt="install app" width={47} height={33} />
                                                </Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-[85px] flex flex-col items-start gap-y-2">
                                        {DATA?.sp_checkout?.certify.map((item, index) => (
                                            <Fragment key={index}>
                                                <Image src={item} alt="install app" width={84} height={26} />
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Box className="bg-[#ebebeb]">
                        <div className="flex items-end">
                            <div className="basis-1/2">
                                <h4 className="font-bold mb-1 text-sm">{DATA?.introduce?.title}</h4>
                                <div className="text-xs text-[#2b2b2b]">
                                    <p>{DATA?.introduce?.address}</p>
                                    <p>{DATA?.introduce?.contact}</p>
                                </div>
                            </div>
                            <div className="basis-1/2">
                                {DATA?.introduce?.license.map((item, index) => (
                                    <div
                                        key={index}
                                        className="text-xs text-[#2b2b2b] text-right"
                                    >
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Box>
                </Container>
            </div>
        </footer>
    )
}