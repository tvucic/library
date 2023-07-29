package media.kapital.librarybackend.services.impl;

import media.kapital.librarybackend.entity.Book;
import media.kapital.librarybackend.entity.Review;
import media.kapital.librarybackend.exceptions.ReviewException;
import media.kapital.librarybackend.repositories.ReviewRepository;
import media.kapital.librarybackend.responses.BookResponse;
import media.kapital.librarybackend.responses.ReviewResponse;
import media.kapital.librarybackend.services.ReviewService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService
{

    static final Logger LOGGER = LogManager.getLogger(BookServiceImpl.class);

    private final ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository)
    {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public List<ReviewResponse> getAllReviews(int page, int size)
    {
            LOGGER.info("Get all reviews was called!");

            Pageable pageableRequest = PageRequest.of(page, size);

            Page<Review> reviewPage = reviewRepository.findAll(pageableRequest);

            List<Review> reviews = reviewPage.getContent();

            ModelMapper modelMapper = new ModelMapper();
            return modelMapper.map(reviews, new TypeToken<List<ReviewResponse>>(){}.getType());

    }

    @Override
    public ReviewResponse getReviewById(String reviewId) throws ReviewException
    {
        LOGGER.info("Get getReviewById() was called " + reviewId);

        Optional<Review> review = reviewRepository.findById(Long.parseLong(reviewId));

        ReviewResponse reviewResponse = null;

        if (review.isPresent())
        {
            ModelMapper modelMapper = new ModelMapper();
            reviewResponse =  modelMapper.map(review, new TypeToken<ReviewResponse>(){}.getType());
        }
        else
        {
            LOGGER.info("No review found with id " + reviewId);
            throw  new ReviewException("No review found with id " + reviewId);
        }

        return reviewResponse;
    }

    public List<ReviewResponse> getReviewsByBookId(String bookId)
    {
        LOGGER.info("getReviewsByBookId() ");

        List<Review> reviewsByBookId = reviewRepository.findReviewsByBookId(bookId);


        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(reviewsByBookId, new TypeToken<List<ReviewResponse>>(){}.getType());


    }
}
