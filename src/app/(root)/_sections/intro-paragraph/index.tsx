import React from 'react'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

export const IntroParagraph = () => {

  return (
    <section className='bg-white'>
        <Container>
            <Box>
                <Title>Chuỗi nhà thuốc uy tín hàng đầu Việt Nam</Title>
                {/* <div className='mt-4' dangerouslySetInnerHTML={{ __html:  }} /> */}
                <div className='mt-4'>
                    <div className='text-sm text-[#2b2b2b] flex flex-col gap-y-5'>
                        <p className='font-bold'>
                            Với hơn 12 năm hoạt động, Pharmacity tự hào là người bạn đồng hành tin cậy của hàng triệu người dân Việt Nam trên hành trình nâng cao chất lượng sức khỏe. Hệ thống gần 1000 nhà thuốc đạt chuẩn GPP trên toàn quốc trải dài 40 tỉnh thành, cùng đội ngũ gần 5000 Dược sĩ, Pharmacity mang đến dịch vụ chăm sóc sức khỏe tận tâm và trải nghiệm mua sắm tiện lợi cho mọi khách hàng.
                        </p>
                        <div>
                            <p className='font-bold'>Sản phẩm chính hãng, giá tốt </p>
                            <p>
                                Pharmacity cam kết cung cấp sản phẩm chính hãng, đa dạng từ thuốc cho các nhóm bệnh: <span className='font-bold'>Tiểu Đường, Huyết Áp, Mỡ Máu, Tiêu Hóa, Hô Hấp</span>,... đến thực phẩm chức năng, sản phẩm chăm sóc sức khỏe, sắc đẹp, thiết bị y tế thuộc các thương hiệu hàng đầu thế giới như: <span className='font-bold'>Abbott, GSK, Sanofi, Astrazeneca, Pfizer, Mega Lifesciences, Goodlife, L'oreal, Durex</span>,... và các thương hiệu uy tín tại Việt Nam như Dược Hậu Giang, Nam Hà,... Bên cạnh đó, chúng tôi luôn chú trọng bảo quản sản phẩm trong điều kiện tốt nhất, đảm bảo chất lượng đến tay người tiêu dùng.
                            </p>
                        </div>
                        <div>
                            <p className='font-bold'>Dược sĩ tận tâm, tư vấn chuyên nghiệp</p>
                            <p>Đội ngũ Dược sĩ Pharmacity được đào tạo bài bản, có chuyên môn cao và giàu kinh nghiệm. Luôn đặt lợi ích khách hàng lên hàng đầu, sẵn sàng tư vấn, giải đáp thắc mắc và hướng dẫn sử dụng sản phẩm hiệu quả, an toàn.</p>
                        </div>
                        <div>
                            <p className='font-bold'>Mua sắm tiện lợi, giao hàng nhanh chóng</p>
                            <p>
                                Thấu hiểu nhu cầu đa dạng của khách hàng, Pharmacity mang đến hệ thống mua sắm đa kênh vô cùng tiện lợi:<br/>
                                Mua trực tiếp tại nhà thuốc: Hệ thống gần 1000 nhà thuốc Pharmacity trải dài 40 tỉnh thành.<br/>
                                Mua hàng trực tuyến: Truy cập trang https://www.pharmacity.vn/ hoặc ứng dụng Pharmacity.<br/>
                                Giao hàng siêu tốc: Giao hàng nhanh chóng trong vòng 2 giờ tại các thành phố lớn.<br/>
                                Hợp tác với đối tác lớn, uy tín: Grab, Shopee, Lazada, Tiki…<br/>
                            </p>
                        </div>
                        <div>
                            <p className='font-bold'>Chính sách ưu đãi dành cho khách hàng thân thiết</p>
                            <p>Pharmacity triển khai chương trình P-Thành Viên hấp dẫn. Mỗi giao dịch mua sắm, khách hàng đều được tích điểm và có thể sử dụng điểm để trừ tiền cho các lần mua sau. Ngoài ra, Pharmacity luôn có các chương trình khuyến mãi, ưu đãi dành riêng cho khách hàng thân thiết.</p>
                        </div>
                        <div>
                            <p className='font-bold'>Lựa chọn Pharmacity,  lựa chọn an tâm cho sức khỏe bản thân và gia đình!</p>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    </section>
  )
}