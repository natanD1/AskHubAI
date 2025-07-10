import { useQuery } from '@tanstack/react-query'
import type { GetRoomsAPIResponse } from './types/get-rooms-response'

export function useRooms() {
  return useQuery({
    queryKey: ['getRooms'], // Identificador único
    queryFn: async () => {
      // Qual função vou usar para trazer os dados da api
      const response = await fetch('http://localhost:3333/rooms') // URL da API
      const result: GetRoomsAPIResponse = await response.json() // Transformar a resposta em JSON

      return result
    },
  })
}
