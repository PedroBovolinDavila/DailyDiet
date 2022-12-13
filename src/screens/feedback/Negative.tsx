import { Bold, FeedbackContainer, FeedbackDescription, FeedbackImage, FeedbackTitle } from "../../styles/screens/feedbackStyles";

import feedBackImage from '../../assets/negativeFeedback.png'
import { Button } from "../../components/Button";

export function NegativeFeedback() {
  return (
    <FeedbackContainer>
      <FeedbackTitle variant="red">
        Que pena!
      </FeedbackTitle>
      <FeedbackDescription>
        Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e não desista!
      </FeedbackDescription>
      <FeedbackImage 
        source={feedBackImage}
      />
      <Button 
        text="Ir para a página inicial"
        small
      />
    </FeedbackContainer>
  )
}