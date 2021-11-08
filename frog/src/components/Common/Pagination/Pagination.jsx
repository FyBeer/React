import paginationStyle from './pagination.module.css'

const Pagination = ({pageCount, currentPage, onPageChange}) => {
	let pages = []

	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
		
	}

	
	return (
		<ul className={paginationStyle.pagination}>
				<button className={paginationStyle.previous}></button>
				{pages.map(p => {
				 return	<li className={`${paginationStyle.paginationEl} ${currentPage === p && paginationStyle.selected}`} 
								 onClick={(e) => {onPageChange(p) }}>{p}
							</li>
				})}
				<button className={paginationStyle.next}></button>
			</ul>
	)
}

export default Pagination