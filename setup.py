from setuptools import setup

exec(open('dash_wordcloud/version.py').read())

setup(
    name='dash_wordcloud',
    version=__version__,
    author='ssword',
    author_email='ssword@gmail.com',
    packages=['dash_wordcloud'],
    include_package_data=True,
    license='MIT',
    description='A Dash UI component for wordcloud visualization',
    install_requires=[]
)
