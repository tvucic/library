package media.kapital.librarybackend.repositories;

import media.kapital.librarybackend.entity.Book;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends PagingAndSortingRepository<Book, Long>
{
}
