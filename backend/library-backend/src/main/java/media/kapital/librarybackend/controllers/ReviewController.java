package media.kapital.librarybackend.controllers;

import media.kapital.librarybackend.responses.BookResponse;
import media.kapital.librarybackend.responses.ReviewResponse;
import media.kapital.librarybackend.services.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/reviews")
public class ReviewController
{
    private final ReviewService reviewService;


    public ReviewController(ReviewService reviewService)
    {
        this.reviewService = reviewService;
    }

    @GetMapping({"/", ""})
    public ResponseEntity<Object> getAllReviews(@RequestParam(value = "page" ,defaultValue = "0") int page, @RequestParam(value = "size" ,defaultValue = "10") int size)
    {
        try
        {
            List<ReviewResponse> reviewResponses = reviewService.getAllReviews(page, size);

            return new ResponseEntity<>(reviewResponses, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{reviewId}")
    public ResponseEntity<Object> getBookById(@PathVariable String reviewId)
    {
        try
        {
            ReviewResponse reviewResponse = reviewService.getReviewById(reviewId);

            return new ResponseEntity<>(reviewResponse, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
