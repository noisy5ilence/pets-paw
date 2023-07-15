'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import NoItem from '@/components/NoItem';
import Paginator from '@/components/Paginator';
import breadcrumbsPortalId from '@/constants/breadcrumbsPortalId';
import useMounted from '@/hooks/useMounted';

import BreedsGrid from './components/BreedsGrid';
import Filters from './components/Filters';
import useBreeds from './useBreeds';
import { useQueryFilters } from './useFilters';

export default function Container() {
  const mounted = useMounted();
  const [photos, setPhotos] = useState<GridImage[]>([]);
  const { data: breeds, isFetched, isLoading } = useBreeds();
  const { filters, applyFilters } = useQueryFilters();

  const filtersNode =
    mounted &&
    createPortal(
      <Filters breeds={breeds || []} onFilter={setPhotos} isFetched={isFetched} />,
      document.getElementById(breadcrumbsPortalId)!
    );

  if (isFetched && !breeds?.length) {
    return (
      <>
        {filtersNode}
        <NoItem replace>No breeds found</NoItem>
      </>
    );
  }

  const isShowPaginator =
    Boolean(photos.length) &&
    photos.length !== breeds?.length &&
    photos.length >= (parseInt(filters.limit || '0') || breeds?.length || 0);

  return (
    <>
      {filtersNode}
      <BreedsGrid photos={photos} isLoading={isLoading}>
        {isShowPaginator && (
          <Paginator
            name='page'
            onChange={applyFilters}
            total={breeds?.length || 0}
            perPage={parseInt(filters.limit || '0')}
            page={parseInt(filters.page || '0')}
          />
        )}
      </BreedsGrid>
    </>
  );
}
