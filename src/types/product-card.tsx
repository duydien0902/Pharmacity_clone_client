export interface ProductCardProps {
    id: string | number,
    discount?: string | number,
    thumbnail: string,
    gift?: boolean,
    voucher?: boolean,
    flash_ship?: boolean,
    title: string,
    basis_price?: string | number,
    price: string | number,
    like: string | number,
    sold: string | number,
    trending?: boolean  
}