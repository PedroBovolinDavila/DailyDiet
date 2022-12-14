import { Bold, FeedbackContainer, FeedbackDescription, FeedbackImage, FeedbackTitle } from "../../styles/screens/feedbackStyles";

import feedBackImage from '../../assets/negativeFeedback.png'
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function NegativeFeedback() {
  const navigation = useNavigation()

  function handleBackToHome() {
    navigation.navigate('home')
  }

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
        onPress={handleBackToHome}
        small
      />
    </FeedbackContainer>
  )
}