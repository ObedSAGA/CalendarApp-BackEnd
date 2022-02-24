const {response} = require('express');
const Event = require('../models/Event');

const getEventos = async(req, res = response) => {

    const eventos = await Event.find().populate('user', 'name');

    res.json({
        ok: true,
        eventos
    });
}

const crearEvento = async (req, res = response) => {
    const event = new Event(req.body);

    try {
        event.user = req.uid;
        const eventSaved = await event.save();
        res.json({
            ok: true,
            event: eventSaved
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
    
}

const actualizarEvento = async(req, res = response) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Event.findById(eventId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe'
            })
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene autorizacion para editar este evento'
            })
        }   
        
        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Event.findByIdAndUpdate(eventId, nuevoEvento, {new: true});
        res.json({
            ok: true,
            evento: eventoActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador'
        });
    }
}


const eliminarEvento = async(req, res = response) => {
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Event.findById(eventId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe'
            })
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene autorizacion para editar este evento'
            })
        }   
        

        await Event.findByIdAndDelete(eventId)
        res.json({
            ok: true,
            msg: 'Evento eliminado'
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador'
        });
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}