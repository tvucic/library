import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import ReviewModel from "../../models/ReviewModel";
import { SpinnerLoading } from "../utils/SpinerLoading";
import { StarsReview } from "../utils/StarsReview";
import { CheckoutAndReviewBox } from "./CheckoutAndReviewBox";
import { LatestReviews } from "./LatestReviews";

const BookCheckoutPage = () => {

const [book, setBook] = useState<BookModel>();
const [isLoading, setIsLoading] = useState(true);
const [httpError, setHttpError] = useState(null);

// Review State
const [reviews, setReviews] = useState<ReviewModel[]>([])
const [totalStars, setTotalStars] = useState(0);
const [isLoadingReview, setIsLoadingReview] = useState(true);

const [isReviewLeft, setIsReviewLeft] = useState(false);
const [isLoadingUserReview, setIsLoadingUserReview] = useState(true);

const bookId = (window.location.pathname).split('/')[2];

  useEffect(() => {
    const fetchBook = async () => {                                          //       0            1       2
        const baseUrl: string = `http://localhost:9091/v1/api/books/${bookId}`; // localhost:3000/checkout/<bookId>

        const response = await fetch(baseUrl);

        
        if (!response.ok) 
        {
            throw new Error('Something went wrong!');
        }

        const responseJson = await response.json();

        const loadedBook: BookModel = {
            id: responseJson.id,
            title: responseJson.title,
            author: responseJson.author,
            description: responseJson.description,
            copies: responseJson.copies,
            copiesAvailable: responseJson.copiesAvailable,
            category: responseJson.category,
            img: responseJson.img,
        };
        setBook(loadedBook);
        setIsLoading(false);
    };
    fetchBook().catch((error: any) => {
        setIsLoading(false);
        setHttpError(error.message);
    })
}, []);

useEffect(() => {
    const fetchBookReviews = async () => {
        const reviewUrl: string = `http://localhost:8080/v1/api/reviews/search/${bookId}`;

        const responseReviews = await fetch(reviewUrl);

        if (!responseReviews.ok) {
            throw new Error('Something went wrong!');
        }

        const responseJsonReviews = await responseReviews.json();

        console.log("responseJsonReviews ", responseJsonReviews)

        const loadedReviews: ReviewModel[] = [];

        let weightedStarReviews: number = 0;

        for (const key in responseJsonReviews) {
            console.log("key ", key)
            loadedReviews.push({
                id: responseJsonReviews[key].id,
                userEmail: responseJsonReviews[key].userEmail,
                date: responseJsonReviews[key].date,
                rating: responseJsonReviews[key].rating,
                book_id: responseJsonReviews[key].bookId,
                reviewDescription: responseJsonReviews[key].reviewDescription,
            });
            weightedStarReviews = weightedStarReviews + responseJsonReviews.rating;
        }

        if (loadedReviews) {
            const round = (Math.round((weightedStarReviews / loadedReviews.length) * 2) / 2).toFixed(1);
            setTotalStars(Number(round));
        }

        setReviews(loadedReviews);
        setIsLoadingReview(false);
    };

    fetchBookReviews().catch((error: any) => {
        setIsLoadingReview(false);
        setHttpError(error.message);
    })
}, []);


if (isLoading || isLoadingReview) {
  return (
      <SpinnerLoading />
  )
}

if (httpError) {
  return (
      <div className='container m-5'>
          <p>{httpError}</p>
      </div>
  )
}
console.log(reviews)
  return (
    <div>
    <div className='container d-none d-lg-block'>
        <div className='row mt-5'>
            <div className='col-sm-2 col-md-2'>
                {book?.img ?
                    <img src={book?.img} width='226' height='349' alt='Book' />
                    :
                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')} width='226'
                        height='349' alt='Book' />
                }
            </div>
            <div className='col-4 col-md-4 container'>
                <div className='ml-2'>
                    <h2>{book?.title}</h2>
                    <h5 className='text-primary'>{book?.author}</h5>
                    <p className='lead'>{book?.description}</p>
                    <StarsReview rating={totalStars} size={32}/>
                </div>
            </div>
            <CheckoutAndReviewBox book={book} mobile={false} />
        </div>
        <hr />
        <LatestReviews reviews={reviews} bookId={book?.id} mobile={false} />
    </div>
    <div className='container d-lg-none mt-5'>
        <div className='d-flex justify-content-center align-items-center'>
            {book?.img ?
                <img src={book?.img} width='226' height='349' alt='Book' />
                :
                <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')} width='226'
                    height='349' alt='Book' />
            }
        </div>
        <div className='mt-4'>
            <div className='ml-2'>
                <h2>{book?.title}</h2>
                <h5 className='text-primary'>{book?.author}</h5>
                <p className='lead'>{book?.description}</p>
                <StarsReview rating={totalStars} size={32}/>
            </div>
        </div>
        <CheckoutAndReviewBox book={book} mobile={true} />
        <hr />
        <LatestReviews reviews={reviews} bookId={book?.id} mobile={true} />
    </div>
</div>
  );
}

export default BookCheckoutPage
