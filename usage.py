import dash_wordcloud
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Output, Input

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    dcc.Checklist(
        id='check',
        options=[{'label': 'data', 'value': 'YES'}],
        values=['YES']
    ),
    dash_wordcloud.Wordcloud(id='wc',
                             list=[('foo', 12), ('bar', 6)],
                             style=dict(height='600px', width='100%'),
                             options=dict(weightFactor=5,
                                          color='random-light',
                                          backgroundColor='black'))
])

@app.callback(
    Output('wc', 'list'),
    [Input('check', 'values')])
def update_wordcloud(value):
    # update the word cloud
    data_list = [('foo', 12), ('bar', 6), ('foobar', 4)]
    if not value:
        return data_list


if __name__ == '__main__':
    app.run_server(debug=True, host='0.0.0.0')
