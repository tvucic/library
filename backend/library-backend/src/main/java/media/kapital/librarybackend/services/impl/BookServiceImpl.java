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

import java.util.ArrayList;
import java.util.List;

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
        LOGGER.info("Get all topics was called!");

        Pageable pageableRequest = PageRequest.of(page, size);

        Page<Book> bookPage = bookRepository.findAll(pageableRequest);

        List<Book> books = bookPage.getContent();

        ModelMapper modelMapper = new ModelMapper();

        return modelMapper.map(books, new TypeToken<List<BookResponse>>(){}.getType());
    }
}
