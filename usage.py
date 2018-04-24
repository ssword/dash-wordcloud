import dash_wordcloud
import dash
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    dash_wordcloud.wordcloud(
        # list=[('foo', 12), ('bar', 13)],
        color='random-light',
        backgroundColor='black')
])

# @app.callback(
# 	dash.dependencies.Output('output', 'children'),
# 	[dash.dependencies.Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)

if __name__ == '__main__':
    app.run_server(debug=True)
