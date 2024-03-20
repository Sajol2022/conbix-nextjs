
const Pagination = ({ currentPage, handlePrevPage, totalPages, handleNextPage, setCurrentPage,}) => {
    return (
        <div className="row t-center mt-25">
            <div className="col-xl-12">
                <div className="theme__pagination">
                    <ul>
                        <li>
                            <span
                                className={`${currentPage === 0 ? "d-none" : ""}`}
                                onClick={handlePrevPage}
                            ><i className="fas fa-chevron-double-left"></i></span>
                        </li>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <li key={index}>
                                <span
                                className={`${currentPage === index ? "active" : ""}`}
                                onClick={() => setCurrentPage(index)}
                                >{index + 1}</span>
                            </li>
                        ))}
                        <li>
                            <span
                                className={`${currentPage === totalPages - 1 ? "d-none" : ""}`}
                                onClick={handleNextPage}
                            ><i className="fas fa-chevron-double-right"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
