export interface PaginationProps {
    totalCount: number,
    pageSize: number,
    siblingCount?: number,
    currentPage: number,
    onPageChange?: (v: number | string) => void
}