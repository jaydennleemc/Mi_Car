import RPi.GPIO as GPIO
import time


class Car():
  def __init__(self):
    self.dc_pin1 = 23
    self.dc_pin2 = 24
    self.servo_pin = 17
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(self.dc_pin1, GPIO.OUT)
    GPIO.setup(self.dc_pin2, GPIO.OUT)
    GPIO.setup(self.servo_pin, GPIO.OUT)
    GPIO.output(self.dc_pin1, GPIO.LOW)
    GPIO.output(self.dc_pin2, GPIO.LOW)
    self.pwm = GPIO.PWM(self.servo_pin, 50)
    self.pwm.start(0)

  def forward(self, speed):
    print('car forward')
    GPIO.output(self.dc_pin1, GPIO.HIGH)
    GPIO.output(self.dc_pin2, GPIO.LOW)

  def backward(self, speed):
    print('car backward')
    GPIO.output(self.dc_pin1, GPIO.LOW)
    GPIO.output(self.dc_pin2, GPIO.HIGH)

  def stop(self):
    print('car stop')
    GPIO.output(self.dc_pin1, GPIO.LOW)
    GPIO.output(self.dc_pin2, GPIO.LOW)

  def turn_left(self, angle):
    print('car turn left')
    if angle == 0:
      self.pwm.ChangeDutyCycle(8)
    elif angle == 1:
      self.pwm.ChangeDutyCycle(9)

  def turn_right(self, angle):
    print('car turn right')
    if angle == 0:
      self.pwm.ChangeDutyCycle(6)
    elif angle == 1:
      self.pwm.ChangeDutyCycle(5)

  def turn_center(self):
    print('car turn center')
    self.pwm.ChangeDutyCycle(7)

  def cleanup(self):
    self.pwm.stop()
    GPIO.cleanup()
