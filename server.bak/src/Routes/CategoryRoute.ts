import { NextFunction, Request, Response, Router} from 'express';

const router = Router();
const baseUrl = "/api/1/categories";
router.get(baseUrl + "/", (req: Request, res: Response, next: NextFunction) => {

});