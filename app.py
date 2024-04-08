from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def sample_form():
    if request.method == 'GET':
        return render_template('form.html')
    if request.method == 'POST':
        print('POSTデータ受け取ったので処理します。')
        req1 = request.form['data1']
        return f'POST受け取ったよ: {req1}'

if __name__ == '__main__':
    app.run(debug=True)