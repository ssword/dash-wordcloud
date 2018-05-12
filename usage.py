import dash_wordcloud
import dash
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    dash_wordcloud.Wordcloud(
        style=dict(height= '600px', width= '100%'),
        options=dict(
            weightFactor=5,
            color='random-light',
            backgroundColor='black'))
])

if __name__ == '__main__':
    app.run_server(debug=True, host='0.0.0.0')
