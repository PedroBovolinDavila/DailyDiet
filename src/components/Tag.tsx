import { TagContainer, TagStatus, TagTitle } from "../styles/components/tagStyles";

interface TagProps {
  status: 'in' | 'out'
}

export function Tag({ status }: TagProps) {
  return (
    <TagContainer>
      <TagStatus status={status} />
      <TagTitle>
        {status === 'in' ? 'dentro da dieta' : 'fora da dieta'}
      </TagTitle>
    </TagContainer>
  )
}