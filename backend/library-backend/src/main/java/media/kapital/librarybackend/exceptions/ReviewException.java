package media.kapital.librarybackend.exceptions;

public class ReviewException extends Exception
{
    public String message;

    public ReviewException(String message)
    {
        super(message);
    }
}
