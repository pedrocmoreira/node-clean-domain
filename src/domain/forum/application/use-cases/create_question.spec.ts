import { QuestionsRepository } from '../repositories/question-repository'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create_question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Uma nova pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
