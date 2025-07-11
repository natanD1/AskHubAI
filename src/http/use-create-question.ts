import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateQuestionResponse } from './types/create-question-response'
import type { CreateQuestionRequest } from './types/create-room-question-response'
import type { GetRoomsQuestionsResponse } from './types/get-room-question-response'

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(`http://localhost:3333/rooms/${roomId}/questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: CreateQuestionResponse = await response.json()

      return result
    },

    onMutate({ question }) {
      const questions = queryClient.getQueryData<GetRoomsQuestionsResponse>(['get-questions', roomId])

      const questionsArray = questions ?? []

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      }

      queryClient.setQueryData<GetRoomsQuestionsResponse>(['get-questions', roomId], [newQuestion, ...questionsArray])

      return { newQuestion, questions }
    },

    onSuccess(data, _variables, context) {
      if (context?.newQuestion) {
        queryClient.setQueryData<GetRoomsQuestionsResponse>(['get-questions', roomId], (questions) => {
          if (!questions) {
            return questions
          }

          if (!context.newQuestion) {
            return questions
          }

          return questions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return { ...context.newQuestion, id: data.questionId, answer: data.answer, isGeneratingAnswer: false }
            }

            return question
          })
        })
      }
    },

    onError(_error, _variable, context) {
      if (context?.newQuestion) {
        queryClient.setQueryData<GetRoomsQuestionsResponse>(['get-questions', roomId], context.questions)
      }
    },

    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] })
    // },
  })
}
