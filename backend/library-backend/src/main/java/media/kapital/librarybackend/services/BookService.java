package media.kapital.librarybackend.services;

import media.kapital.librarybackend.responses.BookResponse;
import org.springframework.stereotype.Service;

import java.util.List;

public interface BookService
{
    List<BookResponse> getAllBooks(int page, int size);

    long getAllBooksAvailableNumber();

    BookResponse getBookById(String bookId);
}
