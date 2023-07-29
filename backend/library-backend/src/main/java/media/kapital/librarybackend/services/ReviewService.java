package media.kapital.librarybackend.services;

import media.kapital.librarybackend.entity.Review;
import media.kapital.librarybackend.exceptions.ReviewException;
import media.kapital.librarybackend.responses.ReviewResponse;

import java.util.List;

public interface ReviewService
{
    List<ReviewResponse> getAllReviews(int page, int size);

    ReviewResponse getReviewById(String reviewId) throws ReviewException;

    List<ReviewResponse> getReviewsByBookId(String firstName);
}
