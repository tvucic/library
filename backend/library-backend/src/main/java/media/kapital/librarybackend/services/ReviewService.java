package media.kapital.librarybackend.services;

import media.kapital.librarybackend.responses.BookResponse;
import media.kapital.librarybackend.responses.ReviewResponse;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ReviewService
{
    List<ReviewResponse> getAllReviews(int page, int size);

    ReviewResponse getReviewById(String reviewId);
}
