import { Router } from 'express';
import controllers from './controllers';

const routes = Router();

routes.get('/sample', controllers.SampleController.index);
routes.get('/sample/:id', controllers.SampleController.show);
routes.post('/sample', controllers.SampleController.store);
routes.put('/sample/:id', controllers.SampleController.update);
routes.delete('/sample/:id', controllers.SampleController.delete);

export default routes;
