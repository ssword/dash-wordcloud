import dash_wordcloud
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Output, Input

app = dash.Dash('')

app.scripts.config.serve_locally = True

default_list = [('foo', 12, 7), ('bar', 6, 3)]

def process_data_list(value):
    data_list = [('foo', 12, 7), ('bar', 6, 3), ('foobar', 4, 2)]
    if not value:
        return data_list
    else:
        return default_list

app.layout = html.Div([
    dcc.Checklist(
        id='check',
        options=[{'label': 'data', 'value': 'YES'}],
        values=['YES']
    ),
    dash_wordcloud.Wordcloud(id='wc',
                            #  list = default_list,
                             style=dict(height='700px', width='100%'),
                             options=dict(color='random-light',
                                          size=2,
                                          backgroundColor='black'))
])

@app.callback(
    Output('wc', 'list'),
    [Input('check', 'values')])
def update_wordcloud(value):
    # update the word cloud
    return process_data_list(value)



if __name__ == '__main__':
    app.run_server(debug=True, host='0.0.0.0')
