import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';
import { SearchBook } from './components/SearchBook';
import { SpinnerLoading } from '../utils/SpinerLoading';
import React from 'react';
import { Pagination } from '../utils/Pagination';

export const SearchBooksPage = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(5);

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = "http://localhost:9091/v1/api/books";

            let url: string = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            //setTotalAmountOfBooks(responseJson.page.totalElements);
            //setTotalPages(responseJson.page.totalPages);


            const loadedBooks: BookModel[] = [];

            for (const key in responseJson) {
                loadedBooks.push({
                    id: responseJson[key].id,
                    title: responseJson[key].title,
                    author: responseJson[key].author,
                    description: responseJson[key].description,
                    copies: responseJson[key].copies,
                    copiesAvailable: responseJson[key].copiesAvailable,
                    category: responseJson[key].category,
                    img: responseJson[key].img,
                });
            }

            setBooks(loadedBooks);
            setIsLoading(false);
        };
        fetchBooks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
        window.scrollTo(0, 0);
    }, [currentPage]);

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }


    const indexOfLastBook: number = currentPage * booksPerPage;
    const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
    let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ? booksPerPage * currentPage : totalAmountOfBooks;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='container'>
                <div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <div className='d-flex'>
                                <input className='form-control me-2' type='search' placeholder='Search' aria-labelledby='Search'/>
                                <button className='btn btn-outline-success'>Search</button>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='dropdown'>
                                <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
                                    Category
                                </button>
                                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            All
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Front End
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Back End
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Data
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            DevOps
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h5>Number of results: (22)</h5>
                    </div>
                    <p>
                        1 to 5 of 22 items:
                    </p>
                    {books.map(book => (
                        <SearchBook book={book} key={book.id} />
                    ))}
                    {
                        totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
                    }
                </div>
            </div>
        </div>
    );
}