package media.kapital.librarybackend.dao;

import media.kapital.librarybackend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long>
{

}
