#!/usr/bin/python3

import gradio as gr
import os
from PIL import Image
import faceaiapi as fa


def save_target(files):
    c = 0
    for file in files:
        with Image.open(file) as img:
            img = img.convert("RGB")
            img.save("./encode/" + f"{c}_image.jpg")
            c += 1
    return f" {len(files)} files saved successfully."


def save_source(files):
    c = 0
    for file in files:
        with Image.open(file) as img:
            img = img.convert("RGB")
            img.save("./source/" + f"{c}_image.jpg")
            c += 1
    return f" {len(files)} files saved successfully."


def results():
    embeddings_known = fa.generate_embeddings("./encode/")
    fa.group(embeddings_known, "./source/")
    res = []
    location = "./grouped/"
    files = os.listdir(location)
    files = [location + f for f in files]
    for file in files:
        with Image.open(file) as img:
            img = img.convert("RGB")
            res.append(img)
    return res


with gr.Blocks() as demo:
    gr.HTML('''<h1 style="font-size:60px; text-align:center; font-family:futura; padding-top:20px" > Face AI </h1><br></br>
    <p style="font-size:20px; text-align:center; font-family:futura">A one stop solution for Photographers to quickly find their client images.</p>''')
    with gr.Row():
        inputs = gr.File(file_count="multiple",file_types=['image'])
        outputs = gr.outputs.Textbox()
        btn1 = gr.Button("Upload").style(full_width=False)
    btn1.click(save_target, inputs=inputs, outputs=outputs)
    with gr.Row():
        inputs = gr.File(file_count="multiple",file_types=['image'])
        outputs = gr.outputs.Textbox()
        btn1 = gr.Button("Upload").style(full_width=False)
    btn1.click(save_source, inputs=inputs, outputs=outputs)
    with gr.Column():
        gallery = gr.Gallery().style(grid=[4], height="auto")
        btn = gr.Button("View Result").style(full_width=False)
    btn.click(results, None, gallery)

demo.launch(share=False)
