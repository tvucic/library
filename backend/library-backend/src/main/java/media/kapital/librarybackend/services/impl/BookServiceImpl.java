package media.kapital.librarybackend.services.impl;


import media.kapital.librarybackend.entity.Book;
import media.kapital.librarybackend.repositories.BookRepository;
import media.kapital.librarybackend.responses.BookResponse;
import media.kapital.librarybackend.services.BookService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService
{
    static final Logger LOGGER = LogManager.getLogger(BookServiceImpl.class);

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository)
    {
        this.bookRepository = bookRepository;
    }

    public List<BookResponse> getAllBooks(int page, int size)
    {
        LOGGER.info("Get all books was called!");

        Pageable pageableRequest = PageRequest.of(page, size);

        Page<Book> bookPage = bookRepository.findAll(pageableRequest);

        List<Book> books = bookPage.getContent();

        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(books, new TypeToken<List<BookResponse>>(){}.getType());
    }

    public BookResponse getBookById(String bookId)
    {
        LOGGER.info("Get getBookById() was called " + bookId);

        Optional<Book> book = bookRepository.findById(Long.parseLong(bookId));

        BookResponse bookResponse = null;

        if (book.isPresent())
        {
            ModelMapper modelMapper = new ModelMapper();
            bookResponse =  modelMapper.map(book, new TypeToken<BookResponse>(){}.getType());
        }
        else
        {
            LOGGER.info("No book found with id " + bookId);
        }

        return bookResponse;
    }

    @Override
    public long getAllBooksAvailableNumber()
    {
        return bookRepository.count();
    }

}
