import dash_wordcloud
import dash
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash('')

# Append an externally hosted CSS stylesheet
# wordcloud_css_url = "https://codepen.io/ssword/pen/LmNKMQ.css"
# bootstrap_css_url = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"

# app.css.append_css({
#     "external_url": wordcloud_css_url
# })

# app.css.append_css({
#     "external_url": bootstrap_css_url
# })

app.scripts.config.serve_locally = True

app.layout = html.Div([
    dash_wordcloud.Wordcloud(
        # list=[('foo', 12), ('bar', 13)],
        weightFactor=5,
        color='random-light',
        backgroundColor='black')
])

# @app.callback(
# 	dash.dependencies.Output('output', 'children'),
# 	[dash.dependencies.Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)

if __name__ == '__main__':
    app.run_server(debug=True, host='0.0.0.0')
