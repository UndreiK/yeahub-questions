import { useState } from 'react'
import styles from './styles.module.css'

type PaginationProps = {
  handlePageChange: (page: number) => void
  totalPages: number
  maxVisibleButtons?: number
}

const Pagination = ({
  handlePageChange,
  totalPages,
  maxVisibleButtons = 5,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  if (totalPages <= 1) return null

  function handlePage(page: number) {
    handlePageChange(page)
    setCurrentPage(page)
  }

  const createPageNumbers = () => {
    const pages: (number | '...')[] = []
    const sideButtons = Math.floor((maxVisibleButtons - 1) / 2)

    let start = Math.max(1, currentPage - sideButtons)
    let end = Math.min(totalPages, currentPage + sideButtons)

    if (currentPage - sideButtons < 1) {
      end = Math.min(totalPages, maxVisibleButtons)
    }

    if (currentPage + sideButtons > totalPages) {
      start = Math.max(1, totalPages - maxVisibleButtons + 1)
    }

    if (start > 1) {
      pages.push(1)
      if (start > 2) pages.push('...')
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = createPageNumbers()

  function incrementPage() {
    if (currentPage < totalPages) {
      handlePage(currentPage + 1)
    }
  }

  function decrementPage() {
    if (currentPage > 1) {
      handlePage(currentPage - 1)
    }
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={decrementPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((page, index) =>
        page === '...' ? (
          <button className={styles.button} key={`dots-${index}`} disabled>
            ...
          </button>
        ) : (
          <li key={index}>
            <button
              className={`${
                currentPage !== page ? styles.button : styles.button_active
              }`}
              onClick={() => handlePage(page)}
            >
              {page}
            </button>
          </li>
        )
      )}
      <button
        className={styles.button}
        onClick={incrementPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
