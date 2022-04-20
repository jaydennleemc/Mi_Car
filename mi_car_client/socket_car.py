import asyncio
import socketio
# from car import Car

sio = socketio.AsyncClient()
# mi_car = Car()

@sio.event
async def connect():
    print('connection established')
    await sio.emit('authenticate', {'type': 'car'})
    print('authenticated')

@sio.event
async def disconnect():
    print('disconnected from server')

@sio.on('car_start')
async def car_start(data):
    print('car_start', data)

@sio.on('car_move')
async def car_move(data):
    print('car_move', data)
    if data.action == 'forward':
        pass
        # mi_car.forward(data.value)
    
    if data.action == 'backward':
        pass
        # mi_car.backward(data.value)

    if data.action == 'turn_left':
        pass
        # mi_car.turn_left(data.value)

    if data.action == 'turn_right':
        pass
        # mi_car.turn_right(data.value)

@sio.on('car_stop')
async def car_stop(data):
    print('car_stop', data)
    pass
    # mi_car.stop()

@sio.on('car_record_start')
async def car_record_start(data):
    print('car_record_start', data)

@sio.on('car_record_stop')
async def car_record_stop(data):
    print('car_record_stop', data)

@sio.on('car_take_picture')
async def car_take_picture(data):
    print('car_take_picture', data)

async def start():
    await sio.connect('http://127.0.0.1:3000')
    await sio.wait()


if __name__ == '__main__':
    asyncio.run(start())
