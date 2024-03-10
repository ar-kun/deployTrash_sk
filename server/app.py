from flask import Flask, Response,jsonify,request,session
import os
import cv2
from flask_cors import CORS 

from Detection import video_detection
app = Flask(__name__)
CORS(app)

def generate_frames_web():
    yolo_output = video_detection()
    for detection_ in yolo_output:
        ref,buffer=cv2.imencode('.jpg',detection_)

        frame=buffer.tobytes()
        yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame +b'\r\n')

@app.route('/yoloModel')
def yoloModel():
    return Response(generate_frames_web(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(debug=True)