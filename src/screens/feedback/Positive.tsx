import { Bold, FeedbackContainer, FeedbackDescription, FeedbackImage, FeedbackTitle } from "../../styles/screens/feedbackStyles";

import feedBackImage from '../../assets/positiveFeedback.png'
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function PositiveFeedback() {
  const navigation = useNavigation()

  function handleBackToHome() {
    navigation.navigate('home')
  }

  return (
    <FeedbackContainer>
      <FeedbackTitle variant="green">
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
        onPress={handleBackToHome}
        small
      />
    </FeedbackContainer>
  )
}