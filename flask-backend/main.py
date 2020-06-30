import flask

app = flask.Flask("__main__")


def my_index():
    return "Hello World"
