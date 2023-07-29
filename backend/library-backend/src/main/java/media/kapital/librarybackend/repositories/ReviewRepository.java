package media.kapital.librarybackend.repositories;

import media.kapital.librarybackend.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long>
{
    @Query(value="select * from review r where r.book_id = ?", nativeQuery=true)
    List<Review> findReviewsByBookId(String firstName);
}
