'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import NoItem from '@/components/NoItem';
import Paginator from '@/components/Paginator';
import breadcrumbsPortalId from '@/constants/breadcrumbsPortalId';
import useMounted from '@/hooks/useMounted';
import useQueryFilters from '@/hooks/useQueryFilters';

import BreedsGrid from './components/BreedsGrid';
import Filters from './components/Filters';
import useBreeds from './useBreeds';
import { QueryFilters } from './useFilters';

export default function Container({ initialData }: { initialData: Breed[] }) {
  const mounted = useMounted();
  const [images, setImages] = useState<ImageWithName[]>([]);
  const { data: breeds, isFetched } = useBreeds({ suspense: true });
  const { filters, applyFilters } = useQueryFilters<QueryFilters>();
  const gridRef = useRef<HTMLDivElement>(null);

  const filtersNode =
    mounted &&
    createPortal(
      <Filters breeds={breeds || []} onFilter={setImages} isFetched={isFetched} />,
      document.getElementById(breadcrumbsPortalId)!
    );

  useEffect(() => {
    gridRef.current?.scrollTo({ behavior: 'smooth', top: 0 });
  }, [filters.limit, filters.page]);

  if (isFetched && !breeds?.length) {
    return (
      <>
        {filtersNode}
        <NoItem replace>No breeds found</NoItem>
      </>
    );
  }

  const isShowPaginator =
    Boolean(images.length) &&
    images.length !== breeds?.length &&
    images.length >= (parseInt(filters.limit || '0') || breeds?.length || 0);

  return (
    <>
      {filtersNode}
      <BreedsGrid images={images} ref={gridRef}>
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
