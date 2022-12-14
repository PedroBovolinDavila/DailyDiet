interface calculatePercentageProps {
  total: number
  part: number
}

export function calculatePercentage({ total, part }: calculatePercentageProps) {
  if (total === 0) {
    return '0,00'
  }

  const value = (part * 100 / total)
    .toFixed(2)
    .replace('.', ',')

  return value
}
