package media.kapital.librarybackend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReviewResponse
{
    private long id;

    private String userEmail;

    private double rating;

    private String reviewDescription;

    private long bookId;

    private String date;
}
