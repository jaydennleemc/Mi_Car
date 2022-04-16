from pyPS4Controller.controller import Controller
from car import Car

myCar = Car()


class MyController(Controller):

  def __init__(self, **kwargs):
    Controller.__init__(self, **kwargs)

  def on_x_press(self):
    print("Hello world")

  def on_x_release(self):
    print("Goodbye world")

  def on_R3_up(self, value):
    myCar.stop()
    print("car stop")

  def on_R3_down(self, value):
    myCar.forward(value)
    print('car go forward')

  def on_R3_right(self, value):
    myCar.backward(value)
    print('car go back')

  def on_R3_left(self, value):
    myCar.stop()
    print('car stop')

  def on_L3_x_at_rest(self):
    myCar.turn_center()
    print('car return center')

  def on_L3_left(self, value):
    myCar.turn_left(1)
    print('car turn left')

  def on_L3_right(self, value):
    myCar.turn_right(1)
    print('car turn right')


controller = MyController(interface="/dev/input/js0", connecting_using_ds4drv=False)
# you can start listening before controller is paired, as long as you pair it within the timeout window
controller.listen(timeout=120)
