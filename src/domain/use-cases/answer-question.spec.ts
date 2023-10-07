import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    instructionId: '1',
    questionId: '2',
    content: 'Nova resposta'
  })

  expect(answer.content).toEqual('Nova resposta')
})