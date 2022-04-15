from picamera import PiCamera
from time import sleep
from subprocess import call 

def take_photo():
    camera = PiCamera()
    camera.capture('image.jpg')


def record_video():
    camera = PiCamera()
    camera.start_recording('video.h264')
    sleep(5)
    camera.stop_recording()

def record_video_mp4():
    camera = PiCamera()
    camera.resolution = (640, 480)
    camera.framerate = 30

    def convert(file_h264, file_mp4):
        # Record a 15 seconds video.
        camera.start_recording(file_h264)
        sleep(15)
        camera.stop_recording()
        print("Rasp_Pi => Video Recorded! \r\n")
        # Convert the h264 format to the mp4 format.
        command = "MP4Box -add " + file_h264 + " " + file_mp4
        call([command], shell=True)
        print("\r\nRasp_Pi => Video Converted! \r\n")
    
    # Record a video and convert it (MP4).
    convert('test.h264', 'test.mp4')


take_photo()