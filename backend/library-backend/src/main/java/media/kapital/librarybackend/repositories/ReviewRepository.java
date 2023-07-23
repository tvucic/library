package media.kapital.librarybackend.repositories;

import media.kapital.librarybackend.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long>
{
}
