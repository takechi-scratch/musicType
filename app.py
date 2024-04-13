from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET"])
def sample_form():
    video_data = {
        "title": "テストタイピング",
        "notes": "現在製作中です。原型はだいぶできて来ました。",
    }
    return render_template("play.html", video_data=video_data)

if __name__ == "__main__":
    app.run(debug=True)