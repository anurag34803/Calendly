import ArticleCard from './ArticleCard'
import Pagination from './Pagination'
import { useState } from 'react';

function Articles() {
    // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

    return (
        <>
        <div className="articles my-4 ">
            <h2 className='text-xl mx-10 my-4'>Most Popular</h2>
            <div className="ArticleCards grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
               <ArticleCard bgcol="#8346f6"></ArticleCard>
               <ArticleCard bgcol="#006bfe"></ArticleCard>
               <ArticleCard bgcol="#004896"></ArticleCard>
               <ArticleCard bgcol="#004896"></ArticleCard>
               <ArticleCard></ArticleCard>
               <ArticleCard></ArticleCard>
               <ArticleCard></ArticleCard>
               <ArticleCard></ArticleCard>
               <ArticleCard></ArticleCard>
               <ArticleCard></ArticleCard>
               <ArticleCard></ArticleCard>
               <ArticleCard></ArticleCard>
            </div>

            <Pagination> currentPage={currentPage} 
          totalPages={5}
          onPageChange={onPageChange}
            </Pagination> 
        </div>          
        </>
    )
}

export default Articles