from setuptools import setup
from os import path

this_directory = path.abspath(path.dirname(__file__))
with open(path.join(this_directory, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

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
    install_requires=[],
    long_description=long_description,
    long_description_content_type='text/markdown'
)
