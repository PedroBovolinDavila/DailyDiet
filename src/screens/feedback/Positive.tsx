import { Bold, FeedbackContainer, FeedbackDescription, FeedbackImage, FeedbackTitle } from "../../styles/screens/feedbackStyles";

import feedBackImage from '../../assets/positiveFeedback.png'
import { Button } from "../../components/Button";

export function PositiveFeedback() {
  return (
    <FeedbackContainer>
      <FeedbackTitle>
        Continue assim!
      </FeedbackTitle>
      <FeedbackDescription>
        Você continua <Bold>dentro da dieta</Bold>. Muito bem!
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