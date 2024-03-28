import React from 'react'

import { BreadcrumbItemProps } from '@/types/bread-crumb'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'

import { CustomBreadcrumb } from '../../_components/custom-breadcrumb'

interface BreadcrumbSectionProps {
  breadcrumb: BreadcrumbItemProps[]
}

export const BreadcrumbSection = ({ breadcrumb }: BreadcrumbSectionProps) => {
  return (
    <section className='bg-[#f7f7f7]'>
        <Container>
            <Box className='py-1.5 bg-[#f7f7f7]'>
              <CustomBreadcrumb breadcrumb={breadcrumb} />
            </Box>
        </Container>
    </section>
  )
}