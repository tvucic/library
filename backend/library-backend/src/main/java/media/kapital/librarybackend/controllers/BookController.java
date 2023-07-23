package media.kapital.librarybackend.controllers;

import media.kapital.librarybackend.responses.BookResponse;
import media.kapital.librarybackend.services.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/books")
public class BookController
{
    private final BookService bookService;

    public BookController(BookService bookService)
    {
        this.bookService = bookService;
    }


    @GetMapping({"/", ""})
    public ResponseEntity<Object> getAllBooks(@RequestParam(value = "page" ,defaultValue = "0") int page, @RequestParam(value = "size" ,defaultValue = "10") int size)
    {
        try
        {
            List<BookResponse> bookResponses = bookService.getAllBooks(page, size);

            return new ResponseEntity<>(bookResponses, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{bookId}")
    public ResponseEntity<Object> getBookById(@PathVariable String bookId)
    {
        try
        {
            BookResponse bookResponse = bookService.getBookById(bookId);

            return new ResponseEntity<>(bookResponse, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/count")
    public ResponseEntity<Object> getAllBooksAvailableNumber()
    {
        try
        {
            long allBooksAvailableNumber = bookService.getAllBooksAvailableNumber();

            return new ResponseEntity<>(allBooksAvailableNumber, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
