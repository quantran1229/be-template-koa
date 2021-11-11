import Router from 'koa-router';
import Response from '../utils/response';
import Constant from '../constants';

const router = new Router();
const res = new Response();

const defaultRouterReturn = async (ctx) => {
    res.setSuccess(undefined, Constant.instance.HTTP_CODE.Success, "Welcome to Backend API. There is no route right now. Add router in routers folder");
    return res.send(ctx);
}
// default api return
router.get('/', defaultRouterReturn);

router.post('/', defaultRouterReturn);

router.put('/', defaultRouterReturn);

router.delete('/', defaultRouterReturn);

export default router;