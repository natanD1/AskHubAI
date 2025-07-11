import { useQuery } from '@tanstack/react-query'
import type { GetRoomsQuestionsResponse } from './types/get-room-question-response'

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3333/rooms/${roomId}/questions`)
      const result: GetRoomsQuestionsResponse = await response.json()
      return result
    },
  })
}
