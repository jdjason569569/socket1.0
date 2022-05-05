
import {Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response)=>{

    res.json({
        ok: true,
        mensajes: 'todo esta bien'
    })
})


router.post('/mensajes', (req: Request, res: Response)=>{

    const {id, palabra} = req.body;
    console.log(id);
    console.log(palabra);
    
    res.json({
        ok: true,
        mensajes: 'post todo esta bien'
    })
})

router.post('/mensajes/:id', (req: Request, res: Response)=>{

    const {id, palabra} = req.body;
    console.log(id);
    console.log(palabra);
    const p = req.params.id
    console.log(p);
    
    res.json({
        ok: true,
        mensajes: 'post todo esta bien'
    })
})

export default router;