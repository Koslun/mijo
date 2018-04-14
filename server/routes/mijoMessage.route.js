import express from 'express';
import mijoMessageCtrl from '../controllers/mijoMessage.controller';

const router = express.Router();

router.route('/')
  /** GET /api/mijoMessage - Get list of mijoMessage */
  .get(mijoMessageCtrl.list)

  /** POST /api/mijoMessage - Create new post */
  .post(mijoMessageCtrl.create);

router.route('/:postId')
  /** GET /api/post/:postId - Get post */
  .get(mijoMessageCtrl.get)

  /** PUT /api/mijoMessage/:postId - Update post */
  .put(mijoMessageCtrl.update)

  /** DELETE /api/mijoMessage/:postId - Delete post */
  .delete(mijoMessageCtrl.remove);

/** Load post when API with postId route parameter is hit */
router.param('postId', mijoMessageCtrl.load);

export default router;
