import zmq from 'zeromq';
import { zmqUrl } from './shared.js';
import { logger } from '../utils/logger.js';
import { z } from 'zod';
import {
  classifySurveyMQSchema,
  translateSurveyMQSchema,
} from '../model/prompt/survey.js';

const sock = new zmq.Push();

sock.bind(zmqUrl).then(() => {
  logger.info('Producer bound to:', zmqUrl);
});

export async function sendBuildLighthouseMessageQueue(
  workspaceId: string,
  websiteId: string,
  reportId: string,
  url: string
) {
  await sock.send([
    'lighthouse',
    JSON.stringify({ workspaceId, websiteId, reportId, url }),
  ]);
}

export async function sendBuildSurveyClassifyMessageQueue(
  options: z.infer<typeof classifySurveyMQSchema>
) {
  await sock.send(['surveyClassify', JSON.stringify(options)]);
}

export async function sendBuildSurveyTranslationMessageQueue(
  options: z.infer<typeof translateSurveyMQSchema>
) {
  await sock.send(['surveyTranslation', JSON.stringify(options)]);
}
