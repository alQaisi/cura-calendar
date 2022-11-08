import { Star,ReviewText,ReviewContainer } from "../styles";

export default function Review(rev_total,rev_number){
    return(
        <ReviewContainer>
            <div>
                <Star/><Star/><Star/><Star/><Star/>
            </div>
            <ReviewText>978 Reviews</ReviewText>
        </ReviewContainer>
    );
}
