'use client';
import { generatePaginationNumbers } from '@/utils';
import clsx from 'clsx';
import Link from 'next/link';

import { usePathname, useSearchParams } from 'next/navigation';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParams = searchParams.get('page');
  const currentPage = isNaN(Number(pageParams)) ? 1 : pageParams ? Number(pageParams) : 1;

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber === 0) {
      return `${pathname}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const pages = generatePaginationNumbers(currentPage, totalPages);

  return (
    <div className="flex justify-center mt-8 mb-32">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none gap-1">
          <li className="page-item disabled">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
              aria-disabled="true"
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>
          {pages.map((page, i) => (
            <li className="page-item" key={i}>
              <Link
                className={clsx(
                  'page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded focus:shadow-none',
                  {
                    'bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200':
                      currentPage !== page,
                    'bg-blue-600 text-white hover:bg-blue-600 hover:text-white':
                      currentPage === page,
                  },
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage + 1)}
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
