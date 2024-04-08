from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def sample_form():
    video_data = {
        'title': 'タイトル',
        'notes': '動画の紹介とかをします。頑張ってね！！',
    }
    return render_template('typing.html', video_data=video_data)
if __name__ == '__main__':
    app.run(debug=True)