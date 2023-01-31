#!/usr/bin/python3
import mtcnn
import keras_vggface
from scipy import spatial
import os
import sys
import matplotlib.pyplot as plt
import cv2
import numpy as np
import PIL
import shutil
import tensorflow as tf


model=tf.keras.models.load_model("./faceai.h5")


def face_extractor(path):
    face_arr=[]
    detect=mtcnn.MTCNN()
    img=cv2.imread(path)
    n=len(detect.detect_faces(img))
#    plt.figure(figsize=(10,10))
    for i in range(n):
        x,y,w,h=detect.detect_faces(img)[i]['box']
        dis=img[y:y+h,x:x+w]
        dis=PIL.Image.fromarray(dis).resize((224,224))
        dis=np.asarray(dis,dtype='float32')
        face_arr.append(dis)
    return face_arr

def generate_embeddings(fpath='./encode/'):
    files=os.listdir(fpath)
    files=[fpath+f for f in files]
    faces=[]
    for i in files:
        faces.extend(face_extractor(i))
    faces=keras_vggface.utils.preprocess_input(faces,version=2)
    embeddings_known=model.predict(faces)
    return embeddings_known


def compare(embedding_known,embedding_unknown,limit=0.45):
    dist=spatial.distance.cosine(embedding_known,embedding_unknown)
    if dist>limit:
        return 0
    else:
        return 1

def group(embeddings_known,fpath):
    files=os.listdir(fpath)
    files=[fpath+f for f in files]
    faces=[]
    for i in files:
        l=face_extractor(i)
        for j in l:
            j=keras_vggface.utils.preprocess_input(j,version=2)
            j=model.predict(np.expand_dims(j,axis=0))
            for k in embeddings_known:
                result=compare(j,k)
                if result==1:
                    if not os.path.exists('grouped'):
                        os.makedirs('grouped')
                    shutil.copy(i,'grouped')
                    break;                    
#def main():
#    embeddings_known=generate_embeddings('./encode/')
#    group(embeddings_known,'./source/')


#if __name__=="__main__":
#    main()
