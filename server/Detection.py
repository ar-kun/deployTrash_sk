from ultralytics import YOLO
import cv2
import math

def video_detection():
    # video_capture = path_x
    # Create a Webcam Object
    cap=cv2.VideoCapture(1)
    # cap=cv2.VideoCapture("http://192.168.137.27:4747/video")
    frame_width=int(cap.get(4))
    frame_height=int(cap.get(4))

    model=YOLO("best.pt")
    classNames = ['NonValuable Waste - Batteries',
  'NonValuable Waste - Chemicals',
  'NonValuable Waste - EWaste',
  'NonValuable Waste - Medical',
  'NonValuable Waste - Textiles',
  'Organic Waste - Food',
  'Residu Waste - Sachet',
  'Valuable Waste - Cans',
  'Valuable Waste - Cardboard',
  'Valuable Waste - Glass',
  'Valuable Waste - Metal',
  'Valuable Waste - Paper',
  'Valuable Waste - Plastic',
  'Valuable Waste - Plastic bottles']
    while True:
        success, img = cap.read()
        results=model(img,stream=True)
        for r in results:
            boxes=r.boxes
            for box in boxes:
                x1,y1,x2,y2=box.xyxy[0]
                x1,y1,x2,y2=int(x1), int(y1), int(x2), int(y2)
                print(x1,y1,x2,y2)
                conf=math.ceil((box.conf[0]*100))/100
                cls=int(box.cls[0])
                class_name=classNames[cls]
                label=f'{class_name}{conf}'
                t_size = cv2.getTextSize(label, 0, fontScale=1, thickness=2)[0]
                print(t_size)
                c2 = x1 + t_size[0], y1 - t_size[1] - 3
                if class_name == 'NonValuable Waste - Batteries':
                    color = (255,0,0)
                elif class_name == 'NonValuable Waste - Chemicals':
                    color = (0,255,0)
                elif class_name == 'NonValuable Waste - EWaste':
                    color = (0,0,255)
                elif class_name == 'NonValuable Waste - Medical':
                    color = (255,255,0)
                elif class_name == 'NonValuable Waste - Textiles':
                    color = (255,0,255)
                elif class_name == 'Organic Waste - Food':
                    color = (0,25,135)
                elif class_name == 'Residu Waste - Sachet':
                    color = (55,202,252)
                elif class_name == 'Valuable Waste - Cans':
                    color = (255,0,85)
                elif class_name == 'Valuable Waste - Cardboard':
                    color = (0,255,85)
                elif class_name == 'Valuable Waste - Glass':
                    color = (85,255,0)
                elif class_name == 'Valuable Waste - Metal':
                    color = (85,0,255)
                elif class_name == 'Valuable Waste - Paper':
                    color = (255,85,0)
                elif class_name == 'Valuable Waste - Plastic':
                    color = (0,85,255)
                elif class_name == 'Valuable Waste - Plastic bottles':
                    color = (85,45,255)
                else:
                    color = (0,0,0)
                if conf>0.5:
                    cv2.rectangle(img, (x1,y1), (x2,y2), color,3)
                    cv2.rectangle(img, (x1,y1), c2, color, -1, cv2.LINE_AA)  # filled
                    cv2.putText(img, label, (x1,y1-2),0, 1,[255,255,255], thickness=1,lineType=cv2.LINE_AA)

        yield img

cv2.destroyAllWindows()